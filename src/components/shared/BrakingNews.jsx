import React from "react";
import Marquee from "react-fast-marquee";
const news = [
  {
    _id: 1,
    title: "Government Announces New Education Reform Plan",
  },
  {
    _id: 2,
    title: "Tech Companies Invest in AI Innovation",
  },
  {
    _id: 3,
    title: "Bangladesh Wins Thrilling Cricket Series",
  },
  {
    _id: 4,
    title: "Global Climate Summit Begins This Week",
  },
  {
    _id: 5,
    title: "Scientists Discover New Renewable Energy Method",
  },
  {
    _id: 6,
    title: "Stock Markets Rise After Economic Report",
  },
  {
    _id: 7,
    title: "Local Startup Launches Smart Farming Solution",
  }
];
const BrakingNews = () => {
  return (
    <div className="flex border rounded border-gray-400 p-2 container mx-auto">
        <button className="btn bg-red-500 text-white">Latest</button>
      <Marquee pauseOnHover={true} className="">
     {news.map(n=><spam key={n._id}> | {n.title}</spam>)}
      </Marquee>
    </div>
  );
};

export default BrakingNews;
