import Image from "next/image"

export default function Blogdetail2_Card() {
  return (
    <>
    <div className='h-[340px] w-[254px] border border-[#dfdfdf] '>
        <div className='w-full h-[186px] gap-2 bg-[#f5faff] flex flex-col items-center justify-center'>
            <div><Image src={"/blogDetails/info_age.png"} width={50} height={50} alt=""></Image></div>
            <div>가입나이</div>
        </div>
        <div className='w-full h-[151px] bg-white flex items-center justify-center'>
            <div>10년만기 : <br />0세~70세</div>
        </div>

    </div>
    
    
    
    </>
  )
}
