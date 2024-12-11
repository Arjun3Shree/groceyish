import React from 'react'
import LimitedOffer from '../Sections/SpecialCategory/LimitedOffer'

function HotDeals() {
    let vegetableCards = {
        1: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'Col1-Item1-orange' },
        2: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Col1-Item2-orange' },
        3: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Ctg-Carrot' },
        4: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'Bestsell-onion' },
    
        // New data
        5: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'Feat-Redis' },
        6: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Feat-Tamato' },
        7: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Feat-Brocoly' },
        8: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Feat-Tamato' },
        9: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Feat-GreenBeans' },
        10: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'Bestsell-onion' },
      }


      let meeatCards = {
        1: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'mutton1' },
        2: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'mutton2' },
        3: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'mutton3' },
        4: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'fish1' },
    
        // New data
        5: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'fish3' },
        6: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'fish4' },
        7: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'fish5' },
        8: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'mutton1' },
        9: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'mutton2' },
        10: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'mutton3' },
      }


      let fruitsCards = {
        1: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'Col1-Item1-orange' },
        2: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Col1-Item2-orange' },
        3: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Ctg-Carrot' },
        4: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'Bestsell-onion' },
    
        // New data
        5: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Coffe 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'Feat-Redis' },
        6: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Feat-Tamato' },
        7: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Feat-Brocoly' },
        8: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Meat', itemName: 'Hala Sausage 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'Feat-Tamato' },
        9: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Coffe & teas', itemName: 'Green Tea 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'Feat-GreenBeans' },
        10: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Vegetables', itemName: 'Onion 1Kg', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'Bestsell-onion' },
      }



      let grosoryCards = {
        1: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Grosory', itemName: 'Combo Offer', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'grocery1' },
        2: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Grosory', itemName: 'Sugar 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'grocery2' },
        3: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Grosory', itemName: 'Atta 5Kg', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'grocery3' },
        4: { offer_text: 'Save 20%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Grosory', itemName: 'Makhan Dal', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'grocery4' },
    
        // New data
        5: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Grosory', itemName: 'Massala 100g', rating: '4', vender: 'Mr.food', offerPrice: '20', mrp: '25', sold: '20', totalAvailabe: '50', imgName: 'grocery5' },
        6: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Grosory', itemName: 'Combo Dall 200g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'grocery6' },
        7: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Grosory', itemName: 'Rice Ban Oil 250g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'grocery7' },
        8: { offer_text: 'Best deal', offer_text_coller: 'green', offer_bg: '#DEF9EC', category: 'Grosory', itemName: 'Corn 350g', rating: '4', vender: 'Mr.food', offerPrice: '4', mrp: '10', sold: '7', totalAvailabe: '20', imgName: 'grocery8' },
        9: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Grosory', itemName: 'Fortune Oil 950g', rating: '4', vender: 'Mr.food', offerPrice: '3', mrp: '7', sold: '32', totalAvailabe: '50', imgName: 'grocery9' },
        10: { offer_text: 'Save 10%', offer_text_coller: 'white', offer_bg: '#FFD480', category: 'Drinks', itemName: 'Multi Drink 2L', rating: '4', vender: 'Mr.food', offerPrice: '0.50', mrp: '2', sold: '2', totalAvailabe: '10', imgName: 'grocery10' },
      }



  return (
    <>
    <LimitedOffer cardDtls={vegetableCards} headSection={"Deals On Vegetables"} />
    <LimitedOffer cardDtls={meeatCards} headSection={"Deals On Meeat"} />
    <LimitedOffer cardDtls={fruitsCards} headSection={"Deals On Fruits"} />
    <LimitedOffer cardDtls={grosoryCards} headSection={"Deals On Grosory"} />
    </>
  )
}

export default HotDeals