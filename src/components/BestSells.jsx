import React from 'react'
import ProgressBar from './ProgressBar'
import CardBestSells from './Cards/CardBestSells'

function BestSail() {
  let cardDetails ={
    1:{category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp:'25', sold: '20', totalAvailabe: '50', imgName: 'Bestsell-coffe'},
    2:{category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp:'10', sold: '7', totalAvailabe: '20', imgName: 'Bestsell-halal-sausage'},
    3:{category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp:'7', sold: '32', totalAvailabe: '50', imgName: 'Bestsell-green-tea'},
    4:{category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp:'2', sold: '2', totalAvailabe: '10', imgName: 'Bestsell-onion'}
  }

  return (
    <>
      <div className='bg-white'>
        {/* Bar Section */}
        <div className="flex bg-white justify-between mt-4">

          <div className="flex mx-20 gap-[2vw]">
            <p className='text-3xl mx-3 font-quicksand-w600'>Daily Best Sells</p>
            <p className='text-lg mx-3 my-2 font-quicksand-w500'>Featured</p>
            <p className='text-lg mx-3 my-2 font-quicksand-w500'>Popular</p>
            <p className='text-lg mx-3 my-2 font-quicksand-w500'>New</p>
            <button className='bg-[#F35244] rounded-sm px-2 text-white text-lg font-quicksand-w400' disabled>&nbsp;Expires In: &nbsp; 10 : 56 : 21 &nbsp;</button>
          </div>

          <div className='flex mr-[6vw] gap-7'>
            <p className='bg-gray-200 px-[15px] py-[9px] rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></p>
            <p className='bg-gray-200 px-[15px] py-[9px] rounded-full' ><i className="fas fa-arrow-right text-gray-600"></i></p>
          </div>

        </div>

        {/* Items Section */}
        <div className="flex mt-16 gap-[1%] 2xl:gap-[4%] justify-center">

          {/* Cards */}
          {
            Object.values(cardDetails).map((card, index)=>(
              <CardBestSells
                key={index}
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
          

          {/*Login-Register Card  */}

          <div className='relative border-2 border-solid border-gray-200 h-auto w-72 mx-4 bg-[#FFF7E6CC]'>
            <img className='w-full h-full opacity-15' src="/src/assets/Images/bg-hero-img.png" alt="Coffe" />
            <p className='absolute transform font-quicksand-w700 text-5xl text-blue-950 -translate-x-1/2 -translate-y-1/2 top-[12%] left-[52%] h-[10%] w-[70%]'>10% OFF</p>
            <p className='absolute transform font-quicksand-w500 text-xl text-center text-blue-950 -translate-x-1/2 -translate-y-1/2 top-32 left-36 h-[10%] w-[90%]'>For new member sign up at the first time</p>

            {/* Email Input */}
            <p className='absolute transform font-quicksand-w500 text-lg -translate-x-1/2 -translate-y-1/2 top-[46%] left-[48%] h-[10%] w-[90%]'>Email address</p>
            <i className="fas fa-envelope text-blue-950 my-auto absolute transform -translate-x-1/2 -translate-y-1/2 top-[52%] left-[10%] p-3 bg-white"></i>
            <input className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[52%] left-[54%] h-[8%] w-[75%] pl-2' type="text" placeholder='john@gmail.com' />

            {/* Password */}
            <p className='absolute transform font-quicksand-w500 text-lg -translate-x-1/2 -translate-y-1/2 top-[63%] left-[48%] h-[10%] w-[90%]'>Password</p>
            <i className="fas fa-key text-blue-950 my-auto absolute transform -translate-x-1/2 -translate-y-1/2 top-[68%] left-[10%] p-3 bg-white"></i>
            <input className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[68%] left-[54%] h-[8%] w-[75%] pl-2' type="text" placeholder='Password' />

            <button className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[88%] left-[50%]  bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
              <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Register Now</p>
            </button>


          </div>



        </div>

      </div>

    </>
  )
}

export default BestSail

// 1514