import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/pngkey.com-church-logo-png-1230334.png';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-[#343434] w-[100%] h-[100px] flex flex-row justify-between items-center px-5 md:px-20 fixed z-50'>
      <div className='flex flex-row justify-center items-center gap-3'>
        <img src={logo} alt="Church Logo" className='md:w-[100px] md:h-[80px] w-[60px] h-[50px]'/>
        <div className='flex flex-col justify-center'>
          <h1 className='font-extrabold font-Inter md:text-[20px] text-[16px] text-[#F3F3F3]'>Christ Apostolic Church</h1>
          <h3 className='font-bold font-Inter md:text-[16px] text-[14px] text-[#8E8B82]'>Chapel Lautech</h3>
        </div>
      </div>

      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} color="#F3F3F3" /> : <FaBars size={30} color="#F3F3F3" />}
        </button>
      </div>

      <ul className='hidden md:flex flex-row gap-3'>
        <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3]'>Home</NavLink>
        <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3]'>About Us</NavLink>
        <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3]'>Events</NavLink>
        <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3]'>Sermons</NavLink>
        <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3]'>Blog</NavLink>
        <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3]'>Give</NavLink>
      </ul>

      <button className='hidden md:block bg-[#E9DCBE] w-[150px] h-[45px] rounded-[16px] text-[#363133] font-Inter font-medium text-[18px]'>Contact us</button>

      {isOpen && (
        <ul className='md:hidden absolute top-[100px] left-0 w-full bg-[#343434] flex flex-col items-center h-screen'>
          <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3] my-2'>Home</NavLink>
          <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3] my-2'>About Us</NavLink>
          <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3] my-2'>Events</NavLink>
          <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3] my-2'>Sermons</NavLink>
          <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3] my-2'>Blog</NavLink>
          <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3] my-2'>Give</NavLink>
          <NavLink to='' className='font-Inter font-medium text-[18px] text-[#F3F3F3] my-2 bg-[#E9DCBE] w-[150px] h-[45px] rounded-[16px] flex justify-center items-center'>Contact us</NavLink>
        </ul>
      )}
    </div>
  );
}