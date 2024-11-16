import React from 'react'
import ExploreCategoties from './Cards/ExploreCategoties'

function Categories() {

    let cardDetails = {
        1: {colorCode:'#FEEFEA', imgName:'Ctg-Peach', itemName:'Peach', noOfItem:'20'},
        2: {colorCode:'#FFF3FF', imgName:'Ctg-Vegitables', itemName:'Vegetables', noOfItem:'220'},
        3: {colorCode:'#F2FCE4', imgName:'Ctg-Strawbery', itemName:'Strawberry', noOfItem:'10'},
        4: {colorCode:'#FEEFEA', imgName:'Ctg-Apple', itemName:'Apple', noOfItem:'40'},
        5: {colorCode:'#ECFFEC', imgName:'Ctg-Orange', itemName:'Orange', noOfItem:'23'},
        6: {colorCode:'#FFFCEB', imgName:'Ctg-Pattato', itemName:'Patato', noOfItem:'3'},
        7: {colorCode:'#DEF9EC', imgName:'Ctg-Carrot', itemName:'Carrot', noOfItem:'9'}
    }

    return (
        <>
            <div className="h-auto mt-9 p-10 bg-white">

                {/* Heading Section */}
                <div className="h-2 pl-14 flex justify-between">
                    <p className='font-quicksand-w500 text-2xl'>Explore Categories</p>
                    <div className="h-4 font-quicksand-w500 flex gap-x-5 mr-14">
                        <p className='font-quicksand-w600 text-green-600' >All</p>
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
                    {/* Call through Props */}

                    {
                        Object.values(cardDetails).map((card, index)=>(
                            <ExploreCategoties
                            key={index}
                            colorCode={card.colorCode}
                            imgName={card.imgName}
                            itemName={card.itemName}
                            noOfItem={card.noOfItem}
                            />
                        ))
                    }

                    <p className='bg-gray-200 px-2 py-1 mt-12 rounded-full' ><i className="fas fa-arrow-right text-gray-600"></i></p>
                </div>
            </div>
        </>
    )
}

export default Categories