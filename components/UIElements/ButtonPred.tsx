import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

interface ButtonProp {
    text: string;
}

const ButtonPred = ({text}: ButtonProp) => {
  return (
    <>
      <a className='flex justify-center items-center w-[70%] h-[35px] bg-[#d9803c] p-5 rounded-2xl text-white font-bold hover:bg-[#c07444] cursor-pointer max-sm:hidden'>
          {text} <IoIosArrowForward size="23"/>
      </a>
      <a className='hidden justify-center items-center w-auto h-[35px] bg-[#d9803c] p-5 rounded-2xl text-white font-bold hover:bg-[#c07444] cursor-pointer max-sm:flex'>
        <IoIosArrowForward size="23"/>
      </a>
    </>
  )
}

export default ButtonPred