"use client";
import React, { useState, useEffect } from "react";
import Blog_Detail from "./blog_detail";
function  Blog_Review() {
    const [activePage, setActivePage] = useState("related-products");
      useEffect(() => {
        setActivePage("related-products");
      });
    const renderContent = () => {
          if (activePage === "related-products") {
            return <Blog_Detail />;
          }
          if (activePage === "details") {
            return <Blog_Detail />;
          }
          
          if (activePage === "reviews") {
            return <Blog_Detail />;
          }
          return null;
        };
    
  return (

    <>
        <div className="flex w-full justify-center items-center mt-4 md:mt-8">
        <button
          onClick={() => setActivePage("details")}
          className={`w-[366px] h-[70px] border border-black ${
            activePage === "details"
              ? "bg-white text-blue-700 border-b-8 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
        보장내역
        </button>
        <button
          onClick={() => setActivePage("details")}
          className={`w-[366px] h-[70px] border border-black ${
            activePage === "details"
              ? "bg-white text-blue-700 border-b-8 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
        보장내역
        </button>
        <button
          onClick={() => setActivePage("details")}
          className={`w-[366px] h-[70px] border border-black ${
            activePage === "details"
              ? "bg-white text-blue-700 border-b-8 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
        보장내역
        </button>
        <button
          onClick={() => setActivePage("details")}
          className={`w-[366px] h-[70px] border border-black ${
            activePage === "details"
              ? "bg-white text-blue-700 border-b-8 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
        보장내역
        </button>
        <button
          onClick={() => setActivePage("details")}
          className={`w-[366px] h-[70px] border border-black ${
            activePage === "details"
              ? "bg-white text-blue-700 border-b-8 border-blue-700"
              : "bg-white text-gray-700"
          }`}
        >
        보장내역
        </button>
        
            </div>
             {/* Render the content dynamically */}
      <div className="mt-8">{renderContent()}</div>

    </>
  )
}

export default  Blog_Review