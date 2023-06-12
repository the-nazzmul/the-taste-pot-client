import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleLogin()
            .then((res) => {
                if (res.user.email) {
                    const saveUser = { name: res.user.displayName, email: res.user.email, image: res.user.photoURL, role: 'student' }
                    axios.post(`https://the-taste-pot-server.vercel.app/users`, saveUser)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Registration Successful!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                            navigate(from)
                        })
                }
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