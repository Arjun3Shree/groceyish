import React from 'react'
import ProgressBar from './ProgressBar'

function Footer() {
    return (
        <>
            {/* Footer bar Top */}
            <div className='pt-10 mb-24 w-[90%] ml-[5%]'>
                <ProgressBar height={1} value={0} max={10} color="green" />
            </div>

            <div className="flex bg-white gap-[12%] justify-center">

                <div className="flex-col space-y-6">
                    <div className="flex">
                        <img className='h-12 w-12' src="src\assets\Images\MainLogo.png" alt="" />
                        <div className='flex-col'>
                            <p className='font-quicksand-w600 text-green-600 text-lg'>Groceyish</p>
                            <p className='text-xs'>GROCERY</p>
                        </div>
                    </div>
                    <p className='font-quicksand-w500'><i className="fas fa-map-pin text-green-600 mr-2"></i>Address: 1762 School House Road</p>
                    <p className='font-quicksand-w500' ><i className="fas fa-phone-volume text-green-600 mr-2"></i>Call Us: 1233-777</p>
                    <p className='font-quicksand-w500' ><i className="fas fa-envelope text-green-600 mr-2"></i>Email: groceyish@contact.com</p>
                    <p className='font-quicksand-w500' ><i className="fas fa-regular fa-clock text-green-600 mr-2"></i>Work hours: 8:00 - 20:00, Sunday - Thursday</p>
                </div>

                <div className="flex-col bg-white space-y-2">
                    <p className='font-quicksand-w600 text-2xl mb-8'>Account</p>
                    <p className='font-quicksand-w500'>Wishlist</p>
                    <p className='font-quicksand-w500'>Cart</p>
                    <p className='font-quicksand-w500'>Track Order</p>
                    <p className='font-quicksand-w500'>Shipping Details</p>
                </div>

                <div className="flex-col bg-white space-y-2">
                    <p className='font-quicksand-w600 text-2xl mb-8'>Useful Links</p>
                    <p className='font-quicksand-w500'>About Us</p>
                    <p className='font-quicksand-w500'>Conact</p>
                    <p className='font-quicksand-w500'>Hot deals</p>
                    <p className='font-quicksand-w500'>Promotions</p>
                    <p className='font-quicksand-w500'>New products</p>
                </div>

                <div className="flex-col bg-white space-y-2">
                    <p className='font-quicksand-w600 text-2xl mb-8'>Help Center</p>
                    <p className='font-quicksand-w500'>Payments</p>
                    <p className='font-quicksand-w500'>Refund</p>
                    <p className='font-quicksand-w500'>Checkout</p>
                    <p className='font-quicksand-w500'>Shipping</p>
                    <p className='font-quicksand-w500'>Q & A</p>
                    <p className='font-quicksand-w500'>Privacy Policy</p>
                </div>
            </div>

            {/* Footer Bar Bottom */}
            <div className='pb-10 mt-24 w-[90%] ml-[5%]'>
                <ProgressBar height={1} value={0} max={10} color="green" />
            </div>

            {/* Rights Section */}
            <div className="flex justify-between mb-7">
                <p className='ml-6'> © 2024, All rights recived</p>
                <img src="src\assets\Images\Payment-Img.png" alt="" />
                <div className="flex gap-3 mr-6">
                    <img className='h-9 w-9' src="src\assets\Images\Facebook.png" alt="" />
                    <img className='h-9 w-9' src="src\assets\Images\Linkedin.png" alt="" />
                    <img className='h-9 w-9' src="src\assets\Images\Insta.png" alt="" />
                    <img className='h-9 w-9' src="src\assets\Images\Twiter.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer

{/* <i class="fa-solid fa-location-dot"></i> */ }