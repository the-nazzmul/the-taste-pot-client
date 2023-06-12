import { useLoaderData } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import useAuth from "../../Hooks/useAuth";


const CourseDetails = () => {
    const course = useLoaderData()
    const { user } = useAuth()
    const [userRole] = useUserRole()

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
                    <button disabled={userRole === 'admin' || userRole === 'instructor' || !user || course.availableSeats === 0} className="custom-btn">Select Course</button>
                </div>
                {
                    !user || userRole === 'admin' || userRole === 'instructor' &&
                    <small className="text-red-600 text-center"><em>Please Login to select the course.</em></small>
                }
            </div>
        </div>
    );
};

export default CourseDetails;