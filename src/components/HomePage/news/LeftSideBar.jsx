import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
    
    
  return (
    <>
      <h2 className="font-bold text-xl mb-4 text-black">All Category</h2>
      <div className="flex flex-col gap-2">
        {/* <button className="bg-[#E7E7E7] text-black font-semibold py-4 px-6 rounded-md text-left">
              National News
              
            </button> */}
        {categories.map((item) => (
            
            
          <button
            key={item.category_id}
            className={`${activeId == item.category_id && "bg-[#E7E7E7] "} text-black font-semibold py-4 px-6 rounded-md text-left`}
          >
           <Link href={`/category/${item.category_id}`}> {item.category_name}</Link>
          </button>
        ))}
      </div>
    </>
  );
};

export default LeftSideBar;
