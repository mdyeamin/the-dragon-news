import Link from "next/link";
import React from "react";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className=" rounded-md overflow-hidden space-y-2">
      {/* News Header/Author */}
      <div className="bg-[#F3F3F3] p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={news.author.img}
              alt="author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-sm">
              {news.author.name ? news.author.name : "N/A"}
            </p>
            <p className="text-xs text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <button className="hover:text-black transition-colors">
            <FaBookmark />
          </button>
          <button className="hover:text-black transition-colors">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* News Body */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 leading-tight text-black">
          {news.title}
        </h1>
        <img
          src={news.image_url}
          alt="news"
          className="w-full h-[400px] object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
          {news.details}
        </p>
        <Link className="text-orange-400" href={`/news/${news._id}`}>
          Read more
        </Link>
      </div>

      {/* News Footer (Missing Section Added) */}
      <div className="p-4 flex justify-between items-center">
        {/* Rating Section */}
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400 gap-1 text-lg">
            {/* Simple logic for 5 stars */}
            <FaStar />
          </div>
          <span className="text-gray-500 font-medium">
            {news.rating.number}
          </span>
        </div>

        {/* Views Section */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye className="text-xl" />
          <span className="font-medium">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
