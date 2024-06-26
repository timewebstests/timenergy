import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

interface ButtonProp {
    text: string;
}

const ButtonPred = ({text}: ButtonProp) => {
  return (
    <>
      <a className='flex justify-center items-center w-[70%] h-[35px] bg-[#4bb1ff] p-5 rounded-2xl text-white font-bold hover:bg-[#87cbff] cursor-pointer max-sm:hidden'>
          {text} <IoIosArrowForward size="23"/>
      </a>
      <a className='hidden justify-center items-center w-auto h-[35px] bg-[#4bb1ff] p-5 rounded-2xl text-white font-bold hover:bg-[#87cbff] cursor-pointer max-sm:flex'>
        <IoIosArrowForward size="23"/>
      </a>
    </>
  )
}

export default ButtonPred