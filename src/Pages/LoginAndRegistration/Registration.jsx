import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from './../../assets/logo.svg'
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import axios from "axios";


const image_hosting_token = import.meta.env.VITE_IMAGE_HOSTING_TOKEN

const Registration = () => {
    const { createUser, updateUserProfile } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const navigate = useNavigate()

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(() => {
                const formData = new FormData();
                formData.append('image', data.image[0])

                fetch(image_hosting_url, {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(imageRes => {
                        if (imageRes.success) {
                            data.image = imageRes.data.display_url;
                            updateUserProfile(data.name, data.image)
                                .then(() => {
                                    const saveUser = { name: data.name, email: data.email, image: data.image, role: 'student' }
                                    axios.post(`http://localhost:4000/users`, saveUser)
                                        .then(res => {
                                            if (res.data.insertedId) {
                                                Swal.fire({
                                                    position: 'center',
                                                    icon: 'success',
                                                    title: 'Registration Successful!',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                navigate('/')
                                            }
                                        })
                                })
                        }
                    })
            })

    };

    return (
        <div>
            <div className="hero min-h-screen bg-[#FDF7EC] pt-8">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className="w-[600px]" src={logo} alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold my-4">Register!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" {...register('name', { required: true })} />
                                {errors.name && <p className="text-red-600">Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" {...register('email', { required: true })} />
                                {errors.email && <p className="text-red-600">Email is required</p>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-red-600">Password must be at least 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must not exceed 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase letter, one lowercase letter, one special character and one number</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" className="input input-bordered"  {...register("confirm_password", {
                                    required: true,
                                    validate: (value) => {
                                        if (watch('password') != value) {
                                            return "Your passwords do no match";
                                        }
                                    },
                                })} />
                                {errors.confirm_password && <p className="text-red-600">Both passwords must match</p>}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Upload Image</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register('image', { required: true })} />
                                {errors.image && <p className="text-red-600">Must Upload image</p>}
                            </div>


                            <div className="form-control my-6">
                                <input className="custom-btn" type="submit" value="Register" />
                            </div>
                            <p>Already Have an account? <Link to='/login' className="text-red-600">Login</Link></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;