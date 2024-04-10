'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CiLogin } from 'react-icons/ci';
import { GiHamburgerMenu } from 'react-icons/gi';
import ProdDrop from '@/components/dropdown-prod';

const Navbar = () => {
  const [isHoveredLuceGas, setisHoveredLuceGas] = useState(false);
  const [isHoveredInterCasa, setisHoveredInterCasa] = useState(false);
  const [isHoveredTarifTel, setisHoveredTarifTel] = useState(false);

  return (
    <>
      <nav className='w-full flex justify-evenly max-[980px]:justify-between p-5 items-center h-[70px] border-b-2 bg-transparent'>
        <div className='text-2xl font-bold text-[#23395d]'>
          <a href='/'>Time Energy</a>
        </div>
        <div className='space-x-16 max-sm:space-x-5 text-base font-semibold max-[980px]:hidden'>
          <a href='/' className='hover:text-[#53637b]' onMouseEnter={() => (setisHoveredLuceGas(false), setisHoveredInterCasa(false), setisHoveredTarifTel(false))}>
            Chi siamo
          </a>
          <a
            href='/'
            className='hover:text-[#53637b]'
            onMouseEnter={() => (setisHoveredLuceGas(true), setisHoveredInterCasa(false), setisHoveredTarifTel(false))}>
            Luce e Gas
          </a>
          <a
            href='/'
            className='hover:text-[#53637b]'
            onMouseEnter={() => (setisHoveredInterCasa(true), setisHoveredTarifTel(false), setisHoveredLuceGas(false))}>
            Internet Casa
          </a>
          <a
            href='/'
            className='hover:text-[#53637b]'
            onMouseEnter={() => (setisHoveredTarifTel(true), setisHoveredInterCasa(false), setisHoveredLuceGas(false))}>
            Tariffe Telefoniche
          </a>
        </div>
        <div className='flex'>
          <Button className='relative hover:text-[#53637b]' variant='outline'>
            Accedi <CiLogin size='18' />
          </Button>
        </div>
        <div className='hidden max-[980px]:flex'>
          <Button className='hover:text-[#53637b]' variant='outline'>
            <GiHamburgerMenu />
          </Button>
        </div>
      </nav>
      <div className={`absolute w-full flex justify-center bg-white transition-opacity duration-500 ease-in-out ${isHoveredLuceGas || isHoveredInterCasa || isHoveredTarifTel ? 'opacity-100' : 'opacity-0'}`} onMouseLeave={() => (setisHoveredLuceGas(false), setisHoveredInterCasa(false), setisHoveredTarifTel(false))}>
        {isHoveredLuceGas && <ProdDrop categorys='luce_gas' />}
        {isHoveredInterCasa && <ProdDrop categorys='internetcasa' />}
        {isHoveredTarifTel && <ProdDrop categorys='tariffetele' />}
      </div>
    </>
  );
};

export default Navbar;
