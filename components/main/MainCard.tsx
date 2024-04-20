import React from 'react'
import ButtonPred from '@/components/UIElements/ButtonPred';
import Image from 'next/image';

interface MainCardProps {
  testo_offerta: string;
  foto: string;
}

const MainCard = ({testo_offerta, foto}:MainCardProps) => {
  return (
    <div className='w-[280px] max-sm:w-full items-center max-sm:grid grid-cols-[1fr_2fr_1fr] h-[300px] max-sm:h-[100px] flex justify-center border-2 border-zinc-950 flex-wrap p-3 rounded-2xl'>
        <div className='w-full flex justify-center items-center text-2xl max-sm:text-[5vw] py-2 font-bold order-1'>
          {testo_offerta}
        </div>
        <div className='w-full flex max-sm:h-auto max-sm:max-h-[100px] h-[180px]'>
          <Image 
            src={"/"+foto}
            alt=''
            width={80}
            height={80}
            sizes='100vw'
            className="object-contain flex rounded-xl sm:w-full max-sm:max-h-[100px]"
          />
        </div>
        <div className='w-full flex justify-center order-1'>
          <ButtonPred text='Vai alle Offerte'/>
        </div>
    </div>
  )
}

export default MainCard