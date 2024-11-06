import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Sass/news.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import NewsImg from "../assets/news_img.svg";
export default function News() {
  const [news, setNews] = useState([
    {
      id: 1,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 2,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 3,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 4,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 5,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 6,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 7,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 8,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
  ]);
  const [news2, setNews2] = useState([
    {
      id: 1,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 2,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 3,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 4,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 5,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 6,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 7,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
    {
      id: 8,
      date: "Monday 05, September 2021",
      author: "John hanks",
      article: "This Article's Title goes Here, but not too long.",
      watched: 68,
      liked: 86,
      image: NewsImg,
    },
  ]);
  return (
    <div className="news_father_container">
      <div className="news_child_container_1">
        <p>Better information, Better health</p>
        <p>News</p>
      </div>
      <div className="news_child_container_2">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper1"
        >
          {news.length > 0 &&
            news.map((item) => {
              const [liked, setLiked] = useState(false);
              const handleLike = (item) => {
                setLiked((p) => !p);
                item.liked = liked ? item.liked - 1 : item.liked + 1;
              };
              return (
                <SwiperSlide key={item.id} className="news_swiper-slider">
                  <div className="news_OlderChild-1">
                    <div className="news_child-1">
                      <img src={item.image} alt="news_img" />
                    </div>

                    <div className="news_child-2">
                      <div className="news_child-2-div-1">
                        <p className="date-author">
                          {item.date} | {item.author}
                        </p>
                        <h2 className="article">{item.article}</h2>
                      </div>

                      <div className="news_child-2-div-2">
                        <div>
                          <i className="fa-regular fa-eye"></i>
                          <p>{item.watched}</p>
                        </div>

                        <div>
                          <i
                            className={`${liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}`}
                            onClick={() => handleLike(item)}
                          ></i>
                          <p>{item.liked}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
        >
          {news2.length > 0 &&
            news2.map((item) => {
              const [liked_2, setLiked_2] = useState(false);
              const handleLike2 = (item) => {
                setLiked_2((p) => !p);
                item.liked = liked_2 ? item.liked - 1 : item.liked + 1;
              };
              return (
                <SwiperSlide key={item.id} className="news_swiper-slider">
                  <div className="news_OlderChild-1">
                    <div className="news_child-1">
                      <img src={item.image} alt="news_img" />
                    </div>

                    <div className="news_child-2">
                      <div className="news_child-2-div-1">
                        <p className="date-author">
                          {item.date} | {item.author}
                        </p>
                        <h2 className="article">{item.article}</h2>
                      </div>

                      <div className="news_child-2-div-2">
                        <div>
                          <i className="fa-regular fa-eye"></i>
                          <p>{item.watched}</p>
                        </div>

                        <div>
                          <i
                           className={`${liked_2 ? "fa-solid fa-heart" : "fa-regular fa-heart"}`}
                            onClick={() => handleLike2(item)}
                          ></i>
                          <p>{item.liked}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
{
  /* <div className="news_OlderChild-2">
<div className="news_child-1">
  <img src={item.image} alt="news_img" />
</div>
<div className="news_child-2">
  <div className="news_child-2-div-1">
    <p className="date-author">
      {item.date} | {item.author}
    </p>
    <h2 className="article">{item.article}</h2>
  </div>
  <div className="news_child-2-div-2">
    <div>
      <i className="fa-regular fa-eye"></i>
      <p>{item.watched}</p>
    </div>
    <div>
      <i className="fa-regular fa-heart"></i>
      <p>{item.liked}</p>
    </div>
  </div>
</div>
</div> */
}
