"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Model2 from "./model2";
import FloatingButton from "./model";

export default function Model_Handel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setIsMobile] = useState(false);
  const [activeModel, setActiveModel] = useState<number | null>(null);
  const autoOpenedRef = useRef(false); // Yeh ref track karega ke modal auto-open ho chuka hai ya nahi

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileDevice);

      // Agar device mobile hai aur modal auto open pehle nahi hua hai, to auto open karo
      if (isMobileDevice && !autoOpenedRef.current) {
        setActiveModel(2);
        setIsModalOpen(true);
        autoOpenedRef.current = true; // Flag set kar do ke modal auto open ho chuka hai
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClose = () => {
    setActiveModel(null);
    setIsModalOpen(false);
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
          <div>
            <FloatingButton />
          </div>
          <button
            onClick={() => openModel(2)}
            className="px-6 py-3 bg-[#FFD400] text-black font-bold rounded-lg"
          >
            Button 2
          </button>
          <button
            onClick={() => openModel(3)}
            className="px-6 py-3 bg-[#FFD400] font-bold text-black rounded-lg"
          >
            Button 3
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && activeModel && (
          <div
            className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full h-auto bg-white rounded-t-3xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                             </button>
              </div>
              <div>
                {activeModel === 2 && <Model2 onClose={handleClose} />}
                {activeModel === 3 && <Model2 onClose={handleClose} />}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
