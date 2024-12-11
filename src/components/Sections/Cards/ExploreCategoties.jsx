import React from 'react'

function ExploreCategoties({colorCode, imgName, itemName, noOfItem}) {
    
    return (
        <>
            <div className="h-4 text-center">
                <div className={`w-32 h-36 rounded bg-[${colorCode}]`}>
                    <img className='h-24 w-24 mx-auto' src={`/src/assets/Images/${imgName}.png`} alt="Peach-Img" />
                    <p className="font-quicksand-w600 text-lg" >{itemName}</p>
                    <p className="font-quicksand-w400 text-sm" >{noOfItem} Items</p>
                </div>
            </div>
        </>
    )
}

export default ExploreCategoties