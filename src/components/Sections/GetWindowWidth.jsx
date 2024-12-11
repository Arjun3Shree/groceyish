import React, { useState, useEffect } from 'react'

function Mywindowwidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const WindowWidthDisplay = () => {

        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        },[])
    }

    return (

        <>
        <div className='w-full h-16' style={{ color: "red", backgroundColor: "#C5EAD9" }}> MyWindowWidth= {windowWidth}</div>

        </>
        
    )
}

export default Mywindowwidth