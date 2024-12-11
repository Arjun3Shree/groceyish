import React, { useRef, useState } from 'react'
import ExploreCategoties from './Cards/ExploreCategoties'

function Categories() {

    let cardAll = {
        1: { colorCode: '#FEEFEA', imgName: 'Ctg-Peach', itemName: 'Peach', noOfItem: '20' },
        2: { colorCode: '#FFF3FF', imgName: 'Ctg-Vegitables', itemName: 'Vegetables', noOfItem: '220' },
        3: { colorCode: '#F2FCE4', imgName: 'Ctg-Strawbery', itemName: 'Strawberry', noOfItem: '10' },
        4: { colorCode: '#FEEFEA', imgName: 'Ctg-Apple', itemName: 'Apple', noOfItem: '40' },
        5: { colorCode: '#ECFFEC', imgName: 'Ctg-Orange', itemName: 'Orange', noOfItem: '23' },
        6: { colorCode: '#FFFCEB', imgName: 'Ctg-Pattato', itemName: 'Patato', noOfItem: '3' },
        7: { colorCode: '#DEF9EC', imgName: 'Ctg-Carrot', itemName: 'Carrot', noOfItem: '9' },

        // New Items
        8: {colorCode:'#FEEFEA', imgName:'Ctg-Peach', itemName:'Banana', noOfItem:'15'},
        9: {colorCode:'#FFF3FF', imgName:'Ctg-Vegitables', itemName:'Grapes', noOfItem:'25'},
        10: {colorCode:'#F2FCE4', imgName:'Ctg-Strawbery', itemName:'Mango', noOfItem:'30'},
        11: {colorCode:'#FFF3FF', imgName:'Ctg-Vegitables', itemName:'NGrapes', noOfItem:'25'},
    }

    let cardVegi = {
        1: { colorCode: '#FEEFEA', imgName: 'Col1-Item1-orange', itemName: 'Peach', noOfItem: '20' },
        2: { colorCode: '#FFF3FF', imgName: 'Col1-Item2-orange', itemName: 'Vegetables', noOfItem: '220' },
        3: { colorCode: '#F2FCE4', imgName: 'Col1-Item3-orange', itemName: 'Strawberry', noOfItem: '10' },
        4: { colorCode: '#FEEFEA', imgName: 'Feat-GreenBeans', itemName: 'Apple', noOfItem: '40' },
        5: { colorCode: '#ECFFEC', imgName: 'Ctg-Carrot', itemName: 'Orange', noOfItem: '23' },
        6: { colorCode: '#FFFCEB', imgName: 'Ctg-Pattato', itemName: 'Patato', noOfItem: '3' },
        7: { colorCode: '#DEF9EC', imgName: 'Ctg-Orange', itemName: 'Carrot', noOfItem: '9' },

        // New Items
        8: {colorCode:'#FEEFEA', imgName:'Ctg-Peach', itemName:'Banana', noOfItem:'15'},
        9: {colorCode:'#FFF3FF', imgName:'Ctg-Vegitables', itemName:'Grapes', noOfItem:'25'},
        10: {colorCode:'#F2FCE4', imgName:'Ctg-Strawbery', itemName:'Mango', noOfItem:'30'},
        11: {colorCode:'#FFF3FF', imgName:'Feat-Brocoly', itemName:'NGrapes', noOfItem:'25'},
    }

    let cardFruit = {
        1: { colorCode: '#FEEFEA', imgName: 'Col1-Item1-orange', itemName: 'Peach', noOfItem: '20' },
        2: { colorCode: '#FFF3FF', imgName: 'Col1-Item3-orange', itemName: 'Vegetables', noOfItem: '220' },
        3: { colorCode: '#F2FCE4', imgName: 'Ctg-Apple', itemName: 'Strawberry', noOfItem: '10' },
        4: { colorCode: '#FEEFEA', imgName: 'Ctg-Orange', itemName: 'Apple', noOfItem: '40' },
        5: { colorCode: '#ECFFEC', imgName: 'Ctg-Peach', itemName: 'Orange', noOfItem: '23' },
        6: { colorCode: '#FFFCEB', imgName: 'Feat-Redis', itemName: 'Patato', noOfItem: '3' },
        7: { colorCode: '#DEF9EC', imgName: 'Feat-Tamato', itemName: 'Carrot', noOfItem: '9' },

        // New Items
        8: {colorCode:'#FEEFEA', imgName:'fruits1', itemName:'Banana', noOfItem:'15'},
        9: {colorCode:'#FFF3FF', imgName:'fruits2', itemName:'Grapes', noOfItem:'25'},
        10: {colorCode:'#F2FCE4', imgName:'fruits3', itemName:'Mango', noOfItem:'30'},
        11: {colorCode:'#FFF3FF', imgName:'fruits4', itemName:'NGrapes', noOfItem:'25'},
    }

    let cardCoffeTea = {
        1: { colorCode: '#FEEFEA', imgName: 'coffe1', itemName: 'Peach', noOfItem: '20' },
        2: { colorCode: '#FFF3FF', imgName: 'coffe2', itemName: 'Vegetables', noOfItem: '220' },
        3: { colorCode: '#F2FCE4', imgName: 'coffe3', itemName: 'Strawberry', noOfItem: '10' },
        4: { colorCode: '#FEEFEA', imgName: 'coffe4', itemName: 'Apple', noOfItem: '40' },
        5: { colorCode: '#ECFFEC', imgName: 'coffe5', itemName: 'Orange', noOfItem: '23' },
        6: { colorCode: '#FFFCEB', imgName: 'coffe6', itemName: 'Patato', noOfItem: '3' },
        7: { colorCode: '#DEF9EC', imgName: 'Bestsell-coffe', itemName: 'Carrot', noOfItem: '9' },

        // New Items
        8: {colorCode:'#FEEFEA', imgName:'coffe8', itemName:'Banana', noOfItem:'15'},
        9: {colorCode:'#FFF3FF', imgName:'coffe9', itemName:'Grapes', noOfItem:'25'},
        10: {colorCode:'#F2FCE4', imgName:'coffe10', itemName:'Mango', noOfItem:'30'},
        11: {colorCode:'#FFF3FF', imgName:'coffe11', itemName:'NGrapes', noOfItem:'25'},
    }

    let cardMeat = {
        1: { colorCode: '#FEEFEA', imgName: 'mutton1', itemName: 'Mutton', noOfItem: '20' },
        2: { colorCode: '#FFF3FF', imgName: 'mutton2', itemName: 'Mutton Roll', noOfItem: '220' },
        3: { colorCode: '#F2FCE4', imgName: 'mutton3', itemName: 'Row Chicken', noOfItem: '10' },
        4: { colorCode: '#FEEFEA', imgName: 'fish1', itemName: 'Fresh Fish', noOfItem: '40' },
        5: { colorCode: '#ECFFEC', imgName: 'fish2', itemName: 'Slice Mutton', noOfItem: '23' },
        6: { colorCode: '#FFFCEB', imgName: 'fish3', itemName: 'Elite Fish', noOfItem: '3' },
        7: { colorCode: '#DEF9EC', imgName: 'fish4', itemName: 'Slice Chicken', noOfItem: '9' },

        // New Items
        8: {colorCode:'#FEEFEA', imgName:'fish5', itemName:'Figt Chicken', noOfItem:'15'},
        9: {colorCode:'#FFF3FF', imgName:'mutton1', itemName:'Meat', noOfItem:'25'},
        10: {colorCode:'#F2FCE4', imgName:'mutton2', itemName:'Mutton Roll', noOfItem:'30'},
        11: {colorCode:'#FFF3FF', imgName:'mutton3', itemName:'Row Chicken', noOfItem:'25'},
    }

    const sliderRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollWidth = 8*128;

    /* Handle Scroll Buttons */
    const handleScrollLeft = () =>{
        const newPosition = Math.max(scrollPosition - scrollWidth, 0);
        sliderRef.current.scrollTo({
            left: newPosition,
            behavior: "smooth"
        });
        setScrollPosition(newPosition);
    }
    const handleScrollRight = ()=> {
        const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        const newPosition = Math.min(scrollPosition + scrollWidth, maxScroll);
        sliderRef.current.scrollTo({
            left:newPosition,
            behavior: "smooth"
        });
        setScrollPosition(newPosition);
    }

    
    let all = 'all';
    let vegetables = 'vegetables'
    let fruits = 'fruits'
    let coffeTea = 'coffeTea'
    let meat = 'meat'
    const [categotyButton, setCategotyButton] = useState(all)

    const getCategoryCards = () => {
        
            switch(categotyButton){
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
            <div className="h-auto mt-9 p-10 bg-white">

                {/* Heading Section */}
                <div className="h-2 pl-14 flex justify-between">
                    <p className='font-quicksand-w500 text-2xl'>Explore Categories</p>
                    <div className="h-4 font-quicksand-w500 flex gap-x-5 mr-14">
                        <button onClick={()=>setCategotyButton(all)} className={`text-lg  ${categotyButton === 'all'? 'font-quicksand-w600 text-green-600':'font-quicksand-w400'}`} >All</button>
                        <button onClick={()=>setCategotyButton('vegetables')} className={`text-lg ${categotyButton === 'vegetables'? 'font-quicksand-w600 text-green-600':'font-quicksand-w400'}`}>Vegetables</button>
                        <button onClick={()=>setCategotyButton('fruits')} className={`text-lg ${categotyButton === 'fruits'? 'font-quicksand-w600 text-green-600':'font-quicksand-w400'}`}>Fruits</button>
                        <button onClick={()=>setCategotyButton('coffeTea')} className={`text-lg ${categotyButton === 'coffeTea'? 'font-quicksand-w600 text-green-600':'font-quicksand-w400'}`}>Coffe & Teas</button>
                        <button onClick={()=>setCategotyButton(meat)} className={`text-lg ${categotyButton === 'meat'? 'font-quicksand-w600 text-green-600':'font-quicksand-w400'}`}>Meat</button>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex py-14 justify-between '>


                    <button onClick={handleScrollLeft}> <p className='mr-2 2xl:mr-0 bg-gray-200 px-2 py-1 mt-3 rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></p> </button>                    


                    {/* Cards */}
                    {/* Call through Props */}

                    <div className="h-[150px] overflow-hidden scroll-smooth max-w-[92rem]"
                    style={{ scrollBehavior: 'smooth', flex: 1}} ref={sliderRef}
                    >

                        <div className="flex gap-[5vw]">
                            {
                                Object.values(currentCards).map((card, index) => (
                                    <ExploreCategoties
                                        key={index}
                                        colorCode={card.colorCode}
                                        imgName={card.imgName}
                                        itemName={card.itemName}
                                        noOfItem={card.noOfItem}
                                    />
                                ))
                            }
                        </div>
                    </div>



                    <button onClick={handleScrollRight}> <p className='ml-2 2xl:mr-0 bg-gray-200 px-2 py-1 mt3 rounded-full' ><i className="fas fa-arrow-right text-gray-600"></i></p> </button>        
                    
                </div>
            </div>
        </>
    )
}

export default Categories