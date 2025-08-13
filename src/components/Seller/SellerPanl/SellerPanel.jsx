import React from 'react'
import { useNavigate } from 'react-router-dom'

function SellerPanel() {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: 'All Products',
      bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      description: 'View all your products',
      routePath: '/seller/allprd'
    },
    {
      id: 2,
      title: 'Add one new product',
      bgImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      description: 'Add a single product',
      routePath: '/seller/addprd'
    },
    {
      id: 3,
      title: 'Add Multiple products',
      bgImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      description: 'Bulk product upload',
      routePath: '#'
    },
    {
      id: 4,
      title: 'See Purchase Data',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'View purchase analytics',
      routePath: '#'
    },
    {
      id: 5,
      title: 'See Order Details',
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      description: 'Manage your orders',
      routePath: '/'
    },
    {
      id: 6,
      title: 'Manage Products',
      bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'Edit and organize products',
      routePath: '/'
    }
  ]

  const handleCardClick = (redirect) => {
    // console.log(`${cardTitle} clicked`)
    // Add your navigation logic here
    navigate(`${redirect}`);
  }
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center font-quicksand-w600">
          Seller Dashboard
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.routePath)}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ height: '5cm', minHeight: '120px' }}
            >
              {/* Background Image with Blur */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-xl filter blur-sm group-hover:blur-none transition-all duration-300"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 rounded-xl transition-all duration-300" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center p-4 z-10">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2 drop-shadow-lg font-quicksand-w600">
                  {card.title}
                </h3>
                <p className="text-white text-xs sm:text-sm opacity-90 drop-shadow-md">
                  {card.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white group-hover:border-opacity-50 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default SellerPanel