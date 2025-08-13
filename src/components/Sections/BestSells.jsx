import React, { useEffect, useRef, useState } from 'react'
import CardBestSells from './Cards/CardBestSells'
import CardOfferTimmer from './Cards/CardOfferTimmer'
import { loginHandler } from '../../Handlers/authHandler'
function BestSail() {
  let cardFeatured = {
    1: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'Bestsell-coffe' },
    2: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Bestsell-halal-sausage' },
    3: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Bestsell-green-tea' },
    4: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'Bestsell-onion' },

    // New data
    5: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'Bestsell-coffe' },
    6: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Bestsell-halal-sausage' },
    7: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Bestsell-green-tea' },
    8: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Bestsell-halal-sausage' },
    9: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Bestsell-green-tea' },
    10: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'Bestsell-onion' },
  }

  let cardPopular = {
    1: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'coffe3' },
    2: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'coffe4' },
    3: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'coffe8' },
    4: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'coffe10' },

    // New data
    5: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'grocery1' },
    6: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'grocery2' },
    7: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'grocery9' },
    8: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'grocery10' },
    9: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Bmutton1' },
    10: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'mutton2' },
  }

  let cardNewPrd = {
    1: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'fish5' },
    2: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'fish4' },
    3: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'fruits1' },
    4: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'fruits4' },

    // New data
    5: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'grocery1' },
    6: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'coffe1' },
    7: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'grocery9' },
    8: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Feat-Brocoly' },
    9: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'mutton1' },
    10: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'fish2' },
  }


  const sliderRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollWidth = 4 * 255;

  const isLogin = sessionStorage.getItem('isloggedIn') || false;
  const [formdata, setFormData] = useState({
          email: "",
          password: ""
      });

  const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

  const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginHandler(formdata);
        console.log("REsponse:", res);
        toast.success("Login successfull!!");
        setFormData({ email: "", password: "" });
        navigate(from, { replace: true });
    }

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

  let featured = 'featured'
  let popular = 'popular'
  let newItem = 'newItem'

  const [bestSellCtgButton, setBestSellCtgButton] = useState(featured)

  const getCategoryCards = () => {

    switch (bestSellCtgButton) {
      case featured:
        // return [...Object.values(cardAll), ...Object.values(cardMeat)];
        return cardFeatured;
      case popular:
        return cardPopular;
      case newItem:
        return cardNewPrd;

      default:
        return cardAll;

    }

  }
  const currentCards = getCategoryCards();

  const calculateTotalSecond = () => {
    let initialHours = 10;
    let initialMunutes = 59;
    let initialSecond = 0;
    return initialHours * 3600 + initialMunutes * 60 + initialSecond;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTotalSecond())
  const [isRunning, setIsRunning] = useState(true);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    let intervalId;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft])

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  }

  return (
    <>
      <div className='bg-white'>
        {/* Bar Section */}
        <div className="flex bg-white justify-between mt-4">

          <div className="flex mx-20 gap-[2vw]">
            <p className='text-3xl mx-3 font-quicksand-w600'>Daily Best Sells</p>

            <button onClick={() => setBestSellCtgButton(featured)} className={`text-lg  ${bestSellCtgButton === 'featured' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`}>Featured</button>
            <button onClick={() => setBestSellCtgButton(popular)} className={`text-lg  ${bestSellCtgButton === 'popular' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`}>Popular</button>
            <button onClick={() => setBestSellCtgButton(newItem)} className={`text-lg  ${bestSellCtgButton === 'newItem' ? 'font-quicksand-w600 text-green-600' : 'font-quicksand-w400'}`}>New</button>
            <CardOfferTimmer msgHour={8} msgMinuts={59} />
          </div>

          <div className='flex mr-[6vw] gap-7'>

            <button onClick={handleScrollLeft} className='bg-gray-200 px-[15px] py-[9px] rounded-full'><i className="fas fa-arrow-left text-gray-600"></i></button>

            <button onClick={handleScrollRight} className='bg-gray-200 px-[15px] py-[9px] rounded-full'><i className="fas fa-arrow-right text-gray-600"></i></button>

          </div>

        </div>

        {/* Items Section */}
        <div className="flex mt-16 gap-[1%] 2xl:gap-[4%] justify-center">



          {/* Cards */}
          <div className="overflow-hidden scroll-smooth w-[62rem] 2xl:w-[82rem] max-w-[82rem]"
            // style={{ scrollBehavior: 'smooth', flex: 1}} 
            ref={sliderRef}
          >

            <div className="flex gap-[70px]">
              {
                Object.values(currentCards).map((card, index) => (
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




          {/*Login-Register Card  */}

          {!isLogin && (
            
              <div className='relative border-2 border-solid border-gray-200 h-auto min-w-72 max-w-72 mx-4 bg-[#FFF7E6CC]'>
                <img className='w-full h-full opacity-15' src="/src/assets/Images/bg-hero-img.png" alt="Coffe" />

                <form action="" onSubmit={handleSubmit}>

                <p className='absolute transform font-quicksand-w700 text-5xl text-blue-950 -translate-x-1/2 -translate-y-1/2 top-[50px] left-[150px] h-[40px] w-[205px]'>10% OFF</p>
                <p className='absolute transform font-quicksand-w500 text-xl text-center text-blue-950 -translate-x-1/2 -translate-y-1/2 top-32 left-36 h-[28px] w-[250px]'>For new member sign up at the first time</p>

                {/* Email Input */}
                <p className='absolute transform font-quicksand-w500 text-lg -translate-x-1/2 -translate-y-1/2 top-[220px] left-[88px] h-[40px] w-[150px]'>Email address</p>
                <i className="fas fa-envelope text-blue-950 my-auto absolute transform -translate-x-1/2 -translate-y-1/2 top-[252px] left-[28px] p-3 bg-white"></i>
                <input className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[252px] left-[154px] h-[38px] w-[220px] pl-2' type="text" value={formdata.email} onChange={handleChange} placeholder='john@gmail.com' />

                {/* Password */}
                <p className='absolute transform font-quicksand-w500 text-lg -translate-x-1/2 -translate-y-1/2 top-[303px] left-[139px] h-[40px] w-[250px]'>Password</p>
                <i className="fas fa-key text-blue-950 my-auto absolute transform -translate-x-1/2 -translate-y-1/2 top-[328px] left-[27px] p-3 bg-white"></i>
                <input className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[328px] left-[154px] h-[40px] w-[220px] pl-2' type="password" value={formdata.password} onChange={handleChange} placeholder='Password' />

                <button type='submit' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[420px] left-[147px]  bg-[#3BB77E] flex rounded-sm px-4 mb-2 mt-4 mx-auto'>
                  <p className='font-quicksand-w400 text-lg p-2 w-36 text-white mx-1'>Login Now</p>
                </button>


                </form>


              </div>
          )}



        </div>

      </div>

    </>
  )
}

export default BestSail

// 1514