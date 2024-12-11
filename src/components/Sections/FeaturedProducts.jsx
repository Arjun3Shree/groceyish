import React, { useRef, useState } from 'react'
import CardFeatProducts from './Cards/CardFeatProducts'

function FeaturedProducts() {

    let cardAll = {
        1: { category: 'Vegetables', itemName: 'Redish 500g', rating: '4', vender: 'Mr.food', offerPrice: '2', mrp: '3.99', imgName: 'Feat-Redis' },
        2: { category: 'Vegetables', itemName: 'Potatos 1kg', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Patato' },
        3: { category: 'Fruits', itemName: 'Tomatos 200g', rating: '4', vender: 'Mr.food', offerPrice: '0.30', mrp: '0.99', imgName: 'Feat-Tamato' },
        4: { category: 'Vegetables', itemName: 'Broccoli 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '1.50', mrp: '2.99', imgName: 'Feat-Brocoly' },
        5: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-GreenBeans' },

        // New Item added
        6: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Tamato' },
        7: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Patato' },
        8: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Redis' },
        9: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Tamato' },
        10: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Patato' },
        11: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Redis' }
    }

    let cardVegi = {
        1: { category: 'Vegetables', itemName: 'Redish 500g', rating: '4', vender: 'Mr.food', offerPrice: '2', mrp: '3.99', imgName: 'Col1-Item1-orange' },
        2: { category: 'Vegetables', itemName: 'Potatos 1kg', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Col1-Item2-orange' },
        3: { category: 'Fruits', itemName: 'Tomatos 200g', rating: '4', vender: 'Mr.food', offerPrice: '0.30', mrp: '0.99', imgName: 'Col1-Item3-orange' },
        4: { category: 'Vegetables', itemName: 'Broccoli 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '1.50', mrp: '2.99', imgName: 'Feat-GreenBeans' },
        5: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Ctg-Carrot' },

        // New Item added
        6: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Ctg-Pattato' },
        7: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Ctg-Orange' },
        8: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Ctg-Peach' },
        9: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Ctg-Vegitables' },
        10: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Ctg-Strawbery' },
        11: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Brocoly' }
    }

    let cardFruit = {
        1: { category: 'Vegetables', itemName: 'Redish 500g', rating: '4', vender: 'Mr.food', offerPrice: '2', mrp: '3.99', imgName: 'Col1-Item1-orange' },
        2: { category: 'Vegetables', itemName: 'Potatos 1kg', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Col1-Item3-orange' },
        3: { category: 'Fruits', itemName: 'Tomatos 200g', rating: '4', vender: 'Mr.food', offerPrice: '0.30', mrp: '0.99', imgName: 'Ctg-Apple' },
        4: { category: 'Vegetables', itemName: 'Broccoli 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '1.50', mrp: '2.99', imgName: 'Ctg-Orange' },
        5: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Ctg-Peach' },

        // New Item added
        6: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Redis' },
        7: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Feat-Tamato' },
        8: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fruits1' },
        9: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fruits2' },
        10: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fruits3' },
        11: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fruits4' }
    }

    let cardCoffeTea = {
        1: { category: 'Vegetables', itemName: 'Redish 500g', rating: '4', vender: 'Mr.food', offerPrice: '2', mrp: '3.99', imgName: 'coffe1' },
        2: { category: 'Vegetables', itemName: 'Potatos 1kg', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'coffe2' },
        3: { category: 'Fruits', itemName: 'Tomatos 200g', rating: '4', vender: 'Mr.food', offerPrice: '0.30', mrp: '0.99', imgName: 'coffe3' },
        4: { category: 'Vegetables', itemName: 'Broccoli 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '1.50', mrp: '2.99', imgName: 'coffe4' },
        5: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'coffe5' },

        // New Item added
        6: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'coffe6' },
        7: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'Bestsell-coffe' },
        8: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'coffe8' },
        9: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'coffe9' },
        10: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'coffe10' },
        11: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'coffe11' }
    }

    let cardMeat = {
        1: { category: 'Vegetables', itemName: 'Redish 500g', rating: '4', vender: 'Mr.food', offerPrice: '2', mrp: '3.99', imgName: 'mutton1' },
        2: { category: 'Vegetables', itemName: 'Potatos 1kg', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'mutton2' },
        3: { category: 'Fruits', itemName: 'Tomatos 200g', rating: '4', vender: 'Mr.food', offerPrice: '0.30', mrp: '0.99', imgName: 'mutton3' },
        4: { category: 'Vegetables', itemName: 'Broccoli 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '1.50', mrp: '2.99', imgName: 'fish1' },
        5: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fish2' },

        // New Item added
        6: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fish3' },
        7: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fish4' },
        8: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'fish5' },
        9: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'mutton1' },
        10: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'mutton2' },
        11: { category: 'Vegetables', itemName: 'Green Beans 250g', rating: '4', vender: 'Mr.food', offerPrice: '1', mrp: '1.99', imgName: 'mutton3' }
    }

    const sliderRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollWidth = 3 * 318;

    const handleScrollLeft = () => {
        const newPosition = Math.max(scrollPosition - scrollWidth, 0);
        sliderRef.current.scrollTo({
            left: newPosition,
            behavior: "smooth"
        });
        setScrollPosition(newPosition);
    }

    const handleScrollRight = () => {
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const newPosition = Math.min(scrollPosition + scrollWidth, maxScroll);
        sliderRef.current.scrollTo({
            left: newPosition,
            behavior: "smooth"
        });
        setScrollPosition(newPosition);
    }

    let all = 'all';
    let vegetables = 'vegetables'
    let fruits = 'fruits'
    let coffeTea = 'coffeTea'
    let meat = 'meat'
    const [featButton, setFeatButton] = useState(all)

    const getCategoryCards = () => {

        switch (featButton) {
            case all:
                // return [...Object.values(cardAll), ...Object.values(cardMeat)];
                return cardAll;
            case vegetables:
                return cardVegi;
            case meat:
                return cardMeat;
            case fruits:
                return cardFruit;
            case coffeTea:
                return cardCoffeTea;

            default:
                return cardAll;

        }

    }


    const currentCards = getCategoryCards();

    return (
        <>
            <div className="h-auto mt-1 p-10 bg-white">

                {/* Heading Section */}
                <div className="h-2 pl-14 flex justify-between">
                    <p className='font-quicksand-w600 text-2xl'>Featured Products</p>
                    <div className="h-4 font-quicksand-w500 flex gap-x-5 mr-14">
                        <button onClick={() => setFeatButton(all)} className={`text-lg  ${featButton === 'all' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`} >All</button>
                        <button onClick={() => setFeatButton('vegetables')} className={`text-lg ${featButton === 'vegetables' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`}>Vegetables</button>
                        <button onClick={() => setFeatButton('fruits')} className={`text-lg ${featButton === 'fruits' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`}>Fruits</button>
                        <button onClick={() => setFeatButton('coffeTea')} className={`text-lg ${featButton === 'coffeTea' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`}>Coffe & Teas</button>
                        <button onClick={() => setFeatButton(meat)} className={`text-lg ${featButton === 'meat' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`}>Meat</button>
                    </div>
                </div>

                {/* Buttons */}

                <div className='flex py-12'>


                    <button onClick={handleScrollLeft} className='bg-gray-200 px-2 py-1 m-auto rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></button>


                    {/* Cards */}
                    <div className='overflow-hidden scroll-smooth max-w-[100rem] mx-3 2xl:m-0'
                        style={{ scrollBehavior: 'smooth', flex: 1 }}
                        ref={sliderRef}
                    >

                        <div className="flex gap-[59px] 2xl:gap-[48px]">
                            {
                                Object.values(currentCards).map((card, index) => (
                                    <CardFeatProducts
                                        key={index}
                                        category={card.category}
                                        itemName={card.itemName}
                                        rating={card.rating}
                                        vender={card.vender}
                                        offerPrice={card.offerPrice}
                                        mrp={card.mrp}
                                        imgName={card.imgName}
                                    />
                                ))
                            }
                        </div>
                    </div>



                    <button onClick={handleScrollRight} className='bg-gray-200 px-2 py-1 m-auto rounded-full'><i className="fas fa-arrow-right text-gray-600"></i></button>
                </div>


                {/* Advartise / Offer Section */}
                <div className="flex gap-x-[3vw] mt-10">

                    <div className='h-72 2xl:h-96 w-[42%] ml-[4%] bg-[#FFF5E1D9] overflow-hidden relative rounded-sm'>
                        <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />
                        <img src="src\assets\Images\adv-one.png" className='absolute transform top-[50%] left-[83%] -translate-x-1/2 -translate-y-1/2 h-[99%] w-[75%]' alt="" />
                        <div className='absolute transform top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 h-[80%] w-[65%]'>
                            <button disabled className='bg-orange-400 rounded-sm font-quicksand-w500 text-white p-1'>Free delevery</button>
                            <p className='font-quicksand-w600 text-xl text-gray-700 mt-4'>Free Delevery Over 50$</p>
                            <p className='font-quicksand-w400 text-sm text-gray-500 py-2'>Shop $50 product and get free delevery any where.</p>
                            <button className='font-quicksand-w600 text-sm bg-green-500 p-2 rounded-sm text-white mt-[22%]'>Shope Now <i className="fas fa-arrow-right text-white my-auto mx-1 "></i></button>
                        </div>
                    </div>

                    <div className='h-72 2xl:h-96 w-[42%] ml-12 bg-[#D2EFE1D9] overflow-hidden relative rounded-sm'>
                        <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />
                        <img src="src\assets\Images\adv-two.png" className='absolute transform top-[58%] left-[63%] -translate-x-1/2 -translate-y-1/2 h-[85%] w-[75%]' alt="" />
                        <div className='absolute transform top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 h-[80%] w-[65%]'>
                            <button disabled className='bg-green-400 rounded-sm font-quicksand-w500 text-white p-1 py-[1px]'>60% Off</button>
                            <p className='font-quicksand-w600 text-xl text-gray-700 mt-4'>Organic Food</p>
                            <p className='font-quicksand-w400 text-sm text-gray-500 py-2'>Save up to 60% off on your first order</p>
                            <button className='font-quicksand-w600 text-sm bg-green-500 p-2 rounded-sm text-white mt-[22%]'>Order Now <i className="fas fa-arrow-right text-white my-auto mx-1 "></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts