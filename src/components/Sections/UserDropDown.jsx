import React from 'react'
import { User, LogOut } from 'lucide-react';
import { logOutHandler } from '../../Handlers/authHandler';

function UserDropDown() {
    const userType = sessionStorage.getItem('userType');
    let mprd = false;
    if (userType == "seller") {
        mprd = true;
    }

    const logOutSession = async () => {
        await logOutHandler();
    }
    return (
        <>
            <div>
                <div className="fixed top-16 right-0 md:right-[8vh] z-50 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                    {/* User Profile Settings */}
                    <button
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <span className="text-gray-700 font-medium">User Profile Settings</span>
                    </button>

                    {/* Divider */}
                    <div className="border-t border-gray-100 my-1"></div>

                    {/* Manage Products */}
                    {mprd && <a
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors" href='/seller'
                    >
                        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                        <span className="text-gray-700 font-medium">Manage Products</span>
                    </a>
                    }


                    {/* Divider */}
                    <div className="border-t border-gray-100 my-1"></div>

                    {/* View Profile */}
                    <a
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors" href='#'
                    >
                        <i class="fa fa-id-badge" aria-hidden="true"></i>
                        <span className="text-gray-700 font-medium">View Profile</span>
                    </a>

                    <a className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors border rounded-md" href='/'>
                        <LogOut size={16} className="text-red-600" />
                        <button onClick={logOutSession} className="text-red-400 font-medium">Log Out</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default UserDropDown