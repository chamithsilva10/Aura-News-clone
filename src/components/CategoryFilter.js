import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import "./CategoryFilter.css";

const categories = ["All", "Technology", "Health", "Science", "Sports", "Entertainment", "Business"];

const CategoryFilter = () => {
  const { setCategory, setSearchQuery } = useContext(NewsContext);

  const handleCategoryClick = (category) => {
    setCategory(category === "All" ? "" : category);
    setSearchQuery("");
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;