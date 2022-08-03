import React, { useEffect } from "react";
import useDataStore from "../hooks/useDataStore"
import NewsItem from "../news-item/NewsItem"

const News = () => {

  const newsItems = useDataStore((state) => state.newsItems);

  const mappedNewsItems = newsItems
    .map(item => {
      return <NewsItem 
        key={item.id}
        item={item}
      />});

  return(
    <div className="news">
      {mappedNewsItems}
    </div>
  )
};

export default News;