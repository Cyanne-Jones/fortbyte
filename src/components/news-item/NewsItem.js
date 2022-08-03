import React from "react";
import "./NewsItem.css"
import '../shared-styles.css'
import useDataStore from "../hooks/useDataStore"

const NewsItem = ({item}) => {

  const toggleFavoritedNewsItem = useDataStore((state) => state.toggleFavoritedNewsItem)
  return (
    <div className="news-item yellow-gradient">
      <div className="news-header">
        <h2 className="news-title blue-gradient">{item.title}</h2>
        <p 
          className={item.isFavorited ? "star star-favorite" : "star"}
          onClick={() => toggleFavoritedNewsItem(item.id)}
        >
            ★
        </p>
      </div>
      <div className="news-body">
        <p className="news-text">{item.body}</p>
        <img src={item.image} alt="news image"/>
      </div>
    </div>
  )
}

export default NewsItem;