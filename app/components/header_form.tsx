"use client"
import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Header_Form() {
  const [gender, setGender] = useState('남');

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-900">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1">이름</label>
        <input type="text" placeholder="이름" className="w-full border-b-2 focus:outline-none p-1" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1">생년월일</label>
        <input type="text" placeholder="예) 800101" className="w-full border-b-2 focus:outline-none p-1" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1">핸드폰</label>
        <input type="text" placeholder="(-없이 입력)" className="w-full border-b-2 focus:outline-none p-1 text-gray-400" />
      </div>

      {/* Gender Selection */}
      <div className="mb-4 flex border rounded-lg overflow-hidden">
        <button
          className={`w-1/2 py-2 font-bold ${gender === '남' ? 'bg-[#150f96] text-white' : 'bg-white text-blue-900'}`}
          onClick={() => setGender('남')}
        >
          남
        </button>
        <button
          className={`w-1/2 py-2 font-bold ${gender === '여' ? 'bg-[#150f96] text-white' : 'bg-white text-blue-900'}`}
          onClick={() => setGender('여')}
        >
          여
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4 gap-2">
        <button className="bg-gray-400 text-white py-2 px-4 rounded-lg flex-1">간편 상담신청</button>
        <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg flex-1">보험료 확인</button>
      </div>

      {/* Contact Information */}
      <div className="mt-6 bg-blue-100 py-4 rounded-2xl text-center border-t-2 border-[#150f96]">
        <div className="font-bold">보험가입상담</div>
        <div className="text-[#150f96] text-2xl font-bold flex justify-center items-center mt-2">
          <FaPhoneAlt className="mr-2" /> 080-410-4100
        </div>
      </div>
    </div>
  );
}
