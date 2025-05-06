import React, { useState } from 'react'
import NavBarContext from './NavbarContext'

function NavBarContextProvider({ children }) {
    // Navbar selection state
    const [activeNavbar, setActiveNavbar] = useState('navbar1')

    // Navigation button states
    const navigationButtons = {
        home: { label: 'Home', icon: 'fa-home', route: '/' },
        hotdeals: { label: 'Hot Deals', icon: 'fa-fire', route: '/hotdeals' },
        promotions: { label: 'Promotions', icon: 'fa-percent', route: '/promotion' },
        newproducts: { label: 'New Products', icon: 'fa-bullhorn', route: '/newprds' },
        support: { label: '24/7 Support Center', icon: 'fa-phone-alt', route: '/support' },
        wishlist: { label: 'Wishlist', icon: 'fa-heart', route: '/wishlist' },
        mycart: { label: 'My Cart', icon: 'fa-shopping-cart', route: '/mycart' }
    }

    // Common navigation states
    const [activeButton, setActiveButton] = useState(()=>{ 
        console.log(localStorage.getItem('activeButton'));
        return localStorage.getItem('activeButton') || 'home';
    })

    const handleButtonActivation = (buttonName) => {
        setActiveButton(buttonName)
        // alert(buttonName);
        // Additional logic for button activation can be added here
        localStorage.setItem('activeButton', buttonName);

    }

    // Specific navbar interaction states
    const [navbarStates, setNavbarStates] = useState({
        wishlistCount: 5,
        cartCount: 1,
        cartTotal: 21
    })

    // Update methods for navbar interactions
    const updateNavbarState = (updates) => {
        setNavbarStates(prev => ({ ...prev, ...updates }))
    }

    return (
        <NavBarContext.Provider
            value={{
                // Navbar selection
                activeNavbar, 
                setActiveNavbar,

                // Active button management
                activeButton, 
                setActiveButton: handleButtonActivation,
                
                // Navbar interaction states
                navbarStates, 
                updateNavbarState,

                // Navigation button configurations
                navigationButtons
            }}>
            {children}
        </NavBarContext.Provider>
    )
}

export default NavBarContextProvider