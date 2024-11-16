import React from 'react'

function CardFeatProducts({category, itemName, rating, vender, offerPrice, mrp, imgName}) {
    return (
        <>
            <div className='border-2 border-solid border-gray-200 h-auto w-64 rounded-lg mx-4'>
                <img src={`/src/assets/Images/${imgName}.png`} alt="" />
                <p className='font-quicksand-w300 text-lg text-gray-400 ml-2'>{category}</p>
                <p className='font-quicksand-w500 text-2xl ml-2'>{itemName}</p>
                <div className="flex ml-2">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <p className='font-quicksand-w300 text-sm'>({rating})</p>
                </div>
                <div className="flex ml-2">
                    <p className='font-quicksand-w400 text-lg'>By</p>
                    <p className='font-quicksand-w400 text-lg text-green-500'>&nbsp; {vender}</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex ml-2 gap-2">
                        <p className='font-quicksand-w600 text-2xl text-green-400 my-auto'>${offerPrice}</p>
                        <p className='font-quicksand-w400 text-xl line-through text-gray-400 my-auto'>${mrp}</p>
                    </div>

                    <button className='bg-green-100 flex rounded-sm mr-2 mb-2'>
                        <i className="fas fa-shopping-cart text-green-600 my-auto mx-1 "></i>
                        <p className='font-quicksand-w400 text-xl text-green-700 mx-1'>Add</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardFeatProducts