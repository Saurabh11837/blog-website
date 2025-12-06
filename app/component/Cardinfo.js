"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";

const CardInfo = () => {
  const { id } = useParams(); 
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonfakery.com/blogs/${id}`);
        const blog = await res.json();
        setData(blog);
      } catch (err) {
        console.error("Error fetching blog detail:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-300">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

        {/* Image */}
        <img
          src={data.featured_image}
          alt={data.title}
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        {/* Category */}
        <span className="mt-4 inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
          {data.category}
        </span>

        {/* Author + Date */}
        <div className="mt-4 text-gray-600">
          <p className="font-medium">
            {data?.user?.first_name} {data?.user?.last_name}
          </p>
          <p className="text-sm">{data.created_at}</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-6 leading-7 text-lg">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
