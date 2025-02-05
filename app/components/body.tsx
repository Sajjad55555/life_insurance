import Image from "next/image"
import ProfileList from "./profile_list"

export default function Body() {
  return (
    <>
    {/* main div */}
    <div className='w-full'>
        {/* first image */}
        <div className='w-full h-[100px] hidden md:flex justify-center items-center mt-8'>
        <div className="w-full h-auto  ">
    <Image className="w-full" src="/body/form_prize.png" width={1500} height={1000} alt="bodyimage"/>
    </div>
        </div>
        {/* main text */}
        <div className="w-full h-[50px] md:h-[70px] flex items-center justify-center md:mt-8 mt-1">
            <div className="w-full md:w-[80%] h-full bg-blue-100 flex items-center justify-center">
                <p className="text-xl md:text-[35px] font-bold text-[#150f96]">이런 분들에게 추천합니다!</p>

            </div>

        </div>
        {/* profile card */}
       
         <div>
         <ProfileList/>
         </div>
         <div>
          
         </div>


    </div>
    
    
    
    
    </>
  )
}
