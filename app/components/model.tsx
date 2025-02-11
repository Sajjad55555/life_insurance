"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPhoneVolume, FaTimes } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function SimpleFloatingModel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-20">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gray-400 rounded-2xl  flex items-center justify-center shadow-xl  transition-colors"
      >
        {isOpen ? (
          <div className="text-black text-xl bg-gray-200 w-full h-full rounded-2xl   z-50 flex items-center justify-center">
          <FaTimes className="text-black text-xl bg-gray-200" /></div>
        ) : (
          <FaPhoneVolume className="text-black text-2xl " />
        )}
      </button>

      {/* Model */}
      <AnimatePresence>
        {isOpen && (
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" absolute bg-gray-400/30 backdrop-blur-none z-20"
            >
        
             <motion.div 
        className="fixed bottom-32 left-1 bg-black/0 p-6 rounded-xl z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >

            {/* Model Content */}
            <div className="w-[200px] h-[40px]">
            <button className="mt-4 flex gap-2 px-2 items-center w-full h-full bg-gray-200 text-black rounded-lg hover:bg-blue-600">
                < FaPhone/>Start Chat
              </button>
              <button className="mt-4 flex px-2 gap-2 items-center w-full h-full bg-gray-200 text-black rounded-lg hover:bg-blue-600">
              < FaPhone/>Start Chat
              </button>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}