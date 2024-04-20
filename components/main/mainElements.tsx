'use client'

import React, { useState, useEffect } from 'react';
import MainCard from '@/components/main/MainCard';

interface OfferteProps {
    id: number;
    offerta: string;
    frase: string;
    foto: string;
}

const MainElements = () => {
    const [data, setData] = useState<OfferteProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/offerte_settori");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full flex justify-center flex-wrap max-[980px]:p-1 p-20 max-[980px]:pt-20'>
            <div className='w-full flex justify-center'>
                <div className='w-[65%] max-[980px]:w-full text-white flex bg-[url("/mainbg.png")] h-[40vh] bg-cover bg-center px-20 max-[980px]:p-5 font-bold items-center text-[4vh] max-[980px]:text-[3vh]'>
                    TIME ENERGY è la soluzione giusta per TE!
                </div>
            </div>
            <div className='flex max-[980px]:w-full max-sm:max-w-[100%] max-w-[65%] justify-center flex-wrap mt-10 gap-10'>
                {data.map((offerta, index) => (
                    <div key={index} className="max-sm:w-full max-sm:flex h-[300px] max-sm:h-[100px]">
                        <MainCard 
                            testo_offerta={offerta.offerta}
                            foto={offerta.foto}    
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainElements;
