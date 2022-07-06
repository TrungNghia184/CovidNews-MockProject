import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swiper, { Navigation, Pagination } from "swiper";
import i18n from "i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";
export default function NewsPage() {
  const [language, setLanguage] = useState("en");
  const selectedLanguage = useSelector((state) => state.global.language);
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  const [newsList, setNewsList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [mainNews, setMainNews] = useState([1, 2, 3, 4]);
  const stringtifyNews = JSON.stringify(newsList);
  async function getNews() {
    const rawNewsData = await fetch(
      "https://corona--tracker.herokuapp.com/newslist?_page=1&_limit=20 "
    );
    let refinedData = await rawNewsData.json();
    setNewsList(refinedData);
    console.log(newsList);
    console.log(newsList[0]?.author);
  }
  useEffect(() => {
    getNews();
  }, []);
  useEffect(() => {
    const mainNewsList = newsList.slice(0, 4);
    setMainNews(mainNewsList);
    console.log(mainNewsList);
  }, [newsList[0]?.author]);
  useEffect(() => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);
  return (
    <div className="newsContainer">
      <div class="swiper">
        <div class="swiper-wrapper">
          {mainNews.map((news, key) => {
            return (
              <div
                class="swiper-slide"
                key={key}
                style={{ backgroundImage: `url(${news.urlToImage})` }}
              >
                <h3>{news.title}</h3>
                <h4>{news?.source?.name}</h4>
                <p>{news.description}</p>
              </div>
            );
          })}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
      </div>
      <div class="related-news-container">
        {newsList.slice(5, newsList.length - 1).map((news, key) => {
          return (
            <a href={news.url}>
              <div className="related-news">
                <h3>{news.title}</h3>
                <img src={news?.urlToImage}></img>
                <h4>{news?.source?.name}</h4>
                <p>{news.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
//   <div className="newsContainer__main"></div>
//   <div className="newsContainer__hot"></div>
//   <div className="newsContainer__related"></div>
