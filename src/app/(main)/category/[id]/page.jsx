import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import NewsCard from "@/components/HomePage/news/NewsCard";
import RightSidebar from "@/components/HomePage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";



const NewsCategory = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const allNews = await getNewsByCategoryId(id);

  console.log(allNews.length);

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans text-[#404040]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar: All Category */}
        <div className="md:col-span-1">
          <LeftSideBar categories={categories} activeId={id} />
        </div>

        {/* Middle Content: Dragon News Home */}
        <div className="md:col-span-2">
          <h2 className="font-bold text-xl mb-4 text-black">
            Dragon News Home
          </h2>
          {allNews.length == 0 ? (
            <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 text-center">
              <div className="text-5xl mb-4 text-gray-300">📰</div>
              <h3 className="text-xl font-semibold text-gray-600">
                No News Found
              </h3>
              <p className="text-gray-400">
                Please check back later for more updates.
              </p>
            </div>
          ) : (
            allNews.map((news) => <NewsCard key={news._id} news={news} />)
          )}
        </div>

        {/* Right Sidebar: Login & Social */}
        <div className="md:col-span-1">
          {/* Login With Section */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
