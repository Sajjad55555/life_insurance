import React from 'react'
import Blogdetail2_Card from './blogdetail_card'
import Image from 'next/image'


interface BlogCardTypes{
    title: string;
    image: string;
    text1: string;
    text2?: string; // Optional property
}
export default function Blog_Detail1() {
    const blogdetail_card:BlogCardTypes[] = [{
        title: '가입나이',
        image: '/blogDetails/info_age.png',
        text1: '10년만기 :',
        text2: '0세~70세',
    },
    {
        title: '보험기간',
        image: '/blogDetails/info_limit.png',
        text1: '10년 만기 :',
        
    },
    {
        title: '납입기간',
        image: '/blogDetails/info_time.png',
        text1: '전기월납 :',
        
    },
    {
        title: '가입한도',
        image: '/blogDetails/info_limit.png',
        text1: '1,000만원',
        
    }]
  return (
    <>
    <div className='w-full h-auto flex justify-center'>
        <div className='w-[85%] h-auto'>
            <div className='flex flex-col justify-between md:flex-row gap-6'>
        {blogdetail_card.map((item:BlogCardTypes, index:number) => (
                    <Blogdetail2_Card 
                        key={index}
                        title={item.title} 
                        image={item.image} 
                        text1={item.text1} 
                        text2={item.text2 || ''} // Handle cases where text2 is missing
                    />
                ))}</div>
            <div className='w-full h-auto md:h-[161px] border border-[#dfdfdf] mt-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-[150px]'>
                {/* div 1 */}
                <div className='flex items-center mb-4 gap-4'>
                    <div><Image src={"/blogDetails/ico_special_contr.png"} 
                    width={50}
                    height={30}
                    alt='blogfooter image'></Image></div>
                    <div className='text-xl font-semibold'>특약</div>
                    </div>
                    {/* div 2 */}
                    <div className='flex flex-col gap-2 font-semibold'>
                        <p>	(무)신보철치료보장특약</p>
                        <p>(무)소액치과치료특약</p>
                    </div>
                    {/* div 3 */}
                    <div className='flex flex-col gap-2 font-semibold'>
                        <p>(무)크라운보장특약</p>
                        <p>(무)전치부보철치료보장특약</p>
                    </div>

            </div>

        </div>

    </div>
    
    
    
    </>
  )
}
