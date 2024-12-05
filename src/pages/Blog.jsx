import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import BreadCrumbs from "../components/BreadCrumbs";
import "../sass/blog.scss";
import { Link } from "react-router-dom";

export default function Blog() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [infos, setInfos] = useState([]); // Array of blogs
  const [info, setInfo] = useState(null); // Current blog

  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((json) => {
        setInfos(json); // Store all blogs
        const currentInfo = json.find((item) => String(item.id) === itemId); // Find the current blog
        setInfo(currentInfo); // Set the current blog
      })
      .catch((err) => console.error("Failed to fetch blog data:", err));
  }, [itemId]);

  if (!info) {
    return <p>Loading...</p>;
  }

  const handlePrev = () => {
    const currentIndex = infos.findIndex((item) => String(item.id) === itemId);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + infos.length) % infos.length;
      const prevItem = infos[prevIndex];
      setInfo(prevItem);
      navigate(`/home/blog/${prevItem.id}`); // Update URL
    }
  };

  const handleNext = () => {
    const currentIndex = infos.findIndex((item) => String(item.id) === itemId);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % infos.length;
      const nextItem = infos[nextIndex];
      setInfo(nextItem);
      navigate(`/home/blog/${nextItem.id}`); // Update URL
    }
  };

  return (
    <div className="blog">
      <div className="blog_OlderCh-1">
        <h1>Blog</h1>
        <BreadCrumbs />
      </div>

      <div className="blog_OlderCh-2">
        <h1>{info.title}</h1>
        <div>
          <Link to="/home/authorblogs">
            <i className="fa-regular fa-user"></i>
            <p>exobz</p>
          </Link>
          <span>
            <i className="fa-regular fa-calendar"></i>
            <p>{info.date}</p>
          </span>
        </div>
        <img src={info.image} alt={info.title} />
        <p>{info.info1}</p>
        <h2>{info.title2}</h2>
        <p>{info.info2}</p>
        <img src={info.image} alt={info.title} />
        <p>{info.info2}</p>
      </div>

      <div className="blog_OlderCh-3">
        <button onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left-long"></i>
          <p>Previous</p>
        </button>
        <button onClick={handleNext}>
          <p>Next</p>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>

      <div className="blog_OlderCh-4">
        <div className="comment-form-container">
          <h2>Leave a Reply</h2>
          <p>
            Your email address will not be published. Required fields are marked{" "}
            <span>*</span>
          </p>
          <form className="comment-form">
            <div className="input-group">
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
            </div>
            <div className="input-group">
              <input type="url" placeholder="Enter Website" />
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="save-info" />
              <label htmlFor="save-info">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <div className="textarea-group">
              <textarea
                placeholder="Enter your comment here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Post Comment
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
