'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CiLogin } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav className='w-full flex justify-evenly max-[980px]:justify-between p-5 items-center h-[70px] border-b-2 bg-transparent'>
        <div className='text-2xl font-bold text-[#23395d]'>
          <a href="/">
            Time Energy
          </a>
        </div>
        <div className='space-x-16 max-sm:space-x-5 text-base font-semibold max-[980px]:hidden'>
          <a href='/' className='hover:text-[#53637b]' onMouseEnter={() => setIsHovered(true)}>
            Chi siamo
          </a>
          <a href='' className='hover:text-[#53637b]' onMouseEnter={() => setIsHovered(true)}>
            Luce e Gas
          </a>
          <a href='/' className='hover:text-[#53637b]' onMouseEnter={() => setIsHovered(true)}>
            Internet Casa 
          </a>
          <a href='/' className='hover:text-[#53637b]' onMouseEnter={() => setIsHovered(true)}>
            Tariffe Telefoniche
          </a>
        </div>
        <div className='flex'>
            <Button
            className='relative hover:text-[#53637b]'
            variant="outline">
                Accedi <CiLogin size="18"/>
            </Button>
        </div>
        <div className='hidden max-[980px]:flex'>
            <Button
            className='hover:text-[#53637b]'
            variant="outline">
                <GiHamburgerMenu />
            </Button>
        </div>
      </nav>
      <div className={`absolute w-full flex justify-center bg-white transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} onMouseLeave={() => setIsHovered(false)}>
        {isHovered && "f"}
      </div>
    </>
  )
}

export default Navbar