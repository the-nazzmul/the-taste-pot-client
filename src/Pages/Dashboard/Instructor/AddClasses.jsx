import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet";

const image_hosting_token = import.meta.env.VITE_IMAGE_HOSTING_TOKEN

const AddClasses = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [disable, setDisable] = useState(false)
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.price = parseFloat(data.price)
        data.availableSeats = parseFloat(data.availableSeats)
        data.enrolled = parseFloat(0)
        data.instructor = user?.displayName
        data.instructorEmail = user?.email
        Swal.fire({
            title: 'Are you sure?',
            text: "Have you rechecked all the information?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                setDisable(true)
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
                            data.status = 'pending';
                            axiosSecure.post('/classes', data)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        Swal.fire(
                                            'Success!',
                                            'Your class has been added!',
                                            'success'
                                        )
                                        setDisable(false)
                                        reset()
                                    }
                                })
                        }
                    })


            }
        })
    };
    return (
        <div className="w-full h-full my-20 px-12">
            <Helmet>
                <title>The Taste Pot | Add Classes</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center my-8">Add Classes</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name of the Class*</span>
                    </label>
                    <input type="text" placeholder="Class Name" className="input input-bordered w-full " {...register('classTitle', { required: true })} />
                </div>
                <div className="lg:flex gap-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" step="0.01" placeholder="Price" className="input input-bordered w-full max-w-xs" {...register('price', { required: true })} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register('availableSeats', { required: true })} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image*</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register('image', { required: true })} />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description*</span>
                    </label>
                    <textarea placeholder="Description" className="textarea textarea-bordered textarea-xs w-full"{...register('description', { required: true })}  ></textarea>
                </div>
                <div className="lg:flex gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name of the Instructor*</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full " {...register('instructor')} readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email of the Instructor*</span>
                        </label>
                        <input type="text" defaultValue={user?.email} className="input input-bordered w-full " {...register('instructorEmail')} readOnly />
                    </div>
                </div>
                <input disabled={disable} className="custom-btn mt-8" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClasses;