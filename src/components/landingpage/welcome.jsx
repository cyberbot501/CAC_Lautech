import React from 'react'
import './hero.css'
import img1 from '../../assets/WhatsApp Image 2024-07-31 at 4.30.01 AM.jpeg'


export default function welcome() {
  return (
    <div className='w-[100%] flex md:flex-row gap-16 justify-center items-center py-20 bg-[#e9e4ff]'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-row gap-5 md:gap-8 md:pl-12'>
            <img src={img1} alt="" className='md:h-[350px]  md:w-[350px] w-[165px] h-[120px]'/>
            <img src={img1} alt="" className='md:h-[350px]  md:w-[350px] w-[165px] h-[120px]'/>
          </div>

          <div className='md:h-[400px] bg-[#E9DCBE] md:w-[790px] w-[350px] h-[400px] flex flex-col justify-center items-start' >
              <h1 className='font-Cinzel font-bold text-[#F3F3F3] text-[45px]'>WELCOME TO OUR CHURCH</h1>
          </div>

        </div>

        <img src={img1} alt="" className='h-[600px] bg-yellow-800 w-[300px] rounded-tr-[150px] hidden md:block'/>
    </div>
  )
}
