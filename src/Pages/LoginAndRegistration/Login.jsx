import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from './../../assets/logo.svg'
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet";


const Login = () => {
    const {signIn} = useAuth()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(()=>{
            navigate(from)
        })
    };

    return (
        <div>
            <Helmet>
                <title>The Taste Pot | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-[#FDF7EC] pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className="w-[600px]" src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl font-bold my-12">Please Login!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" {...register('email', { required: true })} />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register('password', { required: true })} />
                            </div>
                            <div className="form-control my-6">
                                <input className="custom-btn" type="submit" value="Login" />
                            </div>
                            <small>New here? <Link to='/register' className="text-red-600">Register</Link></small>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;