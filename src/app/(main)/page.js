import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSidebar from "@/components/HomePage/news/RightSidebar";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};
export default async function Home() {
  const categories = await getCategories();


  return (
    <div className="max-w-7xl mx-auto p-4 font-sans text-[#404040]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar: All Category */}
        <div className="md:col-span-1">
          <LeftSideBar categories={categories} activeId={"04"} />
        </div>

        {/* Middle Content: Dragon News Home */}
        <div className="md:col-span-2">
          <h2 className="font-bold text-xl mb-4 text-black">
            Dragon News Home
          </h2>
          <div className=" rounded-md overflow-hidden">
            {/* News Header/Author */}
            <div className="bg-[#F3F3F3] p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="https://i.ibb.co/man-placeholder.png"
                    alt="author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">Awlad Hossain</p>
                  <p className="text-xs text-gray-500">2022-08-21</p>
                </div>
              </div>
              <div className="flex gap-2 text-gray-500">
                <button className="hover:text-black">🔖</button>
                <button className="hover:text-black">🔗</button>
              </div>
            </div>

            {/* News Body */}
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4 leading-tight text-black">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h1>
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000"
                alt="news"
                className="w-full rounded-md mb-4"
              />
              <p className="text-sm text-gray-600">
                {/* News description text goes here */}
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Login & Social */}
        <div className="md:col-span-1">
          {/* Login With Section */}
          <RightSidebar/>
        </div>
      </div>
    </div>
  );
}
