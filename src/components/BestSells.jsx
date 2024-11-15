import React from 'react'
import ProgressBar from './ProgressBar'

function BestSail() {
  return (
    <>
      <div className='bg-white'>
        {/* Bar Section */}
        <div className="flex bg-white justify-between mt-4">

          <div className="flex mx-20 gap-[2vw]">
            <p className='text-3xl mx-3 font-quicksand-w600'>Daily Best Sells</p>
            <p className='text-lg mx-3 my-2 font-quicksand-w500'>Featured</p>
            <p className='text-lg mx-3 my-2 font-quicksand-w500'>Popular</p>
            <p className='text-lg mx-3 my-2 font-quicksand-w500'>New</p>
            <button className='bg-[#F35244] rounded-sm px-2 text-white text-lg font-quicksand-w400' disabled>&nbsp;Expires In: &nbsp; 10 : 56 : 21 &nbsp;</button>
          </div>

          <div className='flex mr-[6vw] gap-7'>
            <p className='bg-gray-200 px-[15px] py-[9px] rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></p>
            <p className='bg-gray-200 px-[15px] py-[9px] rounded-full' ><i className="fas fa-arrow-right text-gray-600"></i></p>
          </div>

        </div>

        {/* Item Section */}
        <div className="flex mt-16 gap-[1%]">

          {/* Cards */}
          <div className='border-2 border-solid border-gray-200 h-auto w-60 ml-20 mx-4'>
            <img className='w-full' src="/src/assets/Images/Bestsell-coffe.png" alt="Coffe" />

            <p className='font-quicksand-w400 text-sm text-gray-700 ml-4'>Coffe & teas</p>
            <p className='font-quicksand-w600 text-xl text-black ml-4' >Coffe 1Kg</p>
            <i className="fas fa-star text-yellow-400 ml-4"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-gray-300"></i>
            <div className="flex ml-4">
              <p className='font-quicksand-w400 text-lg'>By</p>
              <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
            </div>
            <div className="flex gap-2 ml-4">
              <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$20</p>
              <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$25</p>
            </div>
            <div className='flex-col my-3 border-orange-500 mx-4'>
              <ProgressBar height={1.5} value={20} max={50} color="green" />
              <p className="font-quicksand-w400">Sold: 20/50</p>

              <button className='bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
                <i className="fas fa-shopping-cart text-white my-auto mx-1 "></i>
                <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Add To Cart</p>
              </button>
            </div>
          </div>



          {/* Card-2 */}
          <div className='border-2 border-solid border-gray-200 h-auto w-60 ml-4 mx-4'>
            <img className='w-full' src="/src/assets/Images/Bestsell-halal-sausage.png" alt="Coffe" />

            <p className='font-quicksand-w400 text-sm text-gray-700 ml-4'>Meat</p>
            <p className='font-quicksand-w600 text-xl text-black ml-4' >Hala Sausage 350g</p>
            <i className="fas fa-star text-yellow-400 ml-4"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-gray-300"></i>
            <div className="flex ml-4">
              <p className='font-quicksand-w400 text-lg'>By</p>
              <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
            </div>
            <div className="flex gap-2 ml-4">
              <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$4</p>
              <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$10</p>
            </div>
            <div className='flex-col my-3 border-orange-500 mx-4'>
              <ProgressBar height={1.5} value={7} max={20} color="green" />
              <p className="font-quicksand-w400">Sold: 7/20</p>

              <button className='bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
                <i className="fas fa-shopping-cart text-white my-auto mx-1 "></i>
                <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Add To Cart</p>
              </button>
            </div>
          </div>


          {/* Card-3 */}
          <div className='border-2 border-solid border-gray-200 h-auto w-60 ml-4 mx-4'>
            <img className='w-full' src="/src/assets/Images/Bestsell-green-tea.png" alt="Coffe" />

            <p className='font-quicksand-w400 text-sm text-gray-700 ml-4'>Coffe & teas</p>
            <p className='font-quicksand-w600 text-xl text-black ml-4' >Green Tea 250g</p>
            <i className="fas fa-star text-yellow-400 ml-4"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-gray-300"></i>
            <div className="flex ml-4">
              <p className='font-quicksand-w400 text-lg'>By</p>
              <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
            </div>
            <div className="flex gap-2 ml-4">
              <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$3</p>
              <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$7</p>
            </div>
            <div className='flex-col my-3 border-orange-500 mx-4'>
              <ProgressBar height={1.5} value={32} max={50} color="green" />
              <p className="font-quicksand-w400">Sold: 32/50</p>

              <button className='bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
                <i className="fas fa-shopping-cart text-white my-auto mx-1 "></i>
                <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Add To Cart</p>
              </button>
            </div>
          </div>



          {/* Card-4 */}
          <div className='border-2 border-solid border-gray-200 h-auto w-60 ml-4 mx-4'>
            <img className='w-full' src="/src/assets/Images/Bestsell-onion.png" alt="Coffe" />

            <p className='font-quicksand-w400 text-sm text-gray-700 ml-4'>Vegetables</p>
            <p className='font-quicksand-w600 text-xl text-black ml-4' >Onion 1Kg</p>
            <i className="fas fa-star text-yellow-400 ml-4"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-yellow-400"></i>
            <i className="fas fa-star text-gray-300"></i>
            <div className="flex ml-4">
              <p className='font-quicksand-w400 text-lg'>By</p>
              <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; Mr.food</p>
            </div>
            <div className="flex gap-2 ml-4">
              <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>$0.50</p>
              <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>$2</p>
            </div>
            <div className='flex-col my-3 border-orange-500 mx-4'>
              <ProgressBar height={1.5} value={2} max={10} color="green" />
              <p className="font-quicksand-w400">Sold: 20/50</p>

              <button className='bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
                <i className="fas fa-shopping-cart text-white my-auto mx-1 "></i>
                <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Add To Cart</p>
              </button>
            </div>
          </div>

          {/*Login-Register Card  */}

          <div className='relative border-2 border-solid border-gray-200 h-auto w-72 ml-2 mx-4 bg-[#FFF7E6CC]'>
          <img className='w-full h-full opacity-15' src="/src/assets/Images/bg-hero-img.png" alt="Coffe" />
          <p className='absolute transform font-quicksand-w700 text-5xl text-blue-950 -translate-x-1/2 -translate-y-1/2 top-[12%] left-[52%] h-[10%] w-[70%]'>10% OFF</p>
          <p className='absolute transform font-quicksand-w500 text-xl text-center text-blue-950 -translate-x-1/2 -translate-y-1/2 top-32 left-36 h-[10%] w-[90%]'>For new member sign up at the first time</p>

          {/* Email Input */}
          <p className='absolute transform font-quicksand-w500 text-lg -translate-x-1/2 -translate-y-1/2 top-[46%] left-[48%] h-[10%] w-[90%]'>Email address</p>
          <i className="fas fa-envelope text-blue-950 my-auto absolute transform -translate-x-1/2 -translate-y-1/2 top-[52%] left-[10%] p-3 bg-white"></i>
          <input className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[52%] left-[54%] h-[8%] w-[75%] pl-2'  type="text" placeholder='john@gmail.com' />

           {/* Password */}
           <p className='absolute transform font-quicksand-w500 text-lg -translate-x-1/2 -translate-y-1/2 top-[63%] left-[48%] h-[10%] w-[90%]'>Password</p>
          <i className="fas fa-key text-blue-950 my-auto absolute transform -translate-x-1/2 -translate-y-1/2 top-[68%] left-[10%] p-3 bg-white"></i>
           <input className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[68%] left-[54%] h-[8%] w-[75%] pl-2'  type="text" placeholder='Password' />

           <button className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[88%] left-[50%]  bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
            <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Register Now</p>
          </button>


          </div>



        </div>

      </div>

    </>
  )
}

export default BestSail

// 1514