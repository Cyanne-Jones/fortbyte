import React from "react";
import "./NewsItem.css";
import "../shared-styles.css";
import useDataStore from "../hooks/useDataStore";
import PropTypes from 'prop-types';

const NewsItem = ({item}) => {

  const toggleFavoritedNewsItem = useDataStore((state) => state.toggleFavoritedNewsItem)
  return (
    <div className="news-item yellow-gradient box-shadow">
      <div className="news-header">
        <h2 className="news-title blue-gradient text-drop-shadow">
          {item.title}
        </h2>
        <p 
          className={item.isFavorited ? "star star-favorite text-drop-shadow" : "star text-drop-shadow"}
          onClick={() => toggleFavoritedNewsItem(item.id)}
        >
            ★
        </p>
      </div>
      <div className="news-body">
        <p className="news-text">
          {item.body}
        </p>
        <img className="news-image" 
          src={item.image} 
          alt="news image"
        />
      </div>
    </div>
  )
};

NewsItem.propTypes = {
  item: PropTypes.object
};

export default NewsItem;