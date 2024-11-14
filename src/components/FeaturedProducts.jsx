import React from 'react'

function FeaturedProducts() {
    return (
        <>
            <div className="h-auto mt-9 p-10 bg-white">

                {/* Heading Section */}
                <div className="h-2 pl-14 flex justify-between">
                    <p className='font-quicksand-w600 text-2xl'>Featured Products</p>
                    <div className="h-4 font-quicksand-w500 flex gap-x-5 mr-14">
                        <p>All</p>
                        <p className='text-green-600'>Vegetables</p>
                        <p>Fruits</p>
                        <p>Coffe & Teas</p>
                        <p>Meat</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex py-12'>
                    <p className='bg-gray-200 px-2 py-1 m-auto rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></p>

                    {/* Cards */}
                    <div className='border-2 border-solid border-gray-200 h-auto w-64 rounded-lg mx-4'>
                        <img src="/src/assets/Images/Feat-Redis.png" alt="" />
                        <p className='font-quicksand-w300 text-lg text-gray-400 ml-2'>Vegetables</p>
                        <p className='font-quicksand-w500 text-2xl ml-2'>Redish 500g</p>
                        <div className="flex ml-2">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <p className='font-quicksand-w300 text-sm'>(4)</p>
                        </div>
                        <div className="flex ml-2">
                            <p className='font-quicksand-w400 text-lg'>By</p>
                            <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
                        </div>

                        <div className="flex justify-between">
                            <dic className="flex ml-2 gap-2">
                                <p className='font-quicksand-w600 text-2xl text-green-600 my-auto'>$2</p>
                                <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$3.99</p>
                            </dic>

                            <button className='bg-green-100 flex rounded-sm mr-2 mb-2'>
                                <i className="fas fa-shopping-cart text-green-600 my-auto mx-1 "></i>
                                <p className='font-quicksand-w400 text-xl text-green-700 mx-1'>Add</p>
                            </button>
                        </div>
                    </div>


                    <div className='border-2 border-solid border-gray-200 h-auto w-64 rounded-lg mx-4'>
                        <img src="/src/assets/Images/Feat-Patato.png" alt="" />
                        <p className='font-quicksand-w300 text-lg text-gray-400 ml-2'>Vegetables</p>
                        <p className='font-quicksand-w500 text-2xl ml-2'>Potatos 1kg</p>
                        <div className="flex ml-2">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <p className='font-quicksand-w300 text-sm'>(4)</p>
                        </div>
                        <div className="flex ml-2">
                            <p className='font-quicksand-w400 text-lg'>By</p>
                            <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex ml-2 gap-2">
                                <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$1</p>
                                <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$1.99</p>
                            </div>

                            <button className='bg-green-100 flex rounded-sm mr-2 mb-2'>
                                <i className="fas fa-shopping-cart text-green-600 my-auto mx-1 "></i>
                                <p className='font-quicksand-w400 text-xl text-green-700 mx-1'>Add</p>
                            </button>
                        </div>
                    </div>


                    <div className='border-2 border-solid border-gray-200 h-auto w-64 rounded-lg mx-4'>
                        <img src="/src/assets/Images/Feat-Tamato.png" alt="" />
                        <p className='font-quicksand-w300 text-lg text-gray-400 ml-2'>Fruits</p>
                        <p className='font-quicksand-w500 text-2xl ml-2'>Tomatos 200g</p>
                        <div className="flex ml-2">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <p className='font-quicksand-w300 text-sm'>(4)</p>
                        </div>
                        <div className="flex ml-2">
                            <p className='font-quicksand-w400 text-lg'>By</p>
                            <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
                        </div>

                        <div className="flex justify-between">
                            <dic className="flex ml-2 gap-2">
                                <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$0.30</p>
                                <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$0.99</p>
                            </dic>

                            <button className='bg-green-100 flex rounded-sm mr-2 mb-2'>
                                <i className="fas fa-shopping-cart text-green-600 my-auto mx-1 "></i>
                                <p className='font-quicksand-w400 text-xl text-green-700 mx-1'>Add</p>
                            </button>
                        </div>
                    </div>

                    <div className='border-2 border-solid border-gray-200 h-auto w-64 rounded-lg mx-4'>
                        <img src="/src/assets/Images/Feat-Brocoly.png" alt="" />
                        <p className='font-quicksand-w300 text-lg text-gray-400 ml-2'>Vegetables</p>
                        <p className='font-quicksand-w500 text-2xl ml-2'>Broccoli 1Kg</p>
                        <div className="flex ml-2">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <p className='font-quicksand-w300 text-sm'>(4)</p>
                        </div>
                        <div className="flex ml-2">
                            <p className='font-quicksand-w400 text-lg'>By</p>
                            <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
                        </div>

                        <div className="flex justify-between">
                            <dic className="flex ml-2 gap-2">
                                <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$1.50</p>
                                <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$2.99</p>
                            </dic>

                            <button className='bg-green-100 flex rounded-sm mr-2 mb-2'>
                                <i className="fas fa-shopping-cart text-green-600 my-auto mx-1 "></i>
                                <p className='font-quicksand-w400 text-xl text-green-700 mx-1'>Add</p>
                            </button>
                        </div>
                    </div>

                    <div className='border-2 border-solid border-gray-200 h-auto w-64 rounded-lg mx-4'>
                        <img src="/src/assets/Images/Feat-GreenBeans.png" alt="" />
                        <p className='font-quicksand-w300 text-lg text-gray-400 ml-2'>Vegetables</p>
                        <p className='font-quicksand-w500 text-2xl ml-2'>Green Beans 250g</p>
                        <div className="flex ml-2">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <p className='font-quicksand-w300 text-sm'>(4)</p>
                        </div>
                        <div className="flex ml-2">
                            <p className='font-quicksand-w400 text-lg'>By</p>
                            <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
                        </div>

                        <div className="flex justify-between">
                            <dic className="flex ml-2 gap-2">
                                <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$1</p>
                                <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$1.99</p>
                            </dic>

                            <button className='bg-green-100 flex rounded-sm mr-2 mb-2'>
                                <i className="fas fa-shopping-cart text-green-600 my-auto mx-1 "></i>
                                <p className='font-quicksand-w400 text-xl text-green-700 mx-1'>Add</p>
                            </button>
                        </div>
                    </div>



                    <p className='bg-gray-200 px-2 py-1 m-auto rounded-full' ><i className="fas fa-arrow-right text-gray-600"></i></p>
                </div>


                {/* Advartise / Offer Section */}
                <div className="flex gap-x-[3vw] mt-10">

                    <div className='h-96 w-[42%] ml-[4%] bg-[#FFF5E1D9] overflow-hidden relative rounded-sm'>
                        <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />
                        <img src="src\assets\Images\adv-one.png" className='absolute transform top-[50%] left-[83%] -translate-x-1/2 -translate-y-1/2 h-[99%] w-[75%]' alt="" />
                        <div className='absolute transform top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 h-[80%] w-[65%]'>
                            <button disabled className='bg-orange-400 rounded-sm font-quicksand-w500 text-white p-1'>Free delevery</button>
                            <p className='font-quicksand-w600 text-xl text-gray-700 mt-4'>Free Delevery Over 50$</p>
                            <p className='font-quicksand-w400 text-sm text-gray-500 py-2'>Shop $50 product and get free delevery any where.</p>
                            <button className='font-quicksand-w600 text-sm bg-green-500 p-2 rounded-sm text-white mt-[22%]'>Shope Now <i className="fas fa-arrow-right text-white my-auto mx-1 "></i></button>
                        </div>
                    </div>

                    <div className='h-96 w-[42%] ml-12 bg-[#D2EFE1D9] overflow-hidden relative rounded-sm'>
                        <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />
                        <img src="src\assets\Images\adv-two.png" className='absolute transform top-[58%] left-[63%] -translate-x-1/2 -translate-y-1/2 h-[85%] w-[75%]' alt="" />
                        <div className='absolute transform top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 h-[80%] w-[65%]'>
                            <button disabled className='bg-green-400 rounded-sm font-quicksand-w500 text-white p-1 py-[1px]'>60% Off</button>
                            <p className='font-quicksand-w600 text-xl text-gray-700 mt-4'>Organic Food</p>
                            <p className='font-quicksand-w400 text-sm text-gray-500 py-2'>Save up to 60% off on your first order</p>
                            <button className='font-quicksand-w600 text-sm bg-green-500 p-2 rounded-sm text-white mt-[22%]'>Order Now <i className="fas fa-arrow-right text-white my-auto mx-1 "></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts