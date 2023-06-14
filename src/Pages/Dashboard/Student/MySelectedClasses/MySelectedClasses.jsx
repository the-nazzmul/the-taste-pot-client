import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSelectedCourse from "../../../../Hooks/useSelectedCourse";
import { Helmet } from "react-helmet";

const MySelectedClasses = () => {
    const [selectedCourses, refetch] = useSelectedCourse()
    const [axiosSecure] = useAxiosSecure()

    console.log("jhamela", selectedCourses);
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
                axiosSecure.delete(`/selectedClasses/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire(
                                'Deleted!',
                                'Deleted from your Selected Courses',
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
            <Helmet>
                <title>The Taste Pot | Selected Classes</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center my-8">My selected classes</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#E6820C] text-white">
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedCourses.map((course, index) =>
                                <tr key={course._id}>
                                    <td>{index + 1}</td>
                                    <td>{course.classTitle}</td>
                                    <td>{course.instructor}</td>
                                    <td>$ {course.price}</td>
                                    <td>{course.availableSeats}</td>
                                    <td>
                                        <Link to={`/dashboard/payment/${course._id}`}><button className="btn bg-green-500 text-xl text-white"> Pay <FaMoneyCheckAlt></FaMoneyCheckAlt></button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { handleDelete(course._id) }} className="btn bg-red-500 text-xl text-white"><RiDeleteBin6Fill></RiDeleteBin6Fill></button>
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

export default MySelectedClasses;