import React from 'react'
import Blogdetail2_Card from './blogdetail_card'
import Image from 'next/image'
export default function Blog_Detail1() {
  return (
    <>
    <div className='w-full h-auto flex justify-center'>
        <div className='w-[90%] h-auto'>
            <div>
                <Blogdetail2_Card/>
            </div>
            <div className='w-full h-[161px] border border-[#dfdfdf] mt-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-[150px]'>
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
