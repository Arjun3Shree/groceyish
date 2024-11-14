import React from 'react'
import ProgressBar from './ProgressBar'

function TrendingSection() {
  return (
    <>
        <div className="flex bg-white mt-12 gap-[4%]">
            {/* Column Card */}
            <div className="flex-col ml-[8%]">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Top Sells</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}
                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Orange.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Vegitables.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Strawbery.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* Column Card - 2 */}
            <div className="flex-col ml-20">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Top Rated</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}
                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Orange.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Vegitables.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Apple.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* Column Card - 3 */}
            <div className="flex-col ml-20">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Trending Items</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}
                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Carrot.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Pattato.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Apple.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

            </div>



            {/* Column Card - 4 */}
            <div className="flex-col ml-20">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Recently Added</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}
                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Apple.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Carrot.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8">
                    <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src="/src/assets/Images/Ctg-Strawbery.png" alt="Orange" />
                    <div className='flex-col ml-2 -mt-1'>
                        <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>Orange 1kg</p>

                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                        <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; (4)</i>

                        <div className="flex gap-2 mt-[1.2vw]">
                            <p className='font-quicksand-w600 text-lg text-green-400'>$2</p>
                            <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>$3.99</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default TrendingSection