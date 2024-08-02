import React from 'react'
import imge from '../../assets/nathan-mullet-pmiW630yDPE-unsplash.jpg'

export default function reason() {
    const cardData = [
        {
            title: 'A Place To Pray',
            dis: 'At Christ Apostolic Church, we Provide  peaceful and welcoming environment where you connect with God through prayer. We believe that prayer is a powerful tool that can bring hope, healing, and peace to your life, whether you need to lift up your own needs or those of a loved one, our church provides a supportive community that will pray with you and for you',
           
        },

        {
            title: 'A Place To Worship',
            dis: 'Our church offers a placw where you csn worship and praise God in a meaningful way. We believe that worship is not just a sunday morning routine, but a lifestyle of giving glory to God in all that we do. Our worship servicesare design to help you encounter God precence, to be inspired by his word, and to grow in your faith.',
          
        },

        {
            title: 'A Place To Call Home',
            dis: 'Our church is more than just a building-its a family. We provide a warm aand friendly atmosphere where you feel you belong. We believe that we are stronger together than we are apart, and that everyone has a unique role to play in the body christ.',
          
        },
    ]
       
  return (
    <div className='bg-[#363133] flex flex-col justify-center items-center py-20 gap-20'>
       <div className='flex flex-col justify-center items-center gap-5'>
            <h3 className='text-[#E9DCBE] font-Inter font-medium text-[18px] md:text-[25px]'>Why You should Join us</h3>
            <h1 className='text-[#F3F3F3] font-Cinzel font-semibold md:text-[40px] text-[25px] w-[300px] md:w-[700px] text-center'>EMBACK ON A JOURNEY OF FAITH AND SERVICE WITH US</h1>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10'>
       {cardData.map((card, index) => (

            <div key={index} className='md:w-[380px] w-[330px] h-[400px] hero flex flex-col justify-center items-center gap-4'>
                <h1 className='text-[#F3F3F3] font-Cinzel font-semibold text-[25px] text-center w-[290px]'>{card.title}</h1>
                <p className='text-[#F3F3F3] font-Inter font-medium text-[18px] text-center px-5'>{card.dis}</p>
                  
            </div>
        ))}
       </div>
    </div>
  )
}
