import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

interface LuceGasData {
  id: number;
  luce_gas: string;
  internetcasa: string;
  tariffetele: string;
}

const SideBar = ({ data }: { data: LuceGasData[] }) => {
  const [isLuceGasClicked, setIsLuceGasClicked] = useState(false);
  const [isInternetCasaClicked, setIsInternetCasaClicked] = useState(false);
  const [isTariffeTeleClicked, setIsTariffeTeleClicked] = useState(false);

  const handleLuceGasClick = () => {
    setIsLuceGasClicked(!isLuceGasClicked);
    setIsInternetCasaClicked(false);
    setIsTariffeTeleClicked(false);
  };

  const handleInternetCasaClick = () => {
    setIsInternetCasaClicked(!isInternetCasaClicked);
    setIsLuceGasClicked(false);
    setIsTariffeTeleClicked(false);
  };

  const handleTariffeTeleClick = () => {
    setIsTariffeTeleClicked(!isTariffeTeleClicked);
    setIsLuceGasClicked(false);
    setIsInternetCasaClicked(false);
  };

  const filteredData = data.filter(category => category.luce_gas && category.luce_gas.trim() !== "");

  return (
    <>
      <div className="max-[980px]:flex hidden shadow-2xl absolute z-50 right-0 justify-self-end max-w-[300px] h-[calc(100vh-70px)] bg-white">
        <nav className="w-full flex items-center mt-5 h-[400px] flex-wrap px-5 text-xl font-bold">
          <a href="" className="w-full flex items-center justify-between hover:underline">
            <div className="w-[80%] flex">Chi siamo</div>
            <div>
              <IoIosArrowForward />
            </div>
          </a>
          <div
            className="w-full flex items-center justify-between hover:underline"
            onClick={handleLuceGasClick}
          >
            <div className="w-[80%] flex">Luce e Gas</div>
            <div>{isLuceGasClicked ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
          </div>
          {isLuceGasClicked && (
            <div className="pl-2">
              {filteredData.map((category, index) => (
                  <div key={index} className="w-[100%] text-base font-light">
                      <a className='hover:underline cursor-pointer'>
                          {"- " +category.luce_gas}
                      </a>
                  </div>
              ))}
            </div>
          )}
          <div
            className="w-full flex items-center justify-between hover:underline"
            onClick={handleInternetCasaClick}
          >
            <div className="w-[80%] flex">Internet Casa</div>
            <div>{isInternetCasaClicked ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
          </div>
          {isInternetCasaClicked && (
            <div className="pl-2">
              {data.map((category, index) => (
                  <div key={index} className="w-[100%] text-base font-light">
                      <a className='hover:underline cursor-pointer'>
                          {"- " +category.internetcasa}
                      </a>
                  </div>
              ))}
            </div>
          )}
          <div
            className="w-full flex items-center justify-between hover:underline"
            onClick={handleTariffeTeleClick}
          >
            <div className="w-[80%] flex">Tariffe Telefoniche</div>
            <div>{isTariffeTeleClicked ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
          </div>
          {isTariffeTeleClicked && (
            <div className="pl-2">
              {data.map((category, index) => (
                  <div key={index} className="w-[100%] text-base font-light">
                      <a className='hover:underline cursor-pointer'>
                          {"- " +category.tariffetele}
                      </a>
                  </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default SideBar;
