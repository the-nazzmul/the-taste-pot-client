import { format } from "date-fns";
import useEnrolled from "../../../../Hooks/useEnrolled";


const EnrolledClasses = () => {
    const [enrolledCourses] = useEnrolled()
    
    return (
        <div className="w-full h-full px-12 mt-20">
            <h2 className="text-3xl font-bold text-center my-8">Enrolled Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="bg-[#E6820C] text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Enrollment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledCourses.map((course, index) =>
                                <tr key={course._id}>
                                    <td>{index + 1}</td>
                                    <td>{course.courseName}</td>
                                    <td>{course.instructor}</td>
                                    <td>{format(new Date(course.date), 'dd-MM-yy')}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;