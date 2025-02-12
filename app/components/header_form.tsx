"use client"
import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";



export default function Header_Form() {
  const [gender, setGender] = useState('남');

  return (
    <div className=" mx-auto bg-white rounded-2xl shadow-lg border-2 border-blue-900">
      <div className="mb-4 flex gap-6 px-6 mt-8">
        <label className="block text-gray-700 w-[150px] text-xl font-bold mb-1">이름</label>
        <input type="text" placeholder="이름" className="w-full border-b-2 focus:outline-none p-1" />
      </div>
      <div className="mb-4 flex gap-6 items-center px-6 mt-8">
        <label className="block text-gray-700 w-[150px] font-bold mb-1">생년월일</label>
        <input type="text" placeholder="예) 800101" className="w-full border-b-2 focus:outline-none p-1" />
        {/* Gender Selection */}
      <div className="mb-4 flex border rounded-lg overflow-hidden">
        <button
          className={`w-[100px] h-12 font-bold ${gender === '남' ? 'bg-[#150f96] text-white' : 'bg-white text-blue-900'}`}
          onClick={() => setGender('남')}
        >
          남
        </button>
        <button
          className={`w-[100px] font-bold ${gender === '여' ? 'bg-[#150f96] text-white' : 'bg-white text-blue-900'}`}
          onClick={() => setGender('여')}
        >
          여
        </button>
      </div>
      </div>
      <div className="mb-4 flex gap-6 px-6 mt-8 items-center">
        <label className="block text-gray-700 w-[150px] font-bold mb-1">핸드폰</label>
        <input type="text" placeholder="(-없이 입력)" className="w-full border-b-2 focus:outline-none p-1 text-gray-400" />
      </div>

      

      {/* Action Buttons */}
      <div className="flex justify-center mt-10 gap-2">
        <button className="bg-gray-400 text-white py-4 text-xl rounded-lg flex items-center gap-1" onClick={() => alert("보험료 확인 버튼이 클릭되었습니다.")}>간편 상담신청<FaAngleRight className='text-[40px] bg-gray-500 rounded-l-full py-2'  /></button>
        <button className="bg-[#FFD400] text-black py-4 rounded-lg flex items-center  justify-between gap-4 pl-2 text-xl font-bold " onClick={() => alert("간편 상담신청 버튼이 클릭되었습니다.")}>보험료 확인<FaAngleRight className='text-[40px] bg-yellow-500 text-white py-2 rounded-l-full w-[40px]' /></button>
      </div>

      {/* Contact Information */}
      <div className="mt-10 w-full bg-blue-100 py-4 rounded-b-2xl text-center ">
        <div className="font-bold text-2xl">보험가입상담</div>
        <div className="text-[#150f96] text-3xl font-bold flex justify-center items-center mt-2 ">
          <FaPhoneAlt className="mr-2" /> 080-410-4100
        </div>
      </div>
    </div>
  );
}
