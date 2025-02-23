import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { setSearchQuery, setCategory } = useContext(NewsContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setCategory("");
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-bar-form">
        <input
          type="text"
          placeholder="Search for news..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-bar-input"
        />
        <button type="submit" className="search-bar-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;