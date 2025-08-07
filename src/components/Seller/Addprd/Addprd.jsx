import React, { useState } from 'react'
import { createNewProductHandler } from "../../../Handlers/productHandler.js";
import toast from 'react-hot-toast';
function Addprd() {
    const [file, setFile] = useState(null);
    const [prdData, setPrdData] = useState({
        name: "",
        price: "",
        quantity: "",
        availablequant: "",
        typequant: "Kg",
        imagePath: null,
        category: "grocery"
    })
    const resetPrdData = () => {
        setPrdData({
        name: "",
        price: "",
        quantity: "",
        availablequant: "",
        typequant: "Kg",
        imagePath: null,
        category: "grocery"
    });
    }

    const handleFileChange = (event) => {
        const imageFile = event.target.files[0];
        setFile(imageFile);
    }

    const handleChange = (e) => {
        setPrdData({
            ...prdData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!prdData.name || !prdData.price || !prdData.quantity || !prdData.availablequant){
            toast.error("Enter all required fields..!");
            return;
        }
        const formData = new FormData();
        formData.append('name', prdData.name);
        formData.append('price', prdData.price);
        formData.append('quantity', prdData.quantity);
        formData.append('availablequant', prdData.availablequant);
        formData.append('typequant', prdData.typequant);
        formData.append('category', prdData.category);
        formData.append('file', file);

        const response = await createNewProductHandler(formData);
        if(response.status === 201){
            console.log("Page: ", response);
            resetPrdData();
        }else{
            toast.error("Something wend Wrong!");
        }
    }

    return (
        <>
            <div className='min-h-screen bg-gray-50 py-8 px-4'>
                <div className="max-w-4xl mx-auto">
                    <div className='text-center text-3xl font-semibold text-gray-500 mb-8'>Add Product Deatails</div>
                    <form onSubmit={handleSubmit}>
                        <div className='bg-white rounded-lg shadow-md p-6 md:p-8'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                                <div className='flex flex-col'>
                                    <label className='text-lg font-medium text-gray-700 mb-2' htmlFor="name">Product Name:</label>
                                    <input onChange={handleChange} value={prdData.name} required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter product name" type="text" name="name" id="name" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="price">Product Price:</label>
                                    <input onChange={handleChange} value={prdData.price} required
                                        type="text" name="price" id="price" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter price" />
                                </div>
                                <div className='flex flex-col md:col-span-2 lg:col-span-1'>
                                    <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="name">Price for Quantity:</label>
                                    <input onChange={handleChange} value={prdData.quantity} required
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" name="quantity" id="quantity" placeholder="Quantity" />
                                    <select onChange={handleChange} value={prdData.typequant} required
                                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" name="typequant" id="typequant">
                                        <option selected value="Kg">Kg</option>
                                        <option value="Liter">Liter</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                <div className='flex flex-col'>
                                    <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="">Available Quantity:</label>
                                    <input onChange={handleChange} value={prdData.availablequant} required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" name="availablequant" id="availablequant" placeholder="Enter available quantity" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="category">Category:</label>
                                    <select onChange={handleChange} value={prdData.catagory} required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" name="category" id="category">
                                        <option value="grocery">Grocery</option>
                                        <option value="drinks">Drinks</option>
                                        <option value="fruite">Frute</option>
                                        <option value="vegi">Veg</option>
                                        <option value="non-veg">Non-veg</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-lg font-medium text-gray-700 mb-4" htmlFor="image">
                                    Provide a Product Image
                                </label>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <label
                                        htmlFor="image"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-10 h-10 mb-3 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                                        </div>
                                        <input
                                            onChange={handleFileChange}
                                            required
                                            id="image"
                                            name="imagePath"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-green-400 text-white font-medium text-lg rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addprd