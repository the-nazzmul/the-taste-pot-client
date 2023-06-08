import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from './../../assets/logo.svg'
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


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
                        if(imageRes.success){
                            data.image = imageRes.data.display_url;
                            updateUserProfile(data.name, data.image)
                            .then(()=>{
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Registration Successful!',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                                navigate('/')
                            })
                        }
                    })
            })
        console.log(data);

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
                            </div>
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
                                <p className="text-red-600">{errors.confirm_password?.message}</p>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Upload Image</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register('image', { required: true })} />
                            </div>


                            <div className="form-control my-6">
                                <input className="custom-btn" type="submit" value="Register" />
                            </div>
                            <small>Already Have an account? <Link to='/login' className="text-red-600">Login</Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;