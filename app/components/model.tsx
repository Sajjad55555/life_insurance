"use client"
import { motion } from "framer-motion";

interface ModelProps {
    onClose: () => void;
}

export default function Model(props:ModelProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="w-full h-[80vh] bg-white rounded-t-3xl p-6 overflow-y-auto"
      >
        {/* Close Icon */}
        <div className="flex justify-end mb-4">
        <button 
            onClick={props.onClose} // Close button handler
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Text and Input Sections */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Hello there!</h2>
            
            {/* First Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Input</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            {/* Small Input and Slide Button */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Small input"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-primary">Slide</button>
            </div>

            {/* Second Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Second Input</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button className="btn btn-primary w-full">Submit</button>
            <button className="btn btn-outline w-full">Cancel</button>
          </div>

          {/* Call to Action Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Your icon path here */}
              </svg>
              <span>Call to Action</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}