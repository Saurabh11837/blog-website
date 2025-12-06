"use client";
import React from "react";
import Link from "next/link";

const Card = ({ item }) => {
  
  return (
    <Link href={`/cardinfo/${item.id}`}>

      <div
        className="
          bg-white 
          rounded-2xl 
          shadow-md 
          hover:shadow-xl 
          transition-all 
          duration-300 
          overflow-hidden 
          cursor-pointer 
          border 
          border-gray-100
          hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={item.featured_image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="px-4 py-3">
          {/* Category */}
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
            {item.category}
          </span>

          {/* Title */}
          <h2 className="text-xl font-semibold mt-3 text-gray-900 line-clamp-1">
            {item.title}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mt-1 text-sm leading-relaxed line-clamp-2">
            {item.subtitle}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 border-t pt-3">
            <span className="text-gray-800 font-medium">
              {item.user?.first_name} {item.user?.last_name}
            </span>

            <span className="text-gray-500 text-sm">
              {item.created_at}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
