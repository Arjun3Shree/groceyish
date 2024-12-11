import React from 'react'

function CardNewProducts({colorBorder, imgName, colorProductName, productName, colorDesc, descText, quanTiy, colorPrice, price}) {
    return (
        <>
            {/* Card */}
            <div className="flex text-left">
                <div className={`h-[23rem] w-[17rem] border-[2px] border-[${colorBorder}] shadow-xl drop-shadow-xl flex flex-col`}>
                    <img className='h-[12rem] w-full' src={`src/assets/newPrdImages/${imgName}`} alt="No Img Available" />

                    <div className="ml-2 flex-grow">
                        <p className={`font-quicksand-w600 text-xl text-[${colorProductName}]`}>{productName}</p>
                        <p className={`font-quicksand-w500 text-lg text-[${colorDesc}]`} > {descText} <strong>{quanTiy}</strong></p>

                        <p className={`text-[${colorPrice}] font-quicksand-w500 text-xl text-center mt-5`}>{price}</p>
                    </div>
                    <button className={`h-11 bg-[${colorPrice}] font-quicksand-w700 text-white w-full`}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default CardNewProducts