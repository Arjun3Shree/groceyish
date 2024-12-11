import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
    const navigate = useNavigate();
    return (
        <>
            <div className=" sm:grid md:flex flex-col-3 mt-16 mx-14 gap-[3rem] justify-center">

                <div className='h-[17rem] w-[47rem] bg-[#e5485533] overflow-hidden relative rounded-3xl'>
                    <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />
                    <div className='text-wrap absolute transform top-[8rem] left-[17rem] -translate-x-1/2 -translate-y-1/2 h-[13rem] w-[23rem]'>
                        <button disabled className=' ml-[2rem] 2xl:ml-[5rem] bg-red-500 rounded-sm font-quicksand-w600 text-white p-1 text-2xl'>Delay Delevery</button>
                        <p className=' -ml-9 2xl:ml-9 font-quicksand-w600 text-xl text-gray-700 mt-4 '>Product is not delevered yet, <br/>  Delevery Date is Over.</p>
                        <button onClick={()=> navigate('/support/delayindelevery')} className='ml-[4rem] 2xl:ml-[7rem] font-quicksand-w700 text-sm bg-red-600 p-2 rounded-lg text-white mt-[17%]'>Report Now <i className="fas fa-arrow-right text-white my-auto mx-1 "></i></button>
                    </div>
                </div>

                <div className='h-[17rem] w-[47rem] bg-[#f3f5783c] overflow-hidden relative rounded-3xl'>
                    <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />
                    
                    <div className='absolute transform top-[50%] left-[19rem] -translate-x-1/2 -translate-y-1/2 h-[80%] w-[65%]'>
                        <button disabled className=' -ml-16 2xl:ml-12 bg-yellow-500 rounded-sm font-quicksand-w600 text-white p-1 text-2xl'>After Delevery Issues</button>
                        <p className=' -ml-28 2xl:ml-0 font-quicksand-w600 text-xl text-gray-700 mt-4 '>Wrong Product Delevered or Product Missmatching.</p>
                        <button onClick={()=> navigate('/support/afterdelevery')} className='ml-0 2xl:ml-[7rem] font-quicksand-w700 text-sm bg-yellow-500 p-2 rounded-lg text-white mt-[17%]'>Report Now <i className="fas fa-arrow-right text-white my-auto mx-1 "></i></button>
                    </div>
                </div>



                <div className='h-[17rem] w-[47rem] bg-[#80f97e41] overflow-hidden relative rounded-3xl'>
                    <img src="src\assets\Images\bg-hero-img.png" className=' w-full h-[170%] opacity-25' alt="" />
                    
                    <div className='absolute transform top-[50%] left-[19rem] -translate-x-1/2 -translate-y-1/2 h-[80%] w-[65%]'>
                        <button disabled className=' -ml-20 2xl:ml-8 bg-green-500 rounded-sm font-quicksand-w600 text-white p-1 text-2xl'>Quality issues on Product</button>
                        <p className=' -ml-28 2xl:ml-0 font-quicksand-w600 text-xl text-gray-700 mt-4 '>Quality issues, Exp Product Delevered, Broken Packaging.</p>
                        <button onClick={()=> navigate('/support/qualityissue')} className='2xl:ml-[7rem] font-quicksand-w700 text-sm bg-green-500 p-2 rounded-lg text-white mt-[17%]'>Report Now <i className="fas fa-arrow-right text-white my-auto mx-1 "></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support