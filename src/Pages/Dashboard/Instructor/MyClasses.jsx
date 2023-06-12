import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: myClasses = [], refetch } = useQuery({
        queryKey: [user?.email],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSecure(`/myClasses/${user?.email}`)
            return result.data
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/myClasses/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'The Class been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full h-full px-12 mt-20">
            <h2 className="text-3xl font-bold text-center my-8">My Classes</h2>
            <div className="overflow-x-auto">
                <table className="table mt-8">
                    <thead>
                        <tr className="bg-[#E6820C] text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Available Seats</th>
                            <th>Enrolled Students</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Update</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((course, index) =>
                                <tr key={course._id}>
                                    <td>{index + 1}</td>
                                    <td>{course.classTitle}</td>
                                    <td>{course.availableSeats}</td>
                                    <td>{course.enrolled}</td>
                                    <td>${course.price}</td>
                                    <td>{course.status}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(course._id)} className="btn bg-red-500 text-2xl text-white"><RiDeleteBin5Fill></RiDeleteBin5Fill></button>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateClasses/${course._id}`}><button className="btn bg-green-500 text-xl"><GrUpdate></GrUpdate></button></Link>
                                    </td>
                                    <td>
                                        {course.feedback ?
                                            <>
                                                <button className="custom-btn" onClick={() => window.my_modal_5.showModal()}>Feedback</button>
                                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                    <form method="dialog" className="modal-box">
                                                        <h3 className="font-bold text-center text-lg">Feedback!</h3>
                                                        <p className="py-4">{course?.feedback}</p>
                                                        <div className="modal-action">
                                                            <button className="btn">Close</button>
                                                        </div>
                                                    </form>
                                                </dialog>
                                            </> : <></>

                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyClasses;