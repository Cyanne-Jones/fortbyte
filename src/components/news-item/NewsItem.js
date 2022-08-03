import React from "react";
import "./NewsItem.css"
import '../shared-styles.css'

const NewsItem = ({item}) => {
  return (
    <div className="news-item yellow-gradient">
      <div className="item-header">
        <h2>{item.title}</h2>
        <p className="favorite-star">★</p>
      </div>
      <p>{item.body}</p>
      <img src={item.image} alt="news image"/>
    </div>
  )
}

export default NewsItem;