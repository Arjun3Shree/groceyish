import React from 'react'
import { useState } from 'react';

function TopNavbar2() {
    const [margintop, setMargintop] = useState("mt-[-95%]")

    const navToggler = () => {
        setMargintop((prevclssname) => prevclssname === "mt-[-95%]" ? "mt-[5%]" : "mt-[-95%]")
    }



    return (
        <>
            <nav className='pb-3 flex bg-white pt-5 mt-16 w-[100%] overflow-hidden'>

                <div className={`nav-links ${margintop} ml-5 md:mt-0 duration-500 flex flex-shrink-2 items-center p4 md:space-x-[8vw]`}>

                    {/* Home Button */}
                    <div className="pl-[5%] items-center mx-5 ml-[0.2vw] hidden md:flex">
                        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded whitespace-nowrap">
                            <i className="fas fa-th-large mr-1"></i>
                            <span className='font-quicksand-w400'>Brows All Categories</span>
                        </button>
                    </div>


                    {/* Product Control Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center md:space-x-[4vw]">
                        <ul className="flex md:flex-row flex-col md:items-center gap-8 md:gap-[5vw]">
                            <li>
                                <a href="#" className="flex items-center text-green-500 ">
                                    <i className="fas fa-home mr-1"></i>
                                    <span className='font-quicksand-w400' >Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-500 whitespace-nowrap">
                                    <i className="fas fa-fire mr-1">
                                        <span className='font-quicksand-w400'> Hot deals</span>
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-500 whitespace-nowrap">
                                    <i className="fas fa-percent mr-1">
                                        <span className='font-quicksand-w400'> Promotions</span>
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-500 whitespace-nowrap">
                                    <i className="fas fa-bullhorn mr-1">
                                        <span className='font-quicksand-w400' > New Products</span>
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-500 whitespace-nowrap">
                                    <i className="fas fa-phone-alt text-green-500 mr-2"></i>
                                    <span className="font-quicksand-w400 text-green-500">12333-7777</span>
                                    <span className="font-quicksand-w400 ml-2">24/7 support center</span>
                                </a>
                            </li>
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