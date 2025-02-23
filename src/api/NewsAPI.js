import axios from "axios";

const API_KEY = "b5b2675e793fad79780c55eb379e6e6d"; // Hardcoded API key for testing
const BASE_URL = "https://gnews.io/api/v4/top-headlines";

export const fetchNews = async (query = "", category = "", pageSize = 12) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query || category,
        token: API_KEY,
        max: pageSize,
        lang: "en",
      },
    });

    console.log("API Response:", response.data); // Debugging
    return response.data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error.response ? error.response.data : error.message); // Debugging
    return [];
  }
};