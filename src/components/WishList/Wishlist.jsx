import React from 'react'
import CardFeatProducts from '../Sections/Cards/CardFeatProducts'

function Wishlist() {
  let wishCards = {
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

  return (
    <div className="flex flex-wrap  mt-12 justify-center gap-24">
      {
        Object.values(wishCards).map((card, index) => (
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
  )
}

export default Wishlist