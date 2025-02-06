"use client";
import React, { useState } from "react";
import Blog_Detail1 from "./blog_detail1";
import Blog_Detail2 from "./blog_detail2";
import Blog_Detail3 from "./blog_detail3";
import Blog_Detail4 from "./blog_detail4";

function Blog_Review() {
  const [activePage, setActivePage] = useState("blog details");

  const renderContent = () => {
    switch(activePage) {
      case "blog details": return <Blog_Detail1 />;
      case "details": return <Blog_Detail2 />;
      case "reviews": return <Blog_Detail3 />;
      case "products": return <Blog_Detail4 />;
      default: return null;
    }
  };

  return (
    <>
      <div className="flex flex-wrap w-full justify-center md:px-16 px-4 items-center mt-4 md:mt-8">
        <button
          onClick={() => setActivePage("blog details")}
          className={`w-[325px] h-[70px]  ${
            activePage === "blog details"
              ? "bg-white text-blue-700 border-b-4 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
          보장내역
        </button>
        <button
          onClick={() => setActivePage("details")}
          className={`w-[325px] h-[70px] ${
            activePage === "details"
              ? "bg-white text-blue-700 border-b-4 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
          보장내역
        </button>
        <button
          onClick={() => setActivePage("reviews")}
          className={`w-[325px] h-[70px]  ${
            activePage === "reviews"
              ? "bg-white text-blue-700 border-b-4 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
          보장내역
        </button>
        <button
          onClick={() => setActivePage("products")}
          className={`w-[325px] h-[70px]  ${
            activePage === "products"
              ? "bg-white text-blue-700 border-b-4 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
          products
        </button>
      </div>
      
      <div className="mt-8">{renderContent()}</div>
    </>
  );
}

export default Blog_Review;