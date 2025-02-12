// "use client"
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Model2 from "./model2";
// import FloatingButton from "./model";

// // const Model1 = () => <div className="p-4">Mobile Auto-Open Model Content</div>;
// // const LocalModel2 = () => <div className="p-4">Model 2 Content</div>;
// // const Model3 = () => <div className="p-4">Model 3 Content</div>;

// export default function Model_Handel() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [, setIsMobile] = useState(false);
//   const [activeModel, setActiveModel] = useState<number | null>(null);

 
//   useEffect(() => {
//     const checkMobile = () => {
//       const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
//       setIsMobile(isMobileDevice);
      
//       if(isMobileDevice) {
//         setActiveModel(2);
//         setIsModalOpen(true);
//       }
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const handleClose = () => {
//     setActiveModel(null);
//     localStorage.setItem('modalClosed', 'true');
//   };

//   const openModel = (modelNumber: number) => {
//     setActiveModel(modelNumber);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="">
//       {/* Fixed Buttons */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
//         <div className="flex justify-center gap-4">
//           {/* <button 
//             onClick={() => openModel(1)}
//             className=" bg-gray-300 w-16 h-12 flex items-center justify-center rounded-xl
//             "
//           >
//             <FaPhoneVolume className="text-2xl font-semibold" />

//           </button> */}
//           <div>
// <FloatingButton/>
//           </div>
//           <button 
//             onClick={() => openModel(2)}
//             className="px-6 py-3 bg-[#FFD400] text-black font-bold rounded-lg"
//           >
//             Button 2
//           </button>
//           <button 
//             onClick={() => openModel(3)}
//             className="px-6 py-3 bg-[#FFD400] font-bold text-black rounded-lg"
//           >
//             Button 3
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {isModalOpen && activeModel && (
//           <div className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 backdrop-blur-sm">
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ type: "spring", damping: 20, stiffness: 100 }}
//               className="w-full h-auto bg-white rounded-t-3xl overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-end mb-4">
//                 {/* <button 
//                   onClick={handleClose}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   ✕
//                 </button> */}
//               </div>
//               <div className="">
//                 {/* {activeModel === 1 && <Model onClose={handleClose} />} */}
//                 {activeModel === 2 && <Model2 onClose={handleClose} />}
//                 {activeModel === 3 && <Model2 onClose={handleClose} />}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // "use client";
// // import React, { useState, useEffect,useRef } from "react";
// // import Related_Product from "./related_product";
// // import Blog_Detail from "./blog_detail2";
// // import Blog_Review from "./blog_review";
// // import { FaAngleDown } from "react-icons/fa6";

// // // Interface کو صحیح طریقے سے تعریف کریں
// // interface BlogPageNavigationProps {
// //   image: string;
// //   resetTrigger: number;
// // }

// // // Mobile Navigation Component
// // const MobileNavigation = ({
// //   pageKey,
// //   label,
// //   activePage,
// //   setActivePage,
// //   isOpen,
// //   setIsOpen
// // }: {
// //   pageKey: string;
// //   label: string;
// //   activePage: string;
// //   setActivePage: (page: string) => void;
// //   isOpen: boolean;
// //   setIsOpen: (state: boolean) => void;
// // }) => {
// //   const getButtonText = (page: string) => {
// //     switch(page) {
// //       case "related-products": return "상품특징";
// //       case "details": return "보장내역";
// //       case "reviews": return "가입안내";
// //       default: return "";
// //     }
// //   };

// //   return (
// //     <div className="md:hidden w-full relative">
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="w-full h-[70px] flex items-center justify-between px-4 border border-black bg-white"
// //       >
// //         <span>{label}</span>

// //         <span>{getButtonText(activePage)}</span>
// //         <FaAngleDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
// //       </button>

// //       {isOpen && (
// //         <div className="absolute w-full bg-white border border-black z-50">
// //           {["related-products", "details", "reviews"].map((page) => (
// //             <button
// //               key={page}
// //               onClick={() => setActivePage(page)}
// //               className={`w-full h-[50px] flex items-center px-4 ${
// //                 activePage === page 
// //                   ? "bg-blue-700 text-white" 
// //                   : "bg-white hover:bg-gray-100"
// //               }`}
// //             >
// //               {getButtonText(page)}
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Main Component
// // export default function Blog_Page_Navigation({ 
// //   image, 
// //   resetTrigger 
// // }: BlogPageNavigationProps) {
// //   const [activePage, setActivePage] = useState("related-products");
// //   const [isMobileOpen, setIsMobileOpen] = useState(false); // Default false
// //   const [isMobileOpen2, setIsMobileOpen2] = useState(false); // Default false
// //   const initialRender = useRef(true);

// //   useEffect(() => {
// //     if (initialRender.current) {
// //       initialRender.current = false;
// //       return;
// //     }
    
// //     // Reset only when resetTrigger changes (new image)
// //     setActivePage("related-products");
// //     setIsMobileOpen(true);
// //   }, [resetTrigger]);

// //   const renderContent = () => {
// //     if (activePage === "related-products") return <Related_Product product_data={image} />;
// //     if (activePage === "details") return <Blog_Detail />;
// //     if (activePage === "reviews") return <Blog_Review />;
// //     return null;
// //   };

// //   return (
// //     <div className="flex flex-col justify-center items-center mt-4 md:mt-8">
// //       {/* Desktop Navigation */}
// //       <div className="hidden md:flex w-full border-b border-t border-black items-center justify-center">
// //         <button
// //           onClick={() => setActivePage("related-products")}
// //           className={`w-[366px] h-[70px] border border-black ${
// //             activePage === "related-products"
// //               ? "bg-white text-blue-700 border-b-8 border-blue-700"
// //               : "bg-white text-gray-700"
// //           }`}
// //         >
// //           상품특징
// //         </button>
// //         <button
// //           onClick={() => setActivePage("details")}
// //           className={`w-[366px] h-[70px] border border-black ${
// //             activePage === "details"
// //               ? "bg-white text-blue-700 border-b-8 border-blue-700"
// //               : "bg-white text-gray-700"
// //           }`}
// //         >
// //           보장내역
// //         </button>
// //         <button
// //           onClick={() => setActivePage("reviews")}
// //           className={`w-[366px] h-[70px] border border-black ${
// //             activePage === "reviews"
// //               ? "bg-white text-blue-700 border-b-8 border-blue-700"
// //               : "bg-white text-gray-700"
// //           }`}
// //         >
// //           가입안내
// //         </button>
// //       </div>

// //       {/* Mobile Navigation */}
// //       <MobileNavigation 
// //         pageKey="reviews"
// //         label="가입안내"
// //         activePage={activePage}
// //         setActivePage={setActivePage}
// //         isOpen={isMobileOpen2}
// //         setIsOpen={setIsMobileOpen2}
// //       />
// //       <MobileNavigation 
// //       pageKey="reviews"
// //         label="가입안내"
// //         activePage={activePage}
// //         setActivePage={setActivePage}
// //         isOpen={isMobileOpen}
// //         setIsOpen={setIsMobileOpen}
// //       />
// //      {/* <MobileNavigation 
// //         pageKey="reviews"
// //         label="가입안내"
// //         activePage={activePage}
// //         setActivePage={setActivePage}
// //       /> */}

// //       {/* Content */}
// //       <div className="w-full">
// //         <div className="md:hidden">{isMobileOpen && renderContent()}</div>
// //         <div className="hidden md:block mt-8">{renderContent()}</div>
// //       </div>
// //     </div>
// //   );
// // }