import React from 'react'

function DelayInDelevery() {
    return (
        <>
            <div className="h-[20rem] mt-8 flex justify-center">
                <form action="" method="post">
                    <div className="flex">
                        <div className='text-center'>
                            <label className='font-quicksand-w500 text-xl mr-5' htmlFor="">Order Id</label>
                            <input className='font-quicksand-w500 text-[#851751] border border-gray-500' type="text" name="orderId" id="" />
                            <label className='ml-4 text-xl font-quicksand-w500' htmlFor="">Order Date: </label>
                            <input className='font-quicksand-w500 ml-2 border border-gray-400' type="date" name="" id="" />
                            <label className='ml-5 text-xl font-quicksand-w500' htmlFor="">Clamed Date:</label>
                            <input className='font-quicksand-w500 ml-4 border border-gray-400' type="date" name="" id="" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-7">
                        <input className='bg-[#77a150] font-quicksand-w700 text-white text-lg rounded-sm w-24 h-8' type="submit" value="Submit" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default DelayInDelevery