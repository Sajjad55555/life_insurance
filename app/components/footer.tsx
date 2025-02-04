import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-16 mt-6 mx-auto">
      <div className="w-full  px-6 flex flex-col ">
        <div className=" md:text-left mb-5 ">
          <p className="text-[#6B7280] text-[10px] md:text-[15px]  justify-start font-semibold">
            Lina Life Insurance Compliance Supervisor Confirmation No. 2024-M01153 (2024-12-30–2025-12-29)
          </p>
          <div className="md:justify-center mt-4 border border-[#bfc1c6]  md:text-[8px] ">

          </div>
        </div>
        
        <div className="mt-4 md:mt-0">
          <ul className="flex gap-5  justify-start flex-col md:flex-row md:justify-start">
            <li>
              <span className="text-[#150f96] hover:underline transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>
             
            </li>
            <span className="md:justify-center bg-[#bfc1c6] w-0 border border-[#bfc1c6] h-5 md:text-[8px] "></span>
            <li>
              <span className="text-[#555] transition-colors duration-300 cursor-pointer">
                Lina Life
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[10px] md:text-[15px] font-bold px-6 text-[#666] flex flex-col mt-4">
        <p>
          03156-48 Sambong-ro, Jongno-gu, Seoul (188 Cheongjin-dong) Lina Tower
        </p>
        <p>CEO: Jo Ji-eun</p>
        <p>Business Registration Number: 104-81-85673</p>
        <p>&copy; LINA Life Insurance Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
