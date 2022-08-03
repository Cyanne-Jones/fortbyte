import React, { useState } from "react";
import useDataStore from "../hooks/useDataStore"
import NewsItem from "../news-item/NewsItem"
import "./News.css"
import "../shared-styles.css"

const News = () => {

  const newsItems = useDataStore((state) => state.newsItems);
  const [favoriteMode, setFavoriteMode] = useState(false);

  const toggleFavoriteMode = () => {
    setFavoriteMode(!favoriteMode)
  }

  const mappedNewsItems = newsItems
    .map(item => {
      return <NewsItem 
        key={item.id}
        item={item}
      />});

  const filteredNewsItems = newsItems
      .filter(item => item.isFavorited)
      .map(item => {
        return <NewsItem 
        key={item.id}
        item={item}
      />})

  return(
    <div className="news">
      <button
        onClick={toggleFavoriteMode}
        className="yellow-gradient text-drop-shadow"
        >
          FILTER BY STARRED NEWS
      </button>
      <div className="news-display">
        {favoriteMode ? filteredNewsItems : mappedNewsItems}
      </div>
    </div>
  )
};

export default News;