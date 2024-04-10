import React from 'react';

const ProdDrop = () => {
   
  const handleCategoryClick = (category: string) => {
    localStorage.setItem('selectedCategory', category);
  };

  return (
    <div className='w-full flex justify-center'>
        <div className='w-[50%] flex justify-center flex-wrap p-5 max-[1150px]:w-full max-[570px]:hidden'>
            <div className='w-full justify-start flex text-gl font-medium h-[20px] pl-8 pb-10 pt-5 text-gray-500'>
                Categories
            </div>
            <div className='w-full justify-start flex flex-wrap pl-8 h-[150px]'>
                {/*data.categories.map((category, index) => (
                    <div key={index} className="w-[33%] text-2xl font-bold">
                        <a
                            href={"/products/" + category.toLowerCase().replace(/\s+/g, '-')}
                            className='hover:underline'
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </a>
                    </div>
                ))*/}
            </div>
        </div>
    </div>
  );
};

export default ProdDrop;
