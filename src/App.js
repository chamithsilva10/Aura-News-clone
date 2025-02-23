import React from "react";
import { NewsProvider } from "./context/NewsContext";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  return (
    <NewsProvider>
      <div className="App">
        <Home />
      </div>
    </NewsProvider>
  );
};

export default App;