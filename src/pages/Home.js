import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: "center" }}>AURA News</h1>
      <SearchBar />
      <CategoryFilter />
      <NewsList />
    </div>
  );
};

export default Home;