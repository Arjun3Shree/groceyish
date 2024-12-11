import React, { useRef, useState } from 'react'
import CardBestSells from '../Cards/CardBestSells';
import CardOfferTimmer from '../Cards/CardOfferTimmer';

function LimitedOffer( {cardDtls, headSection}) {

  const sliderRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollWidth = 4 * 255;

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


  return (
    <>
      {/* Deals on Vegetables  */}
      <div className="mt-16">
        <div className="bg-white">
           {/* Bar Section */}
          <div className="flex bg-white justify-between mt-4">

            <div className="flex mx-20 gap-[6vw]">
              <p className='text-3xl mx-3 font-quicksand-w600'>{headSection}</p>
              <CardOfferTimmer msgHour={8} msgMinuts={59}/>
            </div>

            <div className='flex mr-[8vw] gap-7'>

              <button onClick={handleScrollLeft} className='bg-gray-200 px-[15px] py-[9px] rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></button>

              <button onClick={handleScrollRight} className='bg-gray-200 px-[15px] py-[9px] rounded-full'><i className="fas fa-arrow-right text-gray-600"></i></button>

            </div>

          </div>
        </div>

        {/* Items Section */}
        <div className="flex mt-16 gap-[1%] 2xl:gap-[4%] justify-center">

          {/* Cards */}
          <div className="overflow-hidden scroll-smooth w-[84rem] 2xl:w-[106rem]"
            // style={{ scrollBehavior: 'smooth', flex: 1}} 
            ref={sliderRef}
          >

            <div className="flex gap-[70px]">
              {
                Object.values(cardDtls).map((card, index) => (
                  <CardBestSells
                    key={index}
                    offer_text={card.offer_text}
                    offer_text_coller={card.offer_text_coller}
                    offer_bg={card.offer_bg}
                    category={card.category}
                    itemName={card.itemName}
                    rating={card.rating}
                    vender={card.vender}
                    offerPrice={card.offerPrice}
                    mrp={card.mrp}
                    sold={card.sold}
                    totalAvailabe={card.totalAvailabe}
                    imgName={card.imgName}
                  />
                ))
              }
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default LimitedOffer