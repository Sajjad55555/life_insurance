"use client"
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

interface Model2Props {
    onClose: () => void;
}

export default function Model2(props:Model2Props) {
    const [gender, setGender] = useState('남');

    const handleConsultation = () => {
        alert("Insurance enrollment consultation request received.\nA specialist will contact you shortly.");
      };
    
      const handleExistingCustomer = () => {
        alert("We've received your inquiry as an existing customer.\nWe'll contact you as soon as possible.");
      };

    return (
      <>
      <div className="w-full h-auto rounded-3xl px-4">
          {/* text and close icon */}
          <div className="flex justify-between">
            <div className="font-extrabold">보험료 10초 간편 확인</div>
            {/* close button */}
            <div>
            <button onClick={props.onClose} // Close button handler
            className="" >
           <IoClose className="text-xl"/>
          </button></div>

            
          </div>
          {/* first input */}
          <div>
          <input 
            type="text" 
            className="w-full p-3 border rounded-lg border-gray-400"
            placeholder="이름"
            required
          />
        </div>
          {/* smal input and slide button */}
          <div className="flex w-[100%] justify-between mt-2">
            {/* input */}
          <div className="w-[60%] ">
          <input 
            type="text" 
            className="w-full p-3 border rounded-lg border-gray-400"
            placeholder="생년월일 6자리 입력"
            required
          /></div>
          {/* button */}
          <div className="w-[35%] rounded-lg border border-gray-400">
        <button
          className={`w-1/2 h-full rounded-lg font-bold ${gender === '남' ? 'bg-[#150f96] text-white' : 'bg-white text-[#150f96]'}`}
          onClick={() => setGender('남')}
        >
          남
        </button>
        <button
          className={`w-1/2 h-full rounded-lg font-bold ${gender === '여' ? 'bg-[#150f96] text-white' : 'bg-white text-[#150f96]'}`}
          onClick={() => setGender('여')}
        >
          여
        </button>
      </div>
          </div>
          {/* input 2 */}
          <div className="mt-2">
          <input 
            type="text" 
            className="w-full p-3 border rounded-lg border-gray-400"
            placeholder="휴대폰번호 (없이 입력)"
            required
          />
          </div>
          {/* submit buttons 2 */}
          <div className="w-full flex justify-between mt-2">
            <button className="w-[48%] p-3 bg-yellow-400 font-bold text-lg rounded-lg" onClick={handleConsultation}>
            가입 상담 신청
            </button>
            <button className="w-[48%] p-3 bg-yellow-400 font-bold text-lg rounded-lg" onClick={handleExistingCustomer}>
            가입 상담 신청
            </button>
          </div>
          {/* call button and icon link */}
          <div className="w-full mt-2 border border-gray-400 rounded-xl h-[40px] flex items-center bg-gray-300 justify-between px-2">
            <div className="flex gap-1 items-center"><FaPhoneAlt/> <span>text past here</span></div>
            <div><FaChevronRight/></div>
          </div>
          {/* second call button and icon link */}
          <div className="w-full mt-1 border border-gray-400 rounded-xl h-[40px] flex items-center bg-gray-300 justify-between px-2 mb-2">
            <div className="flex gap-1 items-center"><FaPhoneAlt/> <span>text past here</span></div>
            <div><FaChevronRight/></div>
          </div>
  
      </div>
      
      </>
    )
  }

