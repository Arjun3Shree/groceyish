import React from 'react'

function Categories() {
    return (
        <>
            <div className="h-auto mt-9 p-10 bg-white">

                {/* Heading Section */}
                <div className="h-2 pl-14 flex justify-between">
                    <p className='font-quicksand-w500 text-2xl'>Explore Categories</p>
                    <div className="h-4 font-quicksand-w500 flex gap-x-5 mr-14">
                        <p>All</p>
                        <p>Vegetables</p>
                        <p>Fruits</p>
                        <p>Coffe & Teas</p>
                        <p>Meat</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex py-14 justify-between '>
                    <p className='bg-gray-200 px-2 py-1 mt-12 rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></p>

                    {/* Cards */}
                    <div className="h-4 text-center">
                        <div className='w-32 h-36 rounded bg-[#FEEFEA]'>
                            <img className='h-24 w-24 mx-auto' src="/src/assets/Images/Ctg-Peach.png" alt="Peach-Img" />
                            <p className="font-quicksand-w600 text-lg" >Peach</p>
                            <p className="font-quicksand-w400 text-sm" >20 Items</p>
                        </div>
                    </div>

                    <div className="h-4 text-center">
                        <div className='w-32 h-36 rounded bg-[#FFF3FF]'>
                        <img className='h-24 w-24 mx-auto' src="/src/assets/Images/Ctg-Vegitables.png" alt="Peach-Img" />
                            <p className="font-quicksand-w600 text-lg" >Vegetables</p>
                            <p className="font-quicksand-w400 text-sm" >220 Items</p>
                        </div>
                    </div>

                    <div className="h-4 text-center">
                        <div className='w-32 h-36 rounded bg-[#F2FCE4]'>
                        <img className='h-24 w-24 mx-auto' src="/src/assets/Images/Ctg-Strawbery.png" alt="Peach-Img" />
                            <p className="font-quicksand-w600 text-lg" >Strawberry</p>
                            <p className="font-quicksand-w400 text-sm" >10 Items</p>
                        </div>
                    </div>

                    <div className="h-4 text-center">
                        <div className='w-32 h-36 rounded bg-[#FEEFEA]'>
                        <img className='h-24 w-24 mx-auto' src="/src/assets/Images/Ctg-Apple.png" alt="Peach-Img" />
                            <p className="font-quicksand-w600 text-lg" >Apple</p>
                            <p className="font-quicksand-w400 text-sm" >40 Items</p>
                        </div>
                    </div>

                    <div className="h-4 text-center">
                        <div className='w-32 h-36 rounded bg-[#ECFFEC]'>
                        <img className='h-24 w-24 mx-auto' src="/src/assets/Images/Ctg-Orange.png" alt="Peach-Img" />
                            <p className="font-quicksand-w600 text-lg" >Orange</p>
                            <p className="font-quicksand-w400 text-sm" >23 Items</p>
                        </div>
                    </div>

                    <div className="h-4 text-center">
                        <div className='w-32 h-36 rounded bg-[#FFFCEB]'>
                        <img className='h-24 w-24 mx-auto' src="/src/assets/Images/Ctg-Pattato.png" alt="Peach-Img" />
                            <p className="font-quicksand-w600 text-lg" >Patato</p>
                            <p className="font-quicksand-w400 text-sm" >3 Items</p>
                            
                        </div>
                    </div>

                    <div className="h-4 text-center">
                        <div className='w-32 h-36 rounded bg-[#DEF9EC]'>
                        <img className='h-24 w-24 mx-auto' src="/src/assets/Images/Ctg-Carrot.png" alt="Peach-Img" />
                            <p className="font-quicksand-w600 text-lg" >Carrot</p>
                            <p className="font-quicksand-w400 text-sm" >9 Items</p>
                        </div>
                    </div>

                    <p className='bg-gray-200 px-2 py-1 mt-12 rounded-full' ><i className="fas fa-arrow-right text-gray-600"></i></p>
                </div>
            </div>
        </>
    )
}

export default Categories