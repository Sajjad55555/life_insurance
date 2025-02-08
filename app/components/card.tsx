import React from 'react'
import Image from 'next/image'

const cardData = [
  {
    title: "업계최초로 보장",
    description: "표적항암약물허가 치료비집중보장(특약)",
    icon: "/d2.PNG", // Replace with actual image paths
  },
  {
    title: "발생률 높은 암도 든든",
    description: "유방암, 전립선암도 일반암과 동일하게 보장",
    icon: "/d4.PNG", // Replace with actual image paths
  },
  {
    title: "최신 항암치료도 든든(특약)",
    description: "3세대 면역항암제 치료와 약물, 방사선치료도 보장",
    icon: "/d2.PNG", // Replace with actual image paths
  },
  {
    title: "생활자금 매월 지급(특약)",
    description: "일상까지 안심할 수 있도록, 매월 최대 100만원 보장",
    icon: "/d4.PNG", // Replace with actual image paths
  },
];

function Card() {
  return (
    <div className="flex flex-col w-full h-full px-auto py-auto gap-6 items-center justify-center">
      {/* Card Group 1 */}
      <div className="flex flex-wrap gap-6 justify-center">
        {cardData.slice(0, 2).map((card, index) => (
          <div key={index} className="w-full sm:w-[480px] h-[300px] sm:h-[350px] flex items-center gap-4 rounded-2xl text-white border-[2px] border-[#e5e7eb]">
            <div className="ml-10">
              <Image
                src={card.icon}
                alt={`icon-${index}`}
                width={100}
                height={100}
              />
            </div>
            <div className="ml-5">
              <h1 className="font-extrabold text-[#150f96] text-[30px]">{card.title}</h1>
              <p className="text-slate-900 font-semibold text-[25px]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Card Group 2 */}
      <div className="flex flex-wrap gap-6 justify-center">
        {cardData.slice(2).map((card, index) => (
          <div key={index} className="w-full sm:w-[480px] h-[300px] sm:h-[350px] flex items-center gap-4 rounded-2xl text-white border-[2px] border-[#e5e7eb]">
            <div className="ml-10">
              <Image
                src={card.icon}
                alt={`icon-${index + 2}`}
                width={100}
                height={100}
              />
            </div>
            <div className="ml-5">
              <h1 className="font-extrabold text-[#150f96] text-[30px]">{card.title}</h1>
              <p className="text-slate-900 font-semibold text-[25px]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
