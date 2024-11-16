import React from 'react'
import ProgressBar from '../ProgressBar'

function CardTrendingSection({itemName, rating, offerPrice, mrp, imageName}) {
    return (
        <>
            <div className="flex mt-8">
                <img className='h-[7vw] w-[7vw] min-h-24 min-w-24 bg-[#F4F6FA]' src={`/src/assets/Images/${imageName}.png`} alt="Orange" />
                <div className='flex-col ml-2 -mt-1'>
                    <p className='font-quicksand-w500 text-blue-950 text-lg -mb-1 mt-2'>{itemName}</p>

                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                    <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                    <i className="fas fa-star text-yellow-400 text-xs ml-0.5"></i>
                    <i className="fas fa-star text-gray-300 text-xs ml-0.5">&nbsp; ({rating})</i>

                    <div className="flex gap-2 mt-[1.2vw]">
                        <p className='font-quicksand-w600 text-lg text-green-400'>${offerPrice}</p>
                        <p className='font-quicksand-w400 text-sm line-through text-gray-400 my-auto'>${mrp}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTrendingSection