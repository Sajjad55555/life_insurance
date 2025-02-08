"use client";
import React from 'react'
import Image from 'next/image';


interface RealtedTypes{
  product_dat: { title: string; description: string; icon: string; }[];

}
export default function Related_Product(prop:RealtedTypes) {
      // Mock data arr  const products = prop.Product_data || []; // Default to empty array if no data is passed
      // const products = prop.product_data || []; // Default to empty array if no data is passed
  return (
      <div className="flex flex-col w-full h-full px-auto py-auto gap-6 items-center justify-center">
        {/* Card Group 1 */}
        <div className="flex flex-wrap gap-6 justify-center">
          {prop.product_dat.slice(0, 2).map((card, index) => (
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
          {prop.product_dat.slice(2).map((card, index) => (
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
