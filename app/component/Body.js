"use client";
import React, { useState } from "react";
import Image from "next/image";

import LifeStyle01 from "../component/asset/LifeStyle_01.webp";
import LifeStyle02 from "../component/asset/Lifestyle_02.webp";
import LifeStyle03 from "../component/asset/Lifestyle_03.webp";
import Startup01 from "../component/asset/Startup_01.webp";
import Startup02 from "../component/asset/Startup_02.webp";
import Startup03 from "../component/asset/Startup_03.webp";
import Technology01 from "../component/asset/Technology_01.webp";
import Technology02 from "../component/asset/Technology_02.webp";
import Technology03 from "../component/asset/Technology_03.webp";
import Finance from "../component/asset/Finance.webp";

import { Poppins, Dancing_Script } from "next/font/google";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
});

const Body = ({}) => {
  const blogPosts = [
    {
      id: 1,
      title: "A detailed step by step guide to manage your lifestyle",
      category: "Lifestyle",
      author: "John Carter",
      description:
        "A simple step-by-step guide to managing your lifestyle effectively.",
      image: LifeStyle01,
      date: "Oct 15, 2025",
    },
    {
      id: 2,
      title: "How to create an effective startup roadmap idea",
      category: "Startup",
      author: "Elena Smith",
      description:
        "Creating an effective startup roadmap helps you plan an idea into architecture.",
      image: Startup01,
      date: "Oct 10, 2025",
    },
    {
      id: 3,
      title: "Learning new technology to boost your career in software",
      category: "Technology",
      author: "Michael Brown",
      description:
        "New skills = new opportunities. Learn how to grow as a software engineer.",
      image: Technology01,
      date: "Oct 5, 2025",
    },
    {
      id: 4,
      title: "Tips for getting the most out of apps and software",
      category: "Technology",
      author: "Sara Adams",
      description:
        "We use tons of apps daily — here’s how to make the most of them.",
      image: Technology02,
      date: "Sep 29, 2025",
    },
    {
      id: 5,
      title: "Enhancing your skills and capturing memorable moments",
      category: "Lifestyle",
      author: "Emily Clark",
      description:
        "In today’s fast world, balancing work and passion is the key.",
      image: LifeStyle02,
      date: "Sep 25, 2025",
    },
    {
      id: 6,
      title: "Maximizing returns by minimizing resources in your startup",
      category: "Startup",
      author: "Ryan Lewis",
      description:
        "Smart scaling: how startups achieve more with fewer resources.",
      image: Startup02,
      date: "Sep 20, 2025",
    },
    {
      id: 7,
      title: "Taxes on Luxury Houses",
      category: "Finance",
      author: "David Green",
      description:
        "Luxury home taxes — what they mean for the market and your wallet.",
      image: Finance,
      date: "Sep 12, 2025",
    },
    {
      id: 8,
      title: "The New Way of Study",
      category: "Startup",
      author: "Monica Lee",
      description:
        "Blending traditional study with new digital tools for better learning.",
      image: Startup03,
      date: "Sep 5, 2025",
    },
  ];
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Music",
    "Lifestyle",
    "Fitness",
    "Food",
    "Startup",
    "Finance",
  ];

  // ✅ Handle category click
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Real-time filtering logic (safe)
  const filteredPosts = (blogPosts ?? []).filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className={`${poppins.className} flex -mt-2 md:mt-4`}>
        <div className="flex-1 mt-1 md:-mt-5 bg-gray-50 border border-4xl border-blue-800 ">
          <main className="w-full h-full flex flex-col items-center gap-5">
            <div className=" md:px-30 flex flex-col items-center gap-5">
              <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-700 mb-4">
                This is a{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  blogging
                </span>{" "}
                <br />
                platform.
              </h1>
              <p className="text-center text-gray-700 text-xs px-5 md:px-0 md:text-sm lg:text-base">
                This is your space to think out loud, to share what matters, and
                to write without filters. Whether it&apos;s one word or a thousand,
                your story starts right here.
              </p>

              {/* ✅ Search Bar */}

              {/* ✅ Centered & Balanced Search Bar */}
              <div className="flex items-center justify-center w-full md:w-1/2 px-4 mt-4">
                <div className="flex items-center w-full bg-white border border-gray-300 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200">
                  {/* Search Icon */}
                  <FiSearch className="text-gray-500 ml-4" size={20} />

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search Blog..."
                    className="flex-grow px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  {/* Search Button */}
                  <button
                    onClick={() => {
                      console.log(`Searching for: ${search}`);
                      setTimeout(() => setSearch(""), 300); // ✅ smooth clear
                    }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 rounded-full mr-2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* ✅ Category Buttons */}
            <div className="flex flex-row justify-center items-center gap-4 mb-10 flex-wrap px-2">
              {categories.map((category) => (
                <p
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`text-base md:text-lg px-4 py-1 border rounded-2xl cursor-pointer transition-all duration-200
                    ${
                      selectedCategory === category
                        ? "bg-blue-700 text-white border-blue-700 shadow-md"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                >
                  {category}
                </p>
              ))}
            </div>

            {/* ✅ Filtered Posts */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-full md:w-4/5 -mt-15 ">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id} // ✅ key belongs here
                    href={{
                      pathname: `/blog/${post.id}`,
                      query: {
                        title: post.title,
                        category: post.category,
                        author: post.author,
                        description: post.description,
                        image: post.image.src,
                        date: post.date,
                      },
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="object-cover w-full h-48"
                      />
                      <div className="p-4">
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-3 text-gray-800">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {post.description}
                        </p>
                        <div className="text-gray-400 text-xs mt-3 flex justify-between items-center">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // ✅ Clean Empty State when no data
              <div className="flex flex-col items-center justify-center text-center py-20 border rounded-2xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  No blogs found
                </h2>
                <p className="text-gray-500 max-w-md">
                  It seems there are no posts available in{" "}
                  <span className="font-medium text-blue-600">
                    {selectedCategory}
                  </span>{" "}
                  category or matching your search for{" "}
                  <span className="font-medium text-indigo-600">
                    “{search || "anything"}”
                  </span>
                  .<br />
                  Try choosing another category or clearing your search!
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Body;
