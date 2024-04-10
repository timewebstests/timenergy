import React, { useEffect, useState } from 'react';

interface Category {
    categorys: keyof LuceGasData;
}

interface LuceGasData {
    id: number;
    luce_gas: string;
    internetcasa: string;
    tariffetele: string;
}

const ProdDrop = ({ categorys }: Category) => {
   
    const [data, setData] = useState<LuceGasData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/luce_gas");
            const data = await response.json();
            setData(data);
        };

        fetchData();
    }, []);

    const filteredData = data.filter((item) => item[categorys]);

    const categoryNames: { [key in keyof LuceGasData]: string } = {
        id: "",
        tariffetele: "Tariffe Telefoniche",
        luce_gas: "Luce e Gas",
        internetcasa: "Internet Casa",
    };

    return (
        <div className='w-full flex justify-center'>
            <div className='w-[50%] flex justify-center flex-wrap p-5 max-[1150px]:w-full max-[570px]:hidden'>
                <div className='w-full justify-start flex text-gl font-medium h-[20px] pl-8 pb-10 pt-5 text-gray-500'>
                    {categoryNames[categorys]}
                </div>
                <div className='w-full justify-start flex flex-wrap pl-8 h-[150px]'>
                    {filteredData.map((category, index) => (
                        <div key={index} className="w-[33%] text-xl font-bold pr-5">
                            <a className='hover:underline cursor-pointer'>
                                {category[categorys]}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProdDrop;
