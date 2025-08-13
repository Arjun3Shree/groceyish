import React, { useEffect, useState, useContext } from 'react'
import NavBarContext from '../../context/NavbarContext';
import { getAllProductListHandler } from '../../Handlers/productHandler';

function TopNavbar2() {

    const {activeButton, setActiveButton, navigationButtons} = useContext(NavBarContext)

    const [margintop, setMargintop] = useState('mt-[-95%]')    

    const handleButtonClick = (buttonName) => {
        setActiveNavbar('navbar1');
        
    }

    const navToggler = () => {
        setMargintop((prevclssname) => prevclssname === "mt-[-95%]" ? "mt-[5%]" : "mt-[-95%]")
    }


    return (
        <>
            <nav className='z-10 pb-3 flex bg-white pt-5 mt-16 w-[100%] overflow-hidden'>

                <div className={`nav-links ${margintop} ml-5 md:mt-0 duration-500 flex flex-shrink-2 items-center p4 md:space-x-[8vw]`}>

                    {/* Home Button */}
                    <div className="pl-[5%] items-center mx-5 ml-[0.2vw] hidden md:flex">
                        <button onClick={getAllProductListHandler} className="flex items-center bg-green-500 text-white px-4 py-2 rounded whitespace-nowrap">
                            <i className="fas fa-th-large mr-1"></i>
                            <span className='font-quicksand-w400'>Brows All Categories</span>
                        </button>
                    </div>


                    {/* Product Control Buttons */}
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center md:space-x-[4vw]">
                        <ul className="flex md:flex-row flex-col md:items-center gap-8 md:gap-[5vw]">
                            {Object.entries(navigationButtons).slice(0,5).map(([key, button]) => (
                                <li key={key}>
                                    <button onClick={() => setActiveButton(key)}>
                                        <a 
                                            href={button.route} 
                                            className={`flex items-center ${
                                                activeButton === key 
                                                    ? 'text-green-600' 
                                                    : 'text-gray-500'
                                            } whitespace-nowrap`}
                                        >
                                            <i className={`fas ${button.icon} mr-1`}></i>
                                            <span className={`${
                                                activeButton === key 
                                                    ? 'font-quicksand-w600' 
                                                    : 'font-quicksand-w400'
                                            }`}>
                                                {button.label}
                                            </span>
                                        </a>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='ml-[40%] '>
                    <button className="text-3xl mr-6 flex md:hidden" onClick={navToggler}>
                        <ion-icon className="cursor-pointer" name="menu-outline"></ion-icon>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default TopNavbar2