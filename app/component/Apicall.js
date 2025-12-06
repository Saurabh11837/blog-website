"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const categories = [
  "All",
  "Technology",
  "Music",
  "Lifestyle",
  "Fitness",
  "Food & Drink",
  "Startup",
  "Finance & Business",
  "Art & Culture",
  "Politics & Social Issues",
  "Education",
  "Travel & Adventure",
  "Sports & Fitness",
  "Fashion & Beauty",
  "Health & Wellness",
  "Science & Innovation",
  "Environment & Sustainability",
  "Entertainment & Pop Culture",
  "Programming & Development",
  "Gaming & Esports",
  "Photography & Visual Arts",
];

const Apicall = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // SEE MORE / SEE LESS

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonfakery.com/blogs");
        setData(response.data);
        setFiltered(response.data);
      } catch (error) {
        console.log("Error while fetching data : ", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // CATEGORY FILTER
  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setSearch("");

    if (cat === "All") {
      setFiltered(data);
    } else {
      const result = data.filter((item) => item.category === cat);
      setFiltered(result);
    }
  };

  // SEARCH FILTER
  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearch(text);

    if (text === "") {
      handleCategory(activeCategory);
      return;
    }

    const result = data.filter((item) =>
      item.title.toLowerCase().includes(text)
    );

    setFiltered(result);
  };

  // Dummy placeholders
  const DummyCards = Array(10).fill(null);

  return (
    <div className="w-full bg-#F8FAFC">

      {/* -------- HEADER -------- */}
      <div className="text-center py-5 px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          This is a <span className="text-blue-500">blogging</span> platform.
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          This is your space to think out loud, to share what matters, and to write freely.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mt-8">
          <div className="flex bg-white shadow-md rounded-full p-2 w-full max-w-lg">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search Blog..."
              className="w-full px-4 py-2 outline-none rounded-full"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">

          {/* Show only first 6 until See More */}
          {(showAll ? categories : categories.slice(0, 6)).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition 
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SEE MORE / SEE LESS */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-blue-600 font-medium underline cursor-pointer"
        >
          {showAll ? "See Less" : "See More"}
        </button>

        {/* No result message */}
        {(filtered.length === 0 && !loading) && (
          <p className="text-red-500 mt-6 font-medium">
            {search
              ? "No blogs found for your search."
              : "No blog found in this category."}
          </p>
        )}
      </div>

      {/* -------- BLOG GRID -------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">

        {/* Dummy Skeletons */}
        {loading &&
          DummyCards.map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-80 rounded-2xl animate-pulse"
            ></div>
          ))}

        {/* Actual Cards */}
        {!loading &&
          filtered.map((item) => <Card key={item.id} item={item} />)}

      </div>
    </div>
  );
};

export default Apicall;
