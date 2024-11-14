import { useState } from 'react';
import React from 'react'

function TopNavbar1() {
    const [margintop, setMargintop] = useState("mt-[-90%]")

    const navToggler = () => {
        setMargintop((prevclssname) => prevclssname === "mt-[-90%]" ? "mt-[5%]" : "mt-[-90%]")
    }

    return (
        <>
            <nav className='p-3 flex bg-white fixed top-0 left-0 w-[100%] overflow-hidden'>
                <div className='flex flex-nowrap items-center justify-between space-x-12 w-full'>

                    {/* Nav Icon */}
                    <div className='flex -mt-40 md:mt-0 md:items-center md:mx-[8vh]'>
                        <a href="#" id='brand' className='flex gap-2 items-center'>
                            <img className='object-cover max-w-12 max-h-12' src="src\assets\Images\Grosory_Logo.PNG" alt="GrosoryImage" />
                            <div className='flex flex-col text-start'>
                                <span className='font-quicksand-w700 text-lg font-medium font-display text-green-600'>Groceyilsh</span>
                                <span className='font-quicksand-w600 text-sm font-medium font-display text-gray-400'>GROCERY</span>
                            </div>
                        </a>
                    </div>

                    {/* Serch Bar */}
                    <div className='items-center space-x-0 flex-grow mx-8 hidden md:flex '>
                        <div className="relative">
                            <select name="" id="" className="font-quicksand-w400 border border-gray-300 rounded-l-md py-2 px-4 bg-white text-gray-700">
                                <option value="">
                                    All Categories
                                </option>
                            </select>
                        </div>
                        <input className="font-quicksand-w600 border border-gray-300 py-2 px-4 w-96 flex-grow" placeholder="Search for items..." type="text" />
                        <button className="bg-green-500 text-white py-2 px-4 rounded-none w-20">
                            <i className="fas fa-search">
                            </i>
                        </button>
                    </div>

                    {/* Info items */}
                    <div className={`md:flex ${margintop} md:mt-0 duration-500`}>
                        <ul className='items-start flex mt-8 md:mt-0 flex-col gap-8 space-y-3 md:flex-row md:items-center md:space-x-[5vh]'>
                            {/* Wish list */}
                            <li className='-mx-20 md:mx-0 px-[3vh] whitespace-nowrap'>
                                <i className="fas fa-heart text-gray-600">
                                </i>
                                <span className="font-quicksand-w500 text-gray-600 px-1">
                                    Wishlist
                                </span>
                                <span className="font-quicksand-w600 mx-[10px] my-[-29px] absolute bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    5
                                </span>
                            </li>

                            {/* Cart */}
                            <li className='-mx-28 md:mx-0 flex items-center px-[1vh] whitespace-nowrap mr-[3vh]' >
                                <i className="fas fa-shopping-cart text-gray-600">
                                </i>
                                <div className="flex  text-center">
                                    <span className='font-quicksand-w500 text-gray-600 px-1'>
                                        My Cart
                                    </span>
                                    <span className='font-quicksand-w500 text-green-500 mx-[-69%]'>
                                        <br />$21
                                    </span>
                                    <span className="font-quicksand-w500 mx-[-9px] absolute bg-green-500 text-white text-xs rounded-full w-4 h-4 flex justify-center">
                                        1
                                    </span>
                                </div>
                                <i className='ml-[-55px] mt-[23px] fas fa-chevron-down text-gray-600'></i>
                            </li>

                            {/* Profile */}
                            <li className='flex items-center flex-shrink-0'>
                                <img alt="Profile picture of Ramzi Cherif" className="w-10 h-10 rounded-full" height="40" src="https://storage.googleapis.com/a1aa/image/aHk9lAvYIxZ9NVuCqukqLQLVuZVlTuSxjBob7Z4K5ACEs15E.jpg" width="40" />
                                <span className="font-quicksand-w700 text-gray-600 hidden sm:flex">
                                    Ramzi Cherif
                                </span>
                                <i className='ml-2 mt-1 fas fa-chevron-down text-gray-600'></i>
                            </li>
                        </ul>
                    </div>

                    <div className='flex md:hidden'>
                        <button className='text-3xl mr-[3vw]' onClick={navToggler}>
                            <ion-icon className="cursor-pointer" name="menu-outline"></ion-icon>
                        </button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default TopNavbar1