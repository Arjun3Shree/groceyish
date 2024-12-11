import React from 'react'
import ProgressBar from './ProgressBar'
import CardTrendingSection from './Cards/CardTrendingSection'

function TrendingSection() {
    let topSells = {
        1:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Col1-Item1-orange'},
        2:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Col1-Item2-orange'},
        3:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Col1-Item3-orange'}

    }

    let topRated = {
        1:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Ctg-Peach'},
        2:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Col1-Item2-orange'},
        3:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Ctg-Apple'}

    }

    let trendingItems = {
        1:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Ctg-Carrot'},
        2:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Ctg-Pattato'},
        3:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Col1-Item1-orange'}

    }

    let recentlyAdded = {
        1:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Ctg-Apple'},
        2:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Ctg-Carrot'},
        3:{itemName:'Orange 1Kg', rating:'4', offerPrice:'2', mrp:'3.99', imageName:'Col1-Item3-orange'}

    }

  return (
    <>
        <div className="sm:grid md:flex bg-white mt-12 justify-center gap-x-[9%]">
            {/* Column Card */}
            <div className="flex-col">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Top Sells</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}
                {
                    Object.values(topSells).map((card, index)=>(
                        <CardTrendingSection
                        key={index}
                        itemName={card.itemName}
                        rating={card.rating}
                        offerPrice={card.offerPrice}
                        mrp={card.mrp}
                        imageName={card.imageName}
                        />
                    ))
                }

            </div>


            {/* Column Card - 2 */}
            <div className="flex-col">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Top Rated</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}
                {
                    Object.values(topRated).map((card, index)=>(
                        <CardTrendingSection
                        key={index}
                        itemName={card.itemName}
                        rating={card.rating}
                        offerPrice={card.offerPrice}
                        mrp={card.mrp}
                        imageName={card.imageName}
                        />
                    ))
                }

            </div>


            {/* Column Card - 3 */}
            <div className="flex-col">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Trending Items</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}

                {
                    Object.values(trendingItems).map((card, index)=>(
                        <CardTrendingSection
                        key={index}
                        itemName={card.itemName}
                        rating={card.rating}
                        offerPrice={card.offerPrice}
                        mrp={card.mrp}
                        imageName={card.imageName}
                        />
                    ))
                }

            </div>



            {/* Column Card - 4 */}
            <div className="flex-col">
                {/* Heading */}
                <div className="flex-col">
                    <p className='font-quicksand-w600 text-2xl mb-3'>Recently Added</p>
                    <ProgressBar height={0.5} value={5} max={10} color="green" />
                </div>

                {/* Small Card */}
                {
                    Object.values(recentlyAdded).map((card, index)=>(
                        <CardTrendingSection
                        key={index}
                        itemName={card.itemName}
                        rating={card.rating}
                        offerPrice={card.offerPrice}
                        mrp={card.mrp}
                        imageName={card.imageName}
                        />
                    ))
                }

            </div>

        </div>
    </>
  )
}

export default TrendingSection