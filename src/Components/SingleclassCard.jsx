

const SingleClassCard = ({course}) => {
    console.log(course);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={course.image} alt="course image" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-start text-start">
                    <h2 className="card-title text-lg">{course.classTitle}</h2>
                    <p className="text-sm">Available Seats: {course.availableSeats}</p>
                    <p className="text-sm">Price: ${course.price}</p>
                    <p className="text-sm">Instructor: {course.instructor}</p>
                    <div className="card-actions mt-6">
                        <button className="custom-btn">Select Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;