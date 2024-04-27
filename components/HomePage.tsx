'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

import React from 'react'
import Link from 'next/link';
import { RiMenu2Fill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const HomePage = () => {

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const navigationLink = (linker: string) => {
      toggleMenu();
      router.push(linker);
  };

  return (
    <div className='bg-[#2C2C2C] text-[#FFFFFF] h-[100svh]'>
      {/*Mobile Navigation*/}
      <div className='menu-section flex p-5 sm:hidden'>
          <div className='text-[16px] font-bold'><Link href='/'>tamangNischal</Link></div>
          <div className='ml-auto sm:hidden flex'>
            {!isMenuOpen ? <RiMenu2Fill className='text-[20px] font-bold cursor-pointer' onClick={toggleMenu}/> : <AiOutlineCloseCircle className='sm:hidden text-[20px] font-bold text-[#0C8CE9] cursor-pointer' onClick={toggleMenu}/> } 
          </div>
      </div>
      {
        isMenuOpen &&  
        <div className='bg-[#2C2C2C] text-[12px] pl-5 pr-5 pt-4 pb-5 fixed w-full text-end sm:hidden opacity-90'>
          <ul className=' mt-1 mb-3'>About me</ul>
          <ul className=' mt-3 mb-3'>My Designs</ul>
          <ul className=' mt-3 mb-3'>My Developments</ul>
          <ul className=' mt-3 mb-3'>Contact me</ul>
          <Link href='https://www.linkedin.com/in/nischal-tamang-072058240/' target='_blank' className='text-[#0C8CE9]'>Follow me on LinkedIn</Link>
        </div>
      }
      {/*Desktop Navigation*/}
      <div className='menu-section sm:flex p-5 hidden'>
          <div className='text-[24px] font-bold 2xl:text-[32px]'><Link href='/'>tamangNischal</Link></div>
          <div className='ml-auto'>
            <RiMenu2Fill className='text-[24px] font-bold 2xl:text-[32px]'/> 
      </div>

      </div>
      
      <div className='pr-5 pl-5 sm:flex sm:items-center sm:justify-center'>
        <div className='hero-section pt-5 sm:flex sm:flex-row-reverse sm:justify-center sm:items-center sm:h-[80svh] sm:w-[60svw]'>
          <div className='h-[40svh] sm:h-[50svh] sm:pl-10'>
            <div className='h-full w-full overflow-hidden'>
              <img className='inset-0 w-full h-full object-cover object-center sm:hover:scale-125 transition duration-500' src='/assets/images/icon.webp' alt='' />
            </div>
          </div>
          <div className="con-divs sm:pr-10">
            <div className='pt-8'>
              <p className='text-[16px] sm:text-[20px] 2xl:text-[30px] font-bold tracking-tight'>I am</p>
              <p className='text-[36px] sm:text-[40px] 2xl:text-[60px] font-bold tracking-tight leading-none'>Tamang.</p>
              <p className='text-[36px] sm:text-[40px] 2xl:text-[60px] font-bold tracking-tight leading-none'>Nischal</p>
            </div>
            <h2 className='text-[16px] sm:text-[20px] 2xl:text-[30px] font-bold tracking-tighter pt-4 pb-1'>Software <Link href='https://github.com/Nischal957905' target='_blank' className='text-[#0C8CE9]'>Engineer</Link> & UI <Link href='https://www.linkedin.com/in/nischal-tamang-072058240/' target='_blank' className='text-[#0C8CE9]'>Designer</Link></h2>
            <div className='text-[14px] 2xl:text-[21px] font-normal leading-tight'>
              <p>I am a professional software</p>
              <p>engineer as well as a UI designer</p>
            </div>
            <Link href='https://github.com/Nischal957905' target='_blank'><BsGithub className='text-[24px] 2xl:text-[36px] mt-4' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage