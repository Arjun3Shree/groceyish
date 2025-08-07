import React, { useState } from 'react'
import { loginHandler } from "../../Handlers/authHandler.js";
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [formdata, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginHandler(formdata);
        console.log("REsponse:", res);
        toast.success("Login successfull!!");
        setFormData({ email: "", password: "" });
        navigate(from, { replace: true });
    }

    return (
        <>
            <div className='bg-black h-full w-full'>
                <div className="flex gap-x-[3vw]">
                    <div className='h-screen w-full bg-[#FFF5E1D9] overflow-hidden relative rounded-sm flex items-center justify-center'>
                        <img src="src\assets\Images\bg-hero-img.png" className='w-full h-screen opacity-25' alt="" />
                        <img src="src\assets\Images\hero-ban-img.png" className='fixed transform -rotate-90 top-0 -left-[60px] h-[min(500px,60vh)] w-[min(550px,50vw)]' alt="" />
                        <img src="src\assets\Images\adv-two.png" className='fixed transform top-[502px] left-[1250px] -translate-x-1/2 -translate-y-1/2 h-[min(500px,60vh)] w-[min(580px,50vw)]' alt="" />
                        <div className='absolute transform top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 h-[80%] w-[65%] flex items-center justify-center'>
                            <div className="max-w-[32rem] mx-auto border-8 border-gray-300 rounded-lg p-8 bg-white ml-[29rem]">
                                <h2 className="mt-2 text-center text-3xl font-medium text-green-700 mb-8">
                                    Sign in to your account
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <p className="text-left text-xl mb-2 ml-6">Gmail</p>
                                        <div className="text-center">
                                            <input
                                                className="rounded-lg h-10 w-[19rem] border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                type="text"
                                                name="email"
                                                required
                                                value={formdata.email}
                                                onChange={handleChange}
                                                placeholder="Enter your Gmail address"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-left text-xl mb-2 ml-6">Password</p>
                                        <div className="text-center">
                                            <input
                                                className="rounded-lg h-10 w-[19rem] border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                type="password"
                                                name="password"
                                                required
                                                value={formdata.password}
                                                onChange={handleChange}
                                                placeholder="Enter your password"
                                            />
                                        </div>
                                    </div>


                                    <div className="text-center mb-6">
                                        <button
                                            className="w-48 py-3 px-4 text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center">
                                    <p className="text-gray-600">
                                        Are you new? <a className="text-green-600 font-semibold cursor-pointer hover:text-green-800 transition duration-200" href='/register'>Register here</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login