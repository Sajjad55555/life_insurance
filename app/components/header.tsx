"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Correct import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import Header_Form from "./header_form";

// Data for swiper slides
const swiperData = [
  {
    text1: "1. 마케팅,개발,디자이너,MD 따로 찾을 필요없는 올인원 솔루션을 제공합",
    text2: "2. 모든 팀원이 와루에서 활동하기 때문에 팀 협업이 쉬워집니다",
    text3: "3. 대행사가 아닌 내 회사를 같이 키울 파트너 (밤에도 쉬지않고 일합니다 )",
    text4: "4. 마케팅과 개발의 통합 솔루션, 불편함을 자동화로 해결합니다",
    image: "/lungs.png",
  },
  {
    text1: "1. 마케팅,개발,디자이너,MD 따로 찾을 필요없는 올인원 솔루션을 제공합",
    text2: "2. 모든 팀원이 와루에서 활동하기 때문에 팀 협업이 쉬워집니다",
    text3: "3. 대행사가 아닌 내 회사를 같이 키울 파트너 (밤에도 쉬지않고 일합니다 )",
    text4: "4. 마케팅과 개발의 통합 솔루션, 불편함을 자동화로 해결합니다",
    image: "/head.png",
  },
  {text1: "1. 마케팅,개발,디자이너,MD 따로 찾을 필요없는 올인원 솔루션을 제공합",
    text2: "2. 모든 팀원이 와루에서 활동하기 때문에 팀 협업이 쉬워집니다",
    text3: "3. 대행사가 아닌 내 회사를 같이 키울 파트너 (밤에도 쉬지않고 일합니다 )",
    text4: "4. 마케팅과 개발의 통합 솔루션, 불편함을 자동화로 해결합니다",
    image: "/teeth.png",}
  // Add more data as needed
];

export default function Header() {
  return (
    <div className="w-full h-auto gap-4  flex flex-col md:flex-row md:px-20 md:mt-20 ">
      {/* Text and Image */}
      <div className="md:w-[55%] w-full h-[515px] md:h-[750px] px-4 py-4">
        <h1 className="md:text-[40px] school-font font-extrabold leading-[3rem] text[35px]  text-black md:text-start text-center">
          <span className="text-[#9B00FF]">성공적인</span> 사업을 위해서는{" "}
          <br />
          성공적인 파트너가 있어야합니다!
        </h1>

        <h2 className="text-[25px] md:text-[2rem] nexonReg-font font-[900] md:text-start  text-[#3a3d53] text-center">
          난 어떤 팀이 필요한걸까!
        </h2>

        <div className="top3-border-wrapper flex flex-col md:mt-[10vh]">
          <div className="top3-border-title school-font text-[#3a3d53] text-[1.5rem] font-[900] mb-4">
            왜 와루일까!
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper bg-black border border-white rounded-2xl"
            style={{ width: '100%', height: '100%' }}
          >
            {swiperData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="top3-border flex h-[300px] px-2 items-center justify-center w-full bg-black rounded-[10px]">
                  <div className="flex flex-col w-3/4">
                    <p className="nexonReg-font text-white text-[14px] md:text-[1.5rem] space-y-4 font-[900]">
                      {data.text1}
                    </p>
                    <p className="nexonReg-font text-[14px] text-white md:text-[1.5rem] space-y-4 font-[900]">
                      {data.text2}
                    </p>
                    <p className="nexonReg-font text-[14px] text-white md:text-[1.5rem] space-y-4 font-[900]">
                      {data.text3}
                    </p>
                    <p className="nexonReg-font text-[14px] text-white md:text-[1.5rem] space-y-4 font-[900]">
                      {data.text4}
                    </p>
                  </div>
                  <div className="md:w-[150px] w-[160px] h-[150px] md:h-[150px] flex justify-center items-center ml-10">
                    <Image
                      src={data.image}
                      width={150}
                      height={150}
                      alt="Slide image"
                      priority
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center mt-6 space-x-2" />

        </div>
      </div>

      {/* Form Section */}
      <div className="md:w-[40%] hidden md:block w-full h-[715px] md:h-[750px]">
        <div className="h-full w-full  flex items-center justify-center">
          <div className="h-[650px] md:h-[650px] rounded-2xl bg-[#150f96] flex flex-col items-center">
            <div className="mt-4 w-[80%] h-[50px] px-4">
              <Image
                className="w-full h-full"
                src={"/header/InputBox_title.png"}
                width={700}
                height={350}
                alt="phone image"
              />
            </div>
            <div className="w-[90%] h-full px-4 mt-6">
              <Header_Form />
            </div>
          </div>
        </div>
      </div>

    
      
    </div>
  );
}
