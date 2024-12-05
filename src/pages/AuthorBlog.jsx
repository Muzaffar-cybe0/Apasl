import "../sass/authorBlog.scss";
import BreadCrumbs from "../components/BreadCrumbs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AuthorBlog() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.error("Failed to fetch speakers data:", err));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data
    .filter((product) => product && product.title)
    .filter((product) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="AuthorBlog">
      <div className="AuthorBlog_OlderCh-1">
        <p>Author: exhobz</p>
        <BreadCrumbs />
      </div>

      <div className="AuthorBlog_OlderCh-2">
        <div className="AuthorBlog_OlderCh-2_brother-1">
          {filteredProducts.map((item) => {
            return (
              <div
                key={item.id}
                className="AuthorBlog_OlderCh-2_brother-1_card"
              >
                <img src={item.image} alt="news_image" />

                <div>
                  <Link to={"/home/authorblogs"}>
                    <i className="fa-regular fa-user"></i> Exhobz
                  </Link>
                  <span>
                    <i className="fa-regular fa-calendar"></i> march 10, 2019
                  </span>
                </div>

                <Link to={`/home/blog/${item.id}`}>{item.title}</Link>
                <p>{item.info1}</p>
                <Link to={`/home/blog/${item.id}`}>
                  <p>read more</p>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="AuthorBlog_OlderCh-2_brother-2">
          <div className="AuthorBlog_OlderCh-2_brother-2_search-1">
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search"
            />
          </div>

          <div className="AuthorBlog_OlderCh-2_brother-2_search-2">
            <div>
              <h1>Recent Posts</h1>
            </div>
            <div>
              {data.map((item) => {
                return (
                  <Link to={`/home/blog/${item.id}`} key={item.id}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
