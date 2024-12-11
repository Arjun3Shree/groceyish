import React from 'react'

function AfterDelevery() {
    return (
        <>
            <div className="h-[20rem] flex mt-8 justify-center">
                <form action="" method="post">
                    <div className="flex">
                        <label className='font-quicksand-w500 text-xl mr-4' htmlFor="">Order Id</label>
                        <input className='border border-gray-500' type="text" name="" id="" />

                        <label className='ml-8 font-quicksand-w500 text-xl mr-4' htmlFor="">Order Id or Name in Package</label>
                        <input className='border border-gray-500' type="text" name="" id="" />

                        <label className='ml-8 font-quicksand-w500 text-xl mr-4' htmlFor="">Recived Date:</label>
                        <input className='font-quicksand-w500' type="date" name="" id="" />
                    </div>
                    <div className="flex justify-center mt-7">
                        <input className='bg-[#77a150] font-quicksand-w700 text-white text-lg rounded-sm w-24 h-8' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AfterDelevery