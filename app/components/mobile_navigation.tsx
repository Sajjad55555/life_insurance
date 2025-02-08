"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface MobileNavProps {
  activePage: string;
  setActivePage: (page: string) => void;
  resetTrigger: number;
}

export default function MobileNavigation({ 
  activePage, 
  setActivePage,
  resetTrigger 
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Reset mobile state on new image selection
  useEffect(() => {
    setIsOpen(true);
  }, [resetTrigger]);

  const getButtonText = (page: string) => {
    switch(page) {
      case "related-products": return "상품특징";
      case "details": return "보장내역";
      case "reviews": return "가입안내";
      default: return "";
    }
  };

  return (
    <div className="md:hidden w-full relative">
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[70px] flex items-center justify-between px-4 border border-black bg-white"
      >
        <span>{getButtonText(activePage)}</span>
        <FaAngleDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-full bg-white border border-black z-50">
          {["related-products", "details", "reviews"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-full h-[50px] flex items-center px-4 ${
                activePage === page 
                  ? "bg-blue-700 text-white" 
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {getButtonText(page)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}