import React, { useState } from 'react'
import NavBarContext from './NavbarContext'

function NavBarContextProvider({ children }) {
    const [activeNavbar, setActiveNavbar] = useState(null)

    const [wishlistBtn, setWishlistBtn] = useState(null)
    const [mycartBtn, setMycartBtn] = useState(null)

    const [homeBtn, setHomeBtn] = useState(null)
    const [hotdealsBtn, setHotDealsBtn] = useState(null)
    const [protionBtn, setPromotionBtn] = useState(null)
    const [newproductsBtn, setNewproductsBtn] = useState(null)
    const [supportcenterBtn, setSupportcenterBtn] = useState(null)



    return (
        <NavBarContext.Provider
            value={{
                activeNavbar, setActiveNavbar,

                wishlistBtn, setWishlistBtn,
                mycartBtn, setMycartBtn,
                
                homeBtn, setHomeBtn,
                hotdealsBtn, setHotDealsBtn,
                protionBtn, setPromotionBtn,
                newproductsBtn, setNewproductsBtn,
                supportcenterBtn, setSupportcenterBtn

            }}>

            {children}
        </NavBarContext.Provider>
    )
}

export default NavBarContextProvider