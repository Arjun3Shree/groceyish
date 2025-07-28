import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from "../../Utils/cookieHelper.js";
import Wishlist from '../WishList/Wishlist.jsx';

const PrivateRoute = ({ children }) => {
    const accessToken = getCookie('accessToken');
    const isAuthenticated = !!accessToken;
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }
    return children ? children : <Outlet />;
}

export default PrivateRoute;