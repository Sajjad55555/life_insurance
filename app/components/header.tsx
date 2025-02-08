import Image from "next/image"
import Header_Form from "./header_form"

export default function Header() {
  return (
    <>
      <div className='w-full h-auto gap-4 flex flex-col md:flex-row md:px-20  md:mt-20'>
        {/* text and image div */}
        <div className='md:w-[55%] w-full h-[515px] md:h-[750px] px-4 py-4'>
          <h1 className="md:text-[2.5rem] school-font leading-[3rem] text-2xl font-[900] text-black text-center">
            <span className="text-[#9B00FF]">성공적인</span> 사업을 위해서는 <br></br>
            성공적인 파트너가 있어야합니다!
          </h1>

          <h2 className="text-[2rem] nexonReg-font font-[900] text-[#3a3d53] text-center">
            난 어떤 팀이 필요한걸까?
          </h2>


          <div className="top3-border-wrapper flex flex-col md:mt-[10vh]">
    <div className="top3-border-title school-font text-[#3a3d53] text-[1.5rem] font-[900] mb-4">
        왜 와루일까?
    </div>
    
    <div className="top3-border flex flex-col w-full bg-black rounded-[10px]">
        <div className="p-4 ">
            <div className="nexonReg-font text-white text-[1.1rem] font-[900]">
                1. 마케팅,개발, 디자이너 , MD 따로 찾을 필요없는<br/>
                올인원 솔루션을 제공합니다
            </div>
        </div>

        <div className="p-4  ">
            <div className="nexonReg-font text-white text-[1.1rem] font-[900]">
                2. 모든 팀원이 와루에서 활동하기 때문에 팀 협업이 쉬워집니다
            </div>
        </div>

        <div className="p-4 ">
            <div className="nexonReg-font text-white text-[1.1rem] font-[900]">
                3. 대행사가 아닌 내 회사를 같이 키울 파트너 (밤에도 쉬지않고 일합니다 (*ㅡ*))
            </div>
        </div>

        <div className="p-4">
            <div className="nexonReg-font text-white text-[1.1rem] font-[900]">
                4. 마케팅과 개발의 통합 솔루션, 불편함을 자동화로 해결합니다
            </div>
        </div>
    </div>
</div>

        </div>
        {/* form div */}
        <div className=' md:w-[40%] hidden md:block w-full h-[715px] md:h-[750px]'>
          {/* main div */}
          <div className="h-full w-full bg-red-50 flex items-center justify-center">
            <div className=" h-[650px] md:h-[650px] rounded-2xl bg-[#150f96] flex flex-col items-center">
              <div className="mt-4 w-[80%] h-[50px] px-4">

                <Image className="w-full h-full" src={"/header/InputBox_title.png"} width={1000} height={400} alt="phone image" />

              </div>
              <div className="w-[90%] h-full mt-6"><Header_Form /></div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
