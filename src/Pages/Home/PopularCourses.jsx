import { useLoaderData } from "react-router-dom";
import SingleClassCard from "../../Components/SingleclassCard";

const PopularCourses = () => {
    const courses = useLoaderData()
    const sortedCourses = courses.sort((a, b) => b.enrolled - a.enrolled);
    const topSix = sortedCourses.slice(0, 6)

    return (
        <div className="mt-20">
            <h1 className="my-12 text-center font-bold text-5xl">Popular Courses</h1>
            <div className="grid lg:grid-cols-3 gap-4 my-12 px-8">
                {
                    topSix.map(course =>
                        <SingleClassCard key={course._id} course={course}></SingleClassCard>
                    )
                }
            </div>
        </div>
    );
};

export default PopularCourses;