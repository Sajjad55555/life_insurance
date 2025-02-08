import Blog_Page_Navigation from "./blog_page_navigation";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect } from "react";

interface BlogPageNavigationProps {
  image: string;
  name: string;
  resetTrigger: number;
  isOpen: boolean; // Add isOpen prop
}
export default function Mobile_View({
  image,
  resetTrigger,
  name,
  isOpen, // Check if the modal should be open
}: BlogPageNavigationProps) {
  const [localIsOpen, setLocalIsOpen] = useState(isOpen); // Local state for toggling modal

  const toggleModal = () => {
    setLocalIsOpen(!localIsOpen); // Toggle local state when clicked
  };

  useEffect(() => {
    setLocalIsOpen(isOpen); // Sync with parent's isOpen prop when profile is selected
  }, [isOpen]);

  return (
    <>
      <div className="md:hidden flex relative w-full">
        {/* Button to toggle visibility */}
        <button
          onClick={toggleModal} // Trigger toggle when user clicks the button
          className="w-full h-[40px] items-center justify-center bg-gray-200 border-b border-gray-400"
        >
          <span>{name}</span>
          <FaAngleDown
            className={`text-lg absolute right-2 top-2 ${localIsOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Modal Content */}
        {localIsOpen && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-lg z-50 mt-2 p-4 rounded-lg border border-gray-200"
            style={{ zIndex: 1000 }} // Ensure this has the highest z-index
          >
            <Blog_Page_Navigation image={image} resetTrigger={resetTrigger} />
          </div>
        )}
      </div>
    </>
  );
}
