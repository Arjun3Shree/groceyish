import React from 'react'
import Group1 from "/Assets/Img/Group1.png";
import Group2 from "/Assets/Img/Group2.png";
import Group3 from "/Assets/Img/Group3.png";

function FeaturesSection() {
  return (
    <>
        <div className="sm:ml-[35%] md:ml-0 md:justify-center md:flex bg-white mt-24 mb-10 md:gap-[19%]">
            <div className="flex w-64">
                <img className='h-12 w-12 my-auto' src={Group1} alt="" />
                <div className="flex-col ml-3">
                    <p className='font-quicksand-w600'>Best Price & Deals</p>
                    <p className='font-quicksand-w400 text-sm'>Don't miss our daily amazing deals and price</p>
                </div>
            </div>

            <div className="flex w-64">
                <img className='h-12 w-12 my-auto' src={Group2} alt="" />
                <div className="flex-col ml-3">
                    <p className='font-quicksand-w600'>Refaundable</p>
                    <p className='font-quicksand-w400 text-sm'>If your item have damage we aggre to refund it</p>
                </div>
            </div>

            <div className="flex w-64">
                <img className='h-12 w-12 my-auto' src={Group3} alt="" />
                <div className="flex-col ml-3">
                    <p className='font-quicksand-w600'>Best Price & Deals</p>
                    <p className='font-quicksand-w400 text-sm'>Don't miss our daily amazing deals and price</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeaturesSection