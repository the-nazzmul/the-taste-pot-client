import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(()=>{
            // TODO: Need to save user to the DB
            navigate(from)
        })
    }
    return (
        <div >
            <div className="divider">OR</div>
            <div className="flex justify-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle className="text-3xl"></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;