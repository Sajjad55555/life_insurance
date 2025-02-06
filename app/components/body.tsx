import Image from "next/image";
import ProfileList from "./profile_list";

export default function Body() {
  return (
    <div className='w-full bg-white'> {/* Force white background */}
      {/* Hero Image Section */}
      <div className='w-full h-[100px] hidden md:flex justify-center items-center mt-8 px-4'>
        <div className="w-full h-auto shadow-lg rounded-lg overflow-hidden">
          <Image 
            src="/body/form_prize.png" 
            width={1500} 
            height={1000} 
            alt="Recommendation header"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Recommendation Heading */}
      <div className="w-full flex items-center justify-center my-8 px-8 md:my-12">
        <div className="w-full md:w-[80%] bg-blue-50 py-4 rounded-lg border-2 border-blue-200"> {/* Soft blue background */}
          <h1 className="text-xl md:text-3xl font-bold text-blue-800 text-center">
            이런 분들에게 추천합니다!
          </h1>
        </div>
      </div>

      {/* Profile Cards Section */}
      <div className="w-full px-4 md:px-8">
        <ProfileList />
      </div>

      {/* Spacer for bottom padding */}
      <div className="h-8"></div>
    </div>
  )
}