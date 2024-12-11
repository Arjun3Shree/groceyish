import React from 'react'

function FeaturesSection() {
  return (
    <>
        <div className="sm:ml-[35%] md:ml-0 md:justify-center md:flex bg-white mt-24 mb-10 md:gap-[19%]">
            <div className="flex w-64">
                <img className='h-12 w-12 my-auto' src="src\assets\Images\Group1.png" alt="" />
                <div className="flex-col ml-3">
                    <p className='font-quicksand-w600'>Best Price & Deals</p>
                    <p className='font-quicksand-w400 text-sm'>Don't miss our daily amazing deals and price</p>
                </div>
            </div>

            <div className="flex w-64">
                <img className='h-12 w-12 my-auto' src="src\assets\Images\Group2.png" alt="" />
                <div className="flex-col ml-3">
                    <p className='font-quicksand-w600'>Refaundable</p>
                    <p className='font-quicksand-w400 text-sm'>If your item have damage we aggre to refund it</p>
                </div>
            </div>

            <div className="flex w-64">
                <img className='h-12 w-12 my-auto' src="src\assets\Images\Group3.png" alt="" />
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