import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Image */}
      <img
        src={item.featured_image}
        alt={item.title}
        className="w-full h-44 object-cover"
      />

      <div className="px-4 py-2">

        {/* Category */}
        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
          {item.category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-semibold mt-4 text-gray-900">
          {item.title}
        </h2>

        {/* Subtitle — FULL content (no truncation) */}
        <p className="text-gray-600 mt-1 leading-relaxed">
          {item.subtitle}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-800 font-medium">
            {item.user?.first_name} {item.user?.last_name}
          </span>

          <span className="text-gray-500 text-sm">
            {item.created_at}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
