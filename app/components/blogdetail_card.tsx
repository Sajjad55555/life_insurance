import Image from "next/image"


interface BlogCardTypes{
  title: string;
  image: string;
  text1: string;
  text2?: string; // Optional property
}

export default function Blogdetail2_Card(props:BlogCardTypes) {
  return (
    <>
    <div className='h-[340px] w-[280px] border border-[#dfdfdf] '>
        <div className='w-full h-[186px] gap-2 bg-[#f5faff] flex flex-col items-center justify-center'>
            <div><Image src={props.image} width={50} height={50} alt=""></Image></div>
            <div className="font-semibold">{props.title}</div>
        </div>
        <div className='w-full h-[151px] bg-white flex items-center justify-center'>
            <div>{props.text1}: <br />{props.text2}</div>
        </div>

    </div>
    
    
    
    </>
  )
}
