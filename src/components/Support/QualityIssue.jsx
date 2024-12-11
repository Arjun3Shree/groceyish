import React from 'react'

function QualityIssue() {
    const productId = [
        { value: 'Apple27S2U', label: 'Apple27S2U' },
        { value: 'Banana12F23', label: 'Banana12F23' },
        { value: 'Cherry34D11', label: 'Cherry34D11' }
    ];

    const typeOfIssue = [
        { value: 'oldstock', label: 'Old Stock Exp Product' },
        { value: 'lessquantity', label: 'Quantity Less' },
        { value: 'loosepackageing', label: 'Loose Packaging' }
    ];

    return (
        <>
            <div className="h-[20rem] flex justify-center mt-7">
                <form action="" method="post">
                    <div className="flex">
                        <label className='font-quicksand-w500 text-xl mr-4' htmlFor="">Order Id</label>
                        <input className='font-quicksand-w500 text-[#851751] border border-gray-400' type="text" name="" id="" />

                        <label className='font-quicksand-w500 text-xl mr-4 ml-6' htmlFor="">Product Id</label>
                        <select className='font-quicksand-w500 text-lg border border-gray-400' name="" id="">
                            {productId.map((product) => (
                                <option key={product.value} value={product.value}>
                                    {product.label}
                                </option>
                            ))}
                        </select>

                        <label className='font-quicksand-w500 text-xl mr-4 ml-6' htmlFor="">Type of Issue</label>
                        <select className='font-quicksand-w500 text-lg border border-gray-400' name="" id="">
                            {typeOfIssue.map((typeodisu) => (
                                <option key={typeodisu.value} value={typeodisu.value}>
                                    {typeodisu.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-center mt-7">
                        <input className='bg-[#77a150] font-quicksand-w700 text-white text-lg rounded-sm w-24 h-8' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default QualityIssue