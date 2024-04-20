import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const SubmainOne = () => {
  return (
    <div className='w-full flex justify-center max-[980px]:mt-10'>
        <div className='w-[60%] max-[980px]:w-full flex justify-center flex-wrap border-t-[1px] max-[980px]:px-5 border-slate-300'>
            <div className='w-full mt-5 text-3xl font-bold'>
                Noi confrontiamo, tu risparmi
            </div>
            <div className='w-full mt-5 text-lg'>    
                Time Energy è il sito di comparazione numero 1 in Italia.
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
                            In pochi minuti confrontiamo e troviamo la soluzione più vantaggiosa per te.
                        </div>
                    </div>
                </div>
                <div className='w-[20%] max-[1350px]:w-[45%] max-sm:w-full flex flex-nowrap'>
                    <div className='w-[20%] max-sm:w-[10%] flex items-start justify-center p-1 text-[#3a6bff]'>
                        <CiCircleCheck size={25}/>
                    </div>
                    <div className='w-[75%] space-y-3 max-sm:space-y-1'>
                        <div className='w-full text-xl font-bold text-[#3a6bff]'>
                            PERSONALE
                        </div>
                        <div className='w-full'>
                            Ti garantiamo trasparenza e le offerte più adatte alle tue esigenze.
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
                            Facile.it non aggiunge commissioni a carico del cliente, da sempre.
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
                            Utilizziamo solo canali ufficiali e pagamenti tracciabili per la tua sicurezza.
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[200px] bg-blue-400 my-16'>

            </div>
        </div>
    </div>
  )
}

export default SubmainOne