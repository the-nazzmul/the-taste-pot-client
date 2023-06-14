import { useLoaderData } from "react-router-dom";
import SingleClassCard from "../../Components/SingleclassCard";

const PopularCourses = () => {
    const courses = useLoaderData()
    const sortedCourses = courses.sort((a, b) => b.enrolled - a.enrolled);
    const topSix = sortedCourses.slice(0, 6)
    console.log(topSix);

    return (
        <div className="mt-20">
            <h1 className="text-3xl font-bold text-center my-12">Popular Courses</h1>
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