import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateClass = () => {
    const course = useLoaderData()
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [disable, setDisable] = useState(false)


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setDisable(true)
        data.id = course._id;
        data.price = parseFloat(data.price)
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Update!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch('/myClasses', data)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire(
                                'Success!',
                                'Your Course has been updated.',
                                'success'
                            )
                            setDisable(false)
                        }

                    })

            }
        })
    }
    return (
        <div className="w-full h-full my-20 px-12">
            <h2 className="text-3xl font-bold text-center my-8">Update Course</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name of the Class*</span>
                    </label>
                    <input type="text" placeholder="Class Name" className="input input-bordered w-full " defaultValue={course.classTitle} readOnly />
                </div>
                <div className="lg:flex gap-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" step="0.01" placeholder="Price" className="input input-bordered w-full max-w-xs" {...register('price', { required: true })} defaultValue={course.price} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={course.availableSeats} readOnly />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description*</span>
                    </label>
                    <textarea placeholder="Description" className="textarea textarea-bordered textarea-xs w-full"{...register('description')} defaultValue={course.description} ></textarea>
                </div>
                <div className="lg:flex gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name of the Instructor*</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full " readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email of the Instructor*</span>
                        </label>
                        <input type="text" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    </div>
                </div>
                <input disabled={disable} className="custom-btn mt-8" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default UpdateClass;