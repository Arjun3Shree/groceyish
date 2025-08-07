import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
    const isLoggedIn = window.sessionStorage.getItem("isloggedIn");
    const location = useLocation();
    console.log("Location: ", location);

    if (isLoggedIn !== 'true') {
        return <Navigate to="/login" state={{ from: location}} replace />;
    }
    return <Outlet/>;
}
export default ProtectedRoute;