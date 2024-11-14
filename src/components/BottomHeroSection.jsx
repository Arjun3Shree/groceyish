import React from 'react'

function BottomHeroSection() {
    return (
        <>
            <div className="relative w-full h-[180px] md:h-[80vh] bg-customGreen overflow-hidden mt-24">
                {/* Background Image */}
                <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />

                {/* Foreground Image */}
                <img src="src\assets\Images\Bottom-Hero-Phone2.png" className='absolute transform top-[49%] left-[88%] -translate-x-1/2 -translate-y-1/2 h-[89%] w-[18%] rounded-3xl' alt="" />
                <img src="src\assets\Images\Bottom-Hero-Phone1.png" className='absolute transform top-[51%] left-[70%] -translate-x-1/2 -translate-y-1/2 h-[88%] w-[18%] rounded-3xl -rotate-[10deg]' alt="" />

                {/* Text anounce section */}
                <h4 className='font-quicksand-w700 absolute transform top-[40%] left-[75%] -translate-x-1/2 -translate-y-1/2 h-[50%] w-[130%] md:text-6xl text-blue-950'>Shop Faster With <br /> Groceyish App.</h4>

                <p className='font-quicksand-w600 absolute transform top-[85%] md:top-[65%] left-[75%] -translate-x-1/2 -translate-y-1/2 h-[50%] w-[130%] text-sm md:text-2xl text-gray-500' >Available on both IOS & Android</p>

                {/* Subscribre Section*/}
                <div className='absolute transform top-[60%] left-[10%] flex gap-1'>
                    <img className='h-[260px] w-[300px]' src="src\assets\Images\Bottom-Hero-Applstore.png" alt="" />
                    <img className='h-[120px] w-[350px] mt-[70px]' src="src\assets\Images\Bottom-Hero-Andro.png" alt="" />   
                </div>
            </div>
        </>
    )
}

export default BottomHeroSection