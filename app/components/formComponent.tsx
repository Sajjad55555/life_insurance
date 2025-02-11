"use client";

import { useState } from 'react';
import { FaSquarePhone } from "react-icons/fa6";


const FormComponent = () => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState<'male' | 'female'>('male');

    const handleGenderSelect = (selectedGender: 'male' | 'female') => {
        setGender(selectedGender);
    };

    const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setBirthday(value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 11);
        setPhone(value);
    };

    return (
        <div className="  items-center w-full h-full  flex flex-col">
            <div className="flex flex-col w-[1100px] h-[230px] justify-center items-center mx-auto  rounded-2xl bg-[#150f96] ">
                {/* Form Inner Section */}
                <div className="bg-white p-5 flex justify-items-center gap-3 w-[90%] h-[50%] ">
                    {/* Name Input */}
                    <div className="flex items-center">
                        <label htmlFor="name" className="text-black font-extrabold">
                            이름:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="이름"
                            className="mt-2 border-b text-gray-700 focus:border-blue-500 focus:outline-none "
                        />
                    </div>

                    {/* Gender Selection */}
                    <div className="flex items-center w-[100px] h-[50px] mt-5 justify-center bg-white border-2 border-[#150f96] rounded-lg">
                        <button
                            onClick={() => handleGenderSelect('male')}
                            className={`w-full h-full ${gender === 'male' ? 'bg-[#150f96] text-white' : 'bg-white text-black'} rounded-l-lg`}
                        >
                            남
                        </button>
                        <button
                            onClick={() => handleGenderSelect('female')}
                            className={`w-full h-full ${gender === 'female' ? 'bg-[#150f96] text-white' : 'bg-white text-black'} rounded-r-lg`}
                        >
                            여
                        </button>
                    </div>

                    {/* Birthday Input */}
                    <div className="flex items-center">
                        <label htmlFor="Birthday" className="text-black font-extrabold">
                            생년월일:
                        </label>
                        <input
                            type="text"
                            id="Birthday"
                            value={birthday}
                            onChange={handleBirthdayChange}
                            maxLength={6}
                            placeholder="예) 800101"
                            className="mt-2 border-b text-gray-700 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Phone Input */}
                    <div className="flex items-center">
                        <label htmlFor="Phone" className="text-black ml-3 font-extrabold">
                            핸드폰:
                        </label>
                        <input
                            type="text"
                            id="Phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={11}
                            placeholder="(-없이 입력)"
                            className="mt-2 border-b text-gray-700 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-between w-[90%]  gap-6  mt-3">
                    <button
                        className="w-[40%] bg-gray-600  text-[18px]  text-white font-extrabold py-3  rounded-lg"
                    >
                        상담신청
                    </button>
                    <button
                        className="w-[55%] bg-yellow-400 text-[18px] text-black font-extrabold py-3 rounded-lg"
                    >
                        보험료 계산
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6 text-[#150f96]">
                <span className="font-semibold text-[30px] mr-2">보험가입상담</span>
                <span className='text-[45px] rounded-full'>
                <FaSquarePhone />

                </span>
                <a href="tel:080-410-4100" className="flex items-center">
                  
                    <span className="text-[35px] font-extrabold">080-410-4100</span>
                </a>
            </div>

        </div>
    );
};

export default FormComponent;