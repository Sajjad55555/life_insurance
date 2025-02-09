"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Model from "./model";
import Model2 from "./model2";

// const Model1 = () => <div className="p-4">Mobile Auto-Open Model Content</div>;
// const LocalModel2 = () => <div className="p-4">Model 2 Content</div>;
const Model3 = () => <div className="p-4">Model 3 Content</div>;

export default function Model_Handel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setIsMobile] = useState(false);
  const [activeModel, setActiveModel] = useState<number | null>(null);

 
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileDevice);
      
      if(isMobileDevice) {
        setActiveModel(2);
        setIsModalOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClose = () => {
    setActiveModel(null);
    localStorage.setItem('modalClosed', 'true');
  };

  const openModel = (modelNumber: number) => {
    setActiveModel(modelNumber);
    setIsModalOpen(true);
  };

  return (
    <div className="">
      {/* Fixed Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => openModel(1)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg"
          >
            Button 1
          </button>
          <button 
            onClick={() => openModel(2)}
            className="px-6 py-3 bg-green-500 text-white rounded-lg"
          >
            Button 2
          </button>
          <button 
            onClick={() => openModel(3)}
            className="px-6 py-3 bg-red-500 text-white rounded-lg"
          >
            Button 3
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && activeModel && (
          <div className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 backdrop-blur-sm">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full h-auto bg-white rounded-t-3xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-4">
                {/* <button 
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button> */}
              </div>
              <div className="">
                {activeModel === 1 && <Model onClose={handleClose} />}
                {activeModel === 2 && <Model2 onClose={handleClose} />}
                {activeModel === 3 && <Model3 />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}