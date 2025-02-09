"use client";
import { useState, useEffect, JSX } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InsurancePopup(): JSX.Element | null {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 550;
      setIsOpen(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isOpen ? (
    <>
      {/* Insurance Form Popup */}
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ delay: 0.5 }}
        className="fixed right-0 top-20 w-[250px] p-0 bg-white shadow-lg border rounded-lg"
      >
        <Image 
          src="/float.png" 
          alt="Logo" 
          width={400} 
          height={400}
          className="absolute"
        />
        
        <div className="relative mt-20 mb-5 w-[80%] mx-auto">
          <input type="text" className="w-full p-3 border rounded" placeholder="이름입력" />
          <ul className="flex w-full justify-around border-2 rounded-lg my-2 bg-white">
            <li className='w-full  flex'>
              <button
                onClick={() => setSelectedGender('남')}
                className={`px-4 w-full py-3 text-[22px]  ${selectedGender === '남' ? 'bg-[#01C1D6] text-white' : 'bg-white'}`}
              >
                남
              </button>
              <button
                onClick={() => setSelectedGender('여')}
                className={`px-4 w-full py-3 text-[22px] ${selectedGender === '여' ? 'bg-[#01C1D6] text-white' : 'bg-white'}`}
              >
                여
              </button>
            </li>
          </ul>
          <input type="text" className="w-full p-3 border rounded-lg" placeholder="생년월일 예) 800101" />
          <input type="text" className="w-full p-3 border rounded-lg mt-2" placeholder="핸드폰 (-없이 입력)" />
          <button className="w-full mt-3 p-3 bg-yellow-400 font-bold text-lg rounded-lg">보험료 계산</button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className=" right-5 text-center">
          <Image 
          src="/float_call.png" 
          alt="Logo" 
          width={350} 
          height={530}
          className=" right-24"
        />
          </div>
        </div>
      </motion.div>

      {/* Separate Arrow Icon */}
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ delay: 0.5 }}
        className="fixed  right-28 bottom-36 "
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="  p-10   ">
        <Image 
          src="/float_arrow.png" 
          alt="Logo" 
          width={50} 
          height={50}
          className="absolute"
        />        </div>
      </motion.div>
    </>
  ) : null;
}