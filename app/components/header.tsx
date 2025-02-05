import Image from "next/image"
import Header_Form from "./header_form"

export default function Header() {
  return (
    <>
    <div className='w-full h-auto gap-4 flex flex-col md:flex-row'>
        {/* text and image div */}
        <div className='md:w-[55%] w-full h-[515px] md:h-[750px] px-4 py-4'>
         <Image src={"/header/main1.gif"} width={500} height={500} alt="headerimage"
         className="w-full h-full" />

        </div>
        {/* form div */}
        <div className=' md:w-[40%] hidden md:block w-full h-[715px] md:h-[750px]'>
          {/* main div */}
          <div className="h-full w-full bg-red-50 flex items-center justify-center">
          <div className="w-[80%] h-[650px] md:h-[650px] rounded-2xl bg-[#150f96] flex flex-col items-center">
            <div className="mt-4 w-[80%] h-[50px] px-4">
              
                <Image className="w-full h-full" src={"/header/InputBox_title.png"} width={1000} height={400} alt="phone image" />
  
            </div>
            <div className="w-[90%] h-full mt-6"><Header_Form/></div>
          </div>
          </div>
        </div>
    </div>
    
    
    </>
  )
}
