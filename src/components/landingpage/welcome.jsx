import React from 'react'
import './hero.css'
import img1 from '../../assets/WhatsApp Image 2024-07-31 at 4.30.01 AM.jpeg'


export default function welcome() {
  return (
    <div className='w-[100%] flex md:flex-row gap-16 justify-center items-center py-20 bg-[#363133]'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col items-center  md:flex-row gap-5 justify-center md:gap-8 md:pl-12'>
            <img src={img1} alt="" className='md:h-[350px] hidden md:block  md:w-[350px] w-[330px] h-[200px] md:rounded-[15px] '/>
            <img src={img1} alt="" className='md:h-[350px]  md:w-[350px] w-[330px] h-[200px] md:rounded-[15px]'/>
          </div>

          <div className='md:h-[700px] bg-[#f0e0bb] md:w-[790px] w-[330px] h-[900px] flex flex-col justify-center items-center md:items-start md:rounded-tr-[105px] md:rounded-tl-[10px] md:rounded-br-[10px] md:rounded-bl-[105px] md:px-8 md:gap-10 px-2 gap-5' >
              <h1 className='font-Cinzel font-medium text-[#363133] md:text-[45px] md:w-[500px] text-[30px] text-center'>WELCOME TO OUR CHURCH</h1>
              <p className='font-Inter font-medium text-[#363133] md:text-[20px] md:w-[750px] text-[20px] text-center'>
                Christ Apostalic Church welcomes you to our of believers We belive that Search, Gather and Nuture are the center of a well-lived. That's why we're excited  to welcome you  to our church Community!
                <br/> <br />Weather you are new to the area, looking for a church home, or simply seeking a deeper connection with God , we are here to help. Our church is a place where you can explore your faith, connect with others that share your values, and grow in your relationship with God.
                <br /> <br />So come as you are, and let's discover the joy of a life lived in sesrch, Gather and Nuture together.
              </p>
              <button className=' bg-[#C23924] md:w-[350px] w-[250px] h-[30px] md:h-[45px] rounded-[16px] text-[#F3F3F3] font-Inter font-medium text-[14px]'>Learn more about our Values</button>
          </div>

        </div>

        <img src={img1} alt="" className='h-[900px] bg-yellow-800 w-[300px] rounded-tr-[150px] rounded-tl-[20px] rounded-b-[20px] hidden md:block'/>

    </div>
  )
}
