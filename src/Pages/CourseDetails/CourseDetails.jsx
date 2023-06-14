import { useLoaderData } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const CourseDetails = () => {
    const course = useLoaderData()
    const { _id, classTitle, image, instructorEmail, price, instructor, availableSeats } = course
    const { user } = useAuth()
    const [userRole] = useUserRole()
    const [axiosSecure] = useAxiosSecure()

    const handleSelect = () => {
        Swal.fire({
            title: 'Do you want to select the course?',
            showCancelButton: true,
            confirmButtonText: 'Select',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedItem = { email: user?.email, courseId: _id, classTitle, image, instructorEmail, price, instructor, availableSeats }
                axiosSecure.post(`/selectedClasses`, selectedItem)
                    .then(res => {
                        if(res.data.message){
                            Swal.fire({
                                position: 'center',
                                icon: 'warning',
                                title: 'You have already selected this course',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        else if (res.data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Course has been selected',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        })
    }

    return (
        <div className="card bg-base-100 shadow-xl pt-32 mb-8">
            <figure><img src={course.image} alt="image" className="rounded" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course.classTitle}</h2>
                <p className="text-sm"><span className="font-bold">Available Seats: </span>{course.availableSeats}</p>
                <p className="text-sm"><span className="font-bold">Price: $</span>{course.price}</p>
                <p className="text-sm"><span className="font-bold">Instructor: </span>{course.instructor}</p>
                <p className="text-sm"><span className="font-bold">Description: </span>{course.description}</p>
                <div className="card-actions justify-center mt-8">
                    <button onClick={handleSelect} disabled={userRole === 'admin' || userRole === 'instructor' || !user || course.availableSeats === 0} className="custom-btn">Select Course</button>
                </div>
                {
                    (userRole === 'admin' || userRole === 'instructor') || !user &&
                    <small className="text-red-600 text-center"><em>Please Login to select the course.</em></small>
                }
            </div>
        </div>
    );
};

export default CourseDetails;