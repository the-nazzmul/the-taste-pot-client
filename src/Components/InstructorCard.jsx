import { Link } from "react-router-dom";


const InstructorCard = ({ instructor }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={instructor.image} alt="Instructor" className="rounded-full h-[300px]" />
            </figure>
            <div className="card-body items-center  text-center">
                <h2 className="card-title">{instructor.name}</h2>
                <small>{instructor.email}</small>
                <div className="card-actions mt-8">
                    <Link to={`/users/instructor/${instructor._id}`}><button className="custom-btn">View Classes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;