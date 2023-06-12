import { Navigate, useLocation } from "react-router";
import useUserRole from "../../Hooks/useUserRole";
import LoadingSpinner from "../../Pages/Spinner/LoadingSpinner";
import useAuth from "../../Hooks/useAuth";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [userRole, userLoading] = useUserRole()
    const location = useLocation();

    if(loading || userLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user && userRole === 'instructor') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;