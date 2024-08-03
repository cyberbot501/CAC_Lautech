import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './hero.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";

export default function Latest() {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-40 px-20 bg-[#363133]'>
        <div className='flex flex-col justify-center md:items-start items-center gap-5'>
            <h1 className='font-Cinzel text-[30px] md:w-[100px] text-center md:text-left w-[400px] text-[#F3F3F3]'>LATEST SERMON FROM CHRIST APOSTOLIC CHURCH</h1>
            <button className=' bg-transparent border-2 w-[150px] h-[45px] rounded-[16px] text-[#F3F3F3] font-Inter font-medium text-[18px] flex flex-row items-center justify-center gap-5'>See All <FaArrowRight /></button>
        </div>
         <div className="swiper-container relative flex justify-center items-center w-[870px] h-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
            // When the viewport is ≥ 768px, display 2 slides per view
            768: {
              slidesPerView: 2,
            },
          }}
        className="mySwiper h-[500px] md:mt-40"
      >
         <SwiperSlide className='flex flex-col'>
            <img src="" alt="" className='w-[240px] md:w-[420px] h-[200px] '/>
            <div>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>04/03/2023</p>
                <h2 className='font-Inter font-medium text-[28px] text-[#F3F3F3]'>The Power Of Love</h2>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>Pastor Obasa</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col'>
            <img src="" alt="" className='w-[420px] h-[200px] '/>
            <div>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>04/03/2023</p>
                <h2 className='font-Inter font-medium text-[28px] text-[#F3F3F3]'>The Power Of Love</h2>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>Pastor Obasa</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col'>
            <img src="" alt="" className='w-[420px] h-[200px] '/>
            <div>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>04/03/2023</p>
                <h2 className='font-Inter font-medium text-[28px] text-[#F3F3F3]'>The Power Of Love</h2>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>Pastor Obasa</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col'>
            <img src="" alt="" className='w-[420px] h-[200px] '/>
            <div>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>04/03/2023</p>
                <h2 className='font-Inter font-medium text-[28px] text-[#F3F3F3]'>The Power Of Love</h2>
                <p className='font-Inter font-medium text-[17px] text-[#F3F3F3]'>Pastor Obasa</p>
            </div>
        </SwiperSlide>
       
      </Swiper>
      {/* <div className="swiper-button-prev absolute z-[10000] pt-[150px] pl-[200px] pr-[200px] w-[300px]"></div>
        <div className="swiper-button-next absolute z-[10000] pt-[150px] pl-[200px] pr-[200px] w-[300px]"></div> */}
    </div>
    </div>
   
  );
}