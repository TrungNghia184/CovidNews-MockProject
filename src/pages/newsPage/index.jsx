import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
export default function NewsPage() {
  const [newsList, setNewsList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  async function getNews() {
    const rawNewsData = await fetch(
      "https://corona--tracker.herokuapp.com/newslist?_page=1&_limit=20 "
    );
    let refinedData = await rawNewsData.json();
    setNewsList(refinedData);
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <> News
          <div className="main-news-container"></div>
          <div className="hot-news-container"></div>
          <div className="related-news-container"></div>
    </>
  );
}
