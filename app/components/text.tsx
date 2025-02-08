// "use client";
// import React, { useState, useEffect,useRef } from "react";
// import Related_Product from "./related_product";
// import Blog_Detail from "./blog_detail2";
// import Blog_Review from "./blog_review";
// import { FaAngleDown } from "react-icons/fa6";

// // Interface کو صحیح طریقے سے تعریف کریں
// interface BlogPageNavigationProps {
//   image: string;
//   resetTrigger: number;
// }

// // Mobile Navigation Component
// const MobileNavigation = ({
//   pageKey,
//   label,
//   activePage,
//   setActivePage,
//   isOpen,
//   setIsOpen
// }: {
//   pageKey: string;
//   label: string;
//   activePage: string;
//   setActivePage: (page: string) => void;
//   isOpen: boolean;
//   setIsOpen: (state: boolean) => void;
// }) => {
//   const getButtonText = (page: string) => {
//     switch(page) {
//       case "related-products": return "상품특징";
//       case "details": return "보장내역";
//       case "reviews": return "가입안내";
//       default: return "";
//     }
//   };

//   return (
//     <div className="md:hidden w-full relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full h-[70px] flex items-center justify-between px-4 border border-black bg-white"
//       >
//         <span>{label}</span>

//         <span>{getButtonText(activePage)}</span>
//         <FaAngleDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
//       </button>

//       {isOpen && (
//         <div className="absolute w-full bg-white border border-black z-50">
//           {["related-products", "details", "reviews"].map((page) => (
//             <button
//               key={page}
//               onClick={() => setActivePage(page)}
//               className={`w-full h-[50px] flex items-center px-4 ${
//                 activePage === page 
//                   ? "bg-blue-700 text-white" 
//                   : "bg-white hover:bg-gray-100"
//               }`}
//             >
//               {getButtonText(page)}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Main Component
// export default function Blog_Page_Navigation({ 
//   image, 
//   resetTrigger 
// }: BlogPageNavigationProps) {
//   const [activePage, setActivePage] = useState("related-products");
//   const [isMobileOpen, setIsMobileOpen] = useState(false); // Default false
//   const [isMobileOpen2, setIsMobileOpen2] = useState(false); // Default false
//   const initialRender = useRef(true);

//   useEffect(() => {
//     if (initialRender.current) {
//       initialRender.current = false;
//       return;
//     }
    
//     // Reset only when resetTrigger changes (new image)
//     setActivePage("related-products");
//     setIsMobileOpen(true);
//   }, [resetTrigger]);

//   const renderContent = () => {
//     if (activePage === "related-products") return <Related_Product product_data={image} />;
//     if (activePage === "details") return <Blog_Detail />;
//     if (activePage === "reviews") return <Blog_Review />;
//     return null;
//   };

//   return (
//     <div className="flex flex-col justify-center items-center mt-4 md:mt-8">
//       {/* Desktop Navigation */}
//       <div className="hidden md:flex w-full border-b border-t border-black items-center justify-center">
//         <button
//           onClick={() => setActivePage("related-products")}
//           className={`w-[366px] h-[70px] border border-black ${
//             activePage === "related-products"
//               ? "bg-white text-blue-700 border-b-8 border-blue-700"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           상품특징
//         </button>
//         <button
//           onClick={() => setActivePage("details")}
//           className={`w-[366px] h-[70px] border border-black ${
//             activePage === "details"
//               ? "bg-white text-blue-700 border-b-8 border-blue-700"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           보장내역
//         </button>
//         <button
//           onClick={() => setActivePage("reviews")}
//           className={`w-[366px] h-[70px] border border-black ${
//             activePage === "reviews"
//               ? "bg-white text-blue-700 border-b-8 border-blue-700"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           가입안내
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <MobileNavigation 
//         pageKey="reviews"
//         label="가입안내"
//         activePage={activePage}
//         setActivePage={setActivePage}
//         isOpen={isMobileOpen2}
//         setIsOpen={setIsMobileOpen2}
//       />
//       <MobileNavigation 
//       pageKey="reviews"
//         label="가입안내"
//         activePage={activePage}
//         setActivePage={setActivePage}
//         isOpen={isMobileOpen}
//         setIsOpen={setIsMobileOpen}
//       />
//      {/* <MobileNavigation 
//         pageKey="reviews"
//         label="가입안내"
//         activePage={activePage}
//         setActivePage={setActivePage}
//       /> */}

//       {/* Content */}
//       <div className="w-full">
//         <div className="md:hidden">{isMobileOpen && renderContent()}</div>
//         <div className="hidden md:block mt-8">{renderContent()}</div>
//       </div>
//     </div>
//   );
// }