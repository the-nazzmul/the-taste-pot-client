import { Link } from "react-router-dom";


const SingleClassCard = ({course}) => {
    return (
        <div>
            <div className={`${course.availableSeats === 0 ? 'bg-orange-600': 'bg-base-100'} card shadow-xl`}>
                <figure className="px-10 pt-10">
                    <img src={course.image} alt="course image" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-start text-start">
                    <h2 className="card-title text-lg">{course.classTitle}</h2>
                    <p className="text-sm"><span className="font-bold">Available Seats: </span>{course.availableSeats}</p>
                    <p className="text-sm"><span className="font-bold">Price: $</span>{course.price}</p>
                    <p className="text-sm"><span className="font-bold">Instructor: </span>{course.instructor}</p>
                    <div className="card-actions mt-6">
                       <Link to={`/courses/${course._id}`}> <button className="custom-btn">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;