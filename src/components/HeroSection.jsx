import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../App.css'

function HeroSection() {


    return (

        <>

            <div className="relative w-full h-[180px] md:h-[460px] bg-customGreen overflow-hidden">
                {/* Background Image */}
                <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />

                {/* Foreground Image */}
                <img src="src\assets\Images\hero-ban-img.png" className='absolute transform top-[49%] left-[75%] -translate-x-1/2 -translate-y-1/2 h-[98%] w-[50%]' alt="" />

                {/* Text anounce section */}
                <h4 className='font-quicksand-w700 absolute transform top-[40%] left-[75%] -translate-x-1/2 -translate-y-1/2 h-[50%] w-[130%] md:text-4xl text-blue-950'>Don't miss our daily <br /> amazing deals.</h4>

                <p className='font-quicksand-w600 absolute transform top-[85%] md:top-[62%] left-[75%] -translate-x-1/2 -translate-y-1/2 h-[50%] w-[130%] text-sm md:text-lg text-gray-500' >Save up to 60% off on your first order</p>

                {/* Subscribre Section*/}
                <div className='absolute transform top-[60%] left-[10%] flex'>
                    <div className='bg-white h-11 w-11 text-center pt-3'>
                        <i className="fas fa-paper-plane text-gray-500"></i>
                    </div>

                    <input className="font-quicksand-w400 border border-gray-50 py-2 px-4 w-72 flex-grow" placeholder="Enter your email address" type="text" />
                    <button className="bg-green-500 text-white py-2 px-1 rounded-none w-20">
                        <p className="font-quicksand-w500 text-start">Subscribe</p>
                    </button>
                </div>
            </div>

        </>

    )
}

export default HeroSection