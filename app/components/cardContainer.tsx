// components/CardContainer.tsx
import React from 'react';
import Card from './card';

const CardContainer: React.FC = () => {
  const cardData = [
    {
      title: "업계최초로 보장",
      description: "표적항암약물허가 치료비집중보장(특약)",
      icon: "/path/to/dummy-icon.png", // Replace with actual image paths
    },
    {
      title: "발생률 높은 암도 든든",
      description: "유방암, 전립선암도 일반암과 동일하게 보장",
      icon: "/path/to/dummy-icon.png", // Replace with actual image paths
    },
    {
      title: "최신 항암치료도 든든(특약)",
      description: "3세대 면역항암제 치료와 약물, 방사선치료도 보장",
      icon: "/path/to/dummy-icon.png", // Replace with actual image paths
    },
    {
      title: "생활자금 매월 지급(특약)",
      description: "일상까지 안심할 수 있도록, 매월 최대 100만원 보장",
      icon: "/path/to/dummy-icon.png", // Replace with actual image paths
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {cardData.map((data, index) => (
        <Card
        //   key={index}
        //   title={data.title}
        //   description={data.description}
        //   icon={data.icon}
        />
      ))}
    </div>
  );
};

export default CardContainer;
