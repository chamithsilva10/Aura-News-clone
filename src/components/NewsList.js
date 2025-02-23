import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import "./NewsList.css";

const NewsList = () => {
  const { news, loading } = useContext(NewsContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (news.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <div className="news-list">
      {news.map((article, index) => (
        <div key={index} className="news-item">
          <img
            src={article.image || "https://via.placeholder.com/300"} // Fallback image if article.image is missing
            alt={article.title}
            className="news-image"
          />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;