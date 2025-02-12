"use client";
import React, { useState } from "react";
import Blog_Detail1 from "./blog_detail1";
import Blog_Detail3 from "./blog_detail3";
import Blog_Detail4 from "./blog_detail4";
import InsurancePanel from "./blogSub_detail";

function Blog_Review() {
  const [activePage, setActivePage] = useState("blog details");

  const renderContent = () => {
    switch (activePage) {
      case "blog details": return <Blog_Detail1 />;
      case "details": return <InsurancePanel />;
      case "reviews": return <Blog_Detail3 />;
      case "products": return <Blog_Detail4 />;
      default: return null;
    }
  };

  return (
    <>
      <div className=" w-full flex">
        <div className="md:w-[85%] w-full flex justify-between">
          <button
            onClick={() => setActivePage("blog details")}
            className={`w-[70px] md:w-[325px] h-[70px] text-sm md:text-xl  ${activePage === "blog details"
                ? "bg-white text-blue-700 border-b-4 border-blue-700"
                : "bg-white text-gray-700"
              }`}
          >
            보장내역
          </button>
          <button
            onClick={() => setActivePage("details")}
            className={`w-[70px] md:w-[325px] h-[70px] text-sm md:text-xl ${activePage === "details"
                ? "bg-white text-blue-700 border-b-4 border-blue-700"
                : "bg-white text-gray-700"
              }`}
          >
            보장내역
          </button>
          <button
            onClick={() => setActivePage("reviews")}
            className={`w-[70px] md:w-[325px] h-[70px] text-sm md:text-xl  ${activePage === "reviews"
                ? "bg-white text-blue-700 border-b-4 border-blue-700"
                : "bg-white text-gray-700"
              }`}
          >
            보장내역
          </button>
          <button
            onClick={() => setActivePage("products")}
            className={`w-[70px] md:w-[325px] h-[70px] text-sm md:text-xl  ${activePage === "products"
                ? "bg-white text-blue-700 border-b-4 border-blue-700"
                : "bg-white text-gray-700"
              }`}
          >
            해약환급금예시
          </button>
        </div>
      </div>

      <div className="mt-8">{renderContent()}</div>
    </>
  );
}

export default Blog_Review;