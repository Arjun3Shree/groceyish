import React, { useEffect, useState, useContext } from 'react'
import NavBarContext from '../../context/NavbarContext';


function TopNavbar2() {

    const {setActiveNavbar, setHomeBtn, setHotDealsBtn, 
        setPromotionBtn, setNewproductsBtn, setSupportcenterBtn} = useContext(NavBarContext)

    let home = 'home';

    const [margintop, setMargintop] = useState('mt-[-95%]')
    const [activeButton, setActiveButton] = useState(()=>{ 
        return localStorage.getItem('activeButton') || home;
    })

    
    let hotdeals = 'hotdeals'
    let promotions = 'promotions'
    let newproducts = 'newproducts'
    let support = 'support'
    
    useEffect(()=>{
        localStorage.setItem('activeButton', activeButton);
    }, [activeButton])


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
                                <button onClick={()=> setActiveButton(home)}>
                                    <li>
                                        <a href="/" className={`flex items-center ${activeButton === 'home'? 'text-green-600':'text-gray-500'} `}>
                                            <i className="fas fa-home mr-1"></i>
                                            <span className={` ${activeButton === 'home' ? 'font-quicksand-w600':'font-quicksand-w400'}`}>Home</span>
                                        </a>
                                    </li>
                                </button>
                            </li>

                            <li>
                                <button onClick={()=> setActiveButton(hotdeals)}>
                                    <a href="/hotdeals" className={`flex items-center ${activeButton === 'hotdeals'? 'text-green-600':'text-gray-500'} whitespace-nowrap`}>
                                        <i className="fas fa-fire mr-1">
                                            <span className={` ${activeButton === 'hotdeals' ? 'font-quicksand-w600':'font-quicksand-w400'}`}> Hot deals</span>
                                        </i>
                                    </a>
                                </button>
                            </li>

                            <li>
                                <button onClick={()=> setActiveButton(promotions)}>
                                    <a href="/promotion" className={`flex items-center ${activeButton === 'promotions'? 'text-green-600':'text-gray-500'} whitespace-nowrap`}>
                                        <i className="fas fa-percent mr-1">
                                            <span className={` ${activeButton === 'promotions' ? 'font-quicksand-w600':'font-quicksand-w400'}`}> Promotions</span>
                                        </i>
                                    </a>
                                </button>
                            </li>

                            <li>
                                <button onClick={()=> setActiveButton(newproducts)}>
                                    <a href="/newprds" className={`flex items-center ${activeButton === 'newproducts'? 'text-green-600':'text-gray-500'} whitespace-nowrap`}>
                                        <i className="fas fa-bullhorn mr-1">
                                            <span className={` ${activeButton === 'newproducts' ? 'font-quicksand-w600':'font-quicksand-w400'}`} > New Products</span>
                                        </i>
                                    </a>
                                </button>
                            </li>

                            <li>
                                <button onClick={()=> setActiveButton(support)}>
                                    <a href="/support" className={`flex items-center text-gray-500 whitespace-nowrap`}>
                                        <i className={`fas fa-phone-alt ${activeButton === 'support'? 'text-red-700':'text-green-500'} mr-2`}></i>
                                        <span className={`font-quicksand-w400 ${activeButton === 'support'? 'text-red-400':'text-green-500'} `}>12333-7777</span>
                                        <span className={` ${activeButton === 'support'? 'text-green-500':'text-gray-500'} font-quicksand-w400 ml-2`}>24/7 support center</span>
                                    </a>
                                </button>
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