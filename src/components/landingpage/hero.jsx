import React from 'react'
import './hero.css'

export default function hero() {
  return (
    <div className='hero flex flex-col justify-center items-center md:items-start h-[100vh] w-[100%] px-20 gap-6 pt-14'>
        <h1 className='text-white text-[40px] md:text-[60px] font-Cinzel font-bold w-[350px] text-center md:text-left md:w-[550px]'>A Community of Search, Gather, Nuture</h1>
        <h2 className='md:w-[701px] text-center md:text-left text-white text-[15px] md:text-[20px] font-Inter font-semibold'>We believe that everyone is invite  to experience God's grace, and that means you! Our church is a place where you can connect with others who share valueand beliefs, and where you can grow in your relationship with God.</h2>
        <button className=' bg-[#E9DCBE] w-[150px] h-[45px] rounded-[16px] text-[#363133] font-Inter font-medium text-[18px]'>Contact us</button>
    </div>
  )
}
