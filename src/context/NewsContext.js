import React, { createContext, useState, useEffect } from "react";
import { fetchNews } from "../api/NewsAPI";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      console.log("Fetching news for query:", searchQuery, "and category:", category); // Debugging
      const articles = await fetchNews(searchQuery, category, 12);
      console.log("Fetched articles:", articles); // Debugging
      setNews(articles);
      setLoading(false);
    };

    getNews();
  }, [searchQuery, category]);

  return (
    <NewsContext.Provider
      value={{ news, setNews, loading, setLoading, searchQuery, setSearchQuery, setCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};