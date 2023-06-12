import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../../Pages/Spinner/LoadingSpinner";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;