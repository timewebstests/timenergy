'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CiLogin } from 'react-icons/ci';
import { GiHamburgerMenu } from 'react-icons/gi';
import ProdDrop from '@/components/dropdown-prod';

const Navbar = () => {
    const [isHoveredLuceGas, setIsHoveredLuceGas] = useState(false);
    const [isHoveredInterCasa, setIsHoveredInterCasa] = useState(false);
    const [isHoveredTarifTel, setIsHoveredTarifTel] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/luce_gas");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
  return (
    <>
      <nav className='w-full flex justify-evenly max-[980px]:justify-between p-5 items-center h-[70px] border-b-2 bg-transparent'>
        <div className='text-2xl font-bold text-[#23395d]'>
          <a href='/'>Time Energy</a>
        </div>
        <div className='space-x-16 max-sm:space-x-5 text-base font-semibold max-[980px]:hidden'>
          <a href='/' className='hover:text-[#53637b]' onMouseEnter={() => (setIsHoveredLuceGas(false), setIsHoveredInterCasa(false), setIsHoveredTarifTel(false))}>
            Chi siamo
          </a>
          <a
            href='/'
            className='hover:text-[#53637b]'
            onMouseEnter={() => (setIsHoveredLuceGas(true), setIsHoveredInterCasa(false), setIsHoveredTarifTel(false))}>
            Luce e Gas
          </a>
          <a
            href='/'
            className='hover:text-[#53637b]'
            onMouseEnter={() => (setIsHoveredInterCasa(true), setIsHoveredTarifTel(false), setIsHoveredLuceGas(false))}>
            Internet Casa
          </a>
          <a
            href='/'
            className='hover:text-[#53637b]'
            onMouseEnter={() => (setIsHoveredTarifTel(true), setIsHoveredInterCasa(false), setIsHoveredLuceGas(false))}>
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
      <div className={`absolute w-full flex justify-center bg-white transition-opacity duration-500 ease-in-out ${isHoveredLuceGas || isHoveredInterCasa || isHoveredTarifTel ? 'opacity-100' : 'opacity-0'}`} onMouseLeave={() => (setIsHoveredLuceGas(false), setIsHoveredInterCasa(false), setIsHoveredTarifTel(false))}>
          {isHoveredLuceGas && data && <ProdDrop categorys='luce_gas' data={data} />}
          {isHoveredInterCasa && data && <ProdDrop categorys='internetcasa' data={data} />}
          {isHoveredTarifTel && data && <ProdDrop categorys='tariffetele' data={data} />}
      </div>
    </>
  );
};

export default Navbar;
