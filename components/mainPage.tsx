'use client'

import React, { useState, useEffect } from 'react';

interface OfferteProps {
    id: number;
    offerta: string;
    frase: string;
}

const MainPage = () => {
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
        <div className='w-full flex justify-center h-[calc(100vh-70px)] flex-wrap'>
            {data.map((offerta, index) => (
                <div key={index} className="item">
                    <h2>{offerta.offerta}</h2>
                </div>
            ))}
        </div>
    );
};

export default MainPage;
