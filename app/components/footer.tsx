import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-16 mt-6 mx-auto">
      <div className="w-full   flex flex-col ">
        <div className=" md:text-left mb-5 ">
          <p className="text-[#6B7280] text-[10px] md:text-[15px]  justify-start font-semibold">
          라이나생명 준법감시인확인필 제 2024-M01153호 (2024-12-30~2025-12-29)
          </p>
          {/* Hidden on mobile, visible on desktop */}
          <div className="hidden md:block md:justify-center md:mt-4 border md:border-[#bfc1c6] md:text-[8px]"></div>
        </div>
        
        <div className="mt-4 md:mt-0">
          <ul className="flex gap-5  justify-start flex-col md:flex-row md:justify-start">
            <li>
              <span className="text-[#150f96] hover:underline transition-colors duration-300 cursor-pointer">
              개인정보처리방침
              </span>
             
            </li>
 {/* Hidden on mobile, visible on desktop */}
 <span className="hidden md:block md:justify-center md:bg-[#bfc1c6] md:w-0 border md:border-[#bfc1c6] md:h-5 md:text-[8px]"></span>            <li>
              <span className="text-[#555] transition-colors duration-300 cursor-pointer">
              라이나생명
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[10px] md:text-[15px] font-bold  text-[#666] flex flex-col mt-4">
        <p>
        03156 서울특별시 종로구 삼봉로 48(청진동 188) 라이나타워
        </p>
        <p>대표이사 조지은 사업자등록번호 : 104-81-85673</p>
  
        <p>&copy; LINA Life Insurance Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
