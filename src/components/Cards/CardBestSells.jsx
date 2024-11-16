import React from 'react'
import ProgressBar from '../ProgressBar'

function CardBestSells({ category, itemName, rating, vender, offerPrice, mrp, sold, totalAvailabe, imgName }) {
  return (
    <>
      <div className='border-2 border-solid border-gray-200 h-auto w-60 mx-4'>
        <img className='w-full' src={`/src/assets/Images/${imgName}.png`} alt="Coffe" />

        <p className='font-quicksand-w400 text-sm text-gray-700 ml-4'>{category}</p>
        <p className='font-quicksand-w600 text-xl text-black ml-4' >{itemName}</p>
        <i className="fas fa-star text-yellow-400 ml-4"></i>
        <i className="fas fa-star text-yellow-400"></i>
        <i className="fas fa-star text-yellow-400"></i>
        <i className="fas fa-star text-yellow-400"></i>
        <i className="fas fa-star text-gray-300">({rating})</i>
        <div className="flex ml-4">
          <p className='font-quicksand-w400 text-lg'>By</p>
          <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; {vender}</p>
        </div>
        <div className="flex gap-2 ml-4">
          <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>${offerPrice}</p>
          <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>${mrp}</p>
        </div>
        <div className='flex-col my-3 border-orange-500 mx-4'>
          <ProgressBar height={1.5} value={sold} max={totalAvailabe} color="green" />
          <p className="font-quicksand-w400">Sold: {sold}/{totalAvailabe}</p>

          <button className='bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
            <i className="fas fa-shopping-cart text-white my-auto mx-1 "></i>
            <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Add To Cart</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default CardBestSells
