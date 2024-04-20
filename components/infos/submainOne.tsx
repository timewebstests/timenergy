import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const SubmainOne = () => {
  return (
    <div className='w-full flex justify-center max-[980px]:mt-10 mb-5'>
        <div className='w-[60%] max-[980px]:w-full flex justify-center flex-wrap border-t-[1px] max-[980px]:px-5 border-slate-300'>
            <div className='w-full mt-5 text-3xl font-bold'>
                Risparmia tempo e denaro con Time
            </div>
            <div className='w-full mt-2 text-xl'>    
                tariffe convenienti su misura per te!
            </div>
            <div className='w-full flex justify-around   gap-5 mt-10 flex-wrap'>
                <div className='w-[20%] max-[1350px]:w-[45%] max-sm:w-full flex flex-nowrap'>
                    <div className='w-[20%] max-sm:w-[10%] flex items-start justify-center p-1 text-[#3a6bff]'>
                        <CiCircleCheck size={25}/>
                    </div>
                    <div className='w-[75%] space-y-3 max-sm:space-y-1'>
                        <div className='w-full text-xl font-bold text-[#3a6bff]'>
                            VELOCE
                        </div>
                        <div className='w-full'>
                            Cogli l'attimo con Time: risparmia tempo, guadagna comodità!
                        </div>
                    </div>
                </div>
                <div className='w-[20%] max-[1350px]:w-[45%] max-sm:w-full flex flex-nowrap'>
                    <div className='w-[20%] max-sm:w-[10%] flex items-start justify-center p-1 text-[#3a6bff]'>
                        <CiCircleCheck size={25}/>
                    </div>
                    <div className='w-[75%] space-y-3 max-sm:space-y-1'>
                        <div className='w-full text-xl font-bold text-[#3a6bff]'>
                            ASSISTENZA
                        </div>
                        <div className='w-full'>
                            Soluzioni su misura e consulenza dedicata per ogni cliente.
                        </div>
                    </div>
                </div>
                <div className='w-[20%] max-[1350px]:w-[45%] max-sm:w-full flex flex-nowrap'>
                    <div className='w-[20%] max-sm:w-[10%] flex items-start justify-center p-1 text-[#3a6bff]'>
                        <CiCircleCheck size={25}/>
                    </div>
                    <div className='w-[75%] space-y-3 max-sm:space-y-1'>
                        <div className='w-full text-xl font-bold text-[#3a6bff]'>
                            GRATUITO
                        </div>
                        <div className='w-full'>
                            Scopri i nostri servizi gratuiti per ottimizzare il tuo risparmio.
                        </div>
                    </div>
                </div>
                <div className='w-[20%] max-[1350px]:w-[45%] max-sm:w-full flex flex-nowrap'>
                    <div className='w-[20%] max-sm:w-[10%] flex items-start justify-center p-1 text-[#3a6bff]'>
                        <CiCircleCheck size={25}/>
                    </div>
                    <div className='w-[75%] space-y-3 max-sm:space-y-1'>
                        <div className='w-full text-xl font-bold text-[#3a6bff]'>
                            SICURO
                        </div>
                        <div className='w-full'>
                            Il nostro impegno per la sicurezza: certificazioni e controlli costanti per garantirti tranquillità.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubmainOne