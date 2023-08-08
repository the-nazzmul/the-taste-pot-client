import { useLoaderData } from "react-router-dom";
import SingleClassCard from "../../Components/SingleclassCard";

const PopularCourses = () => {
    const courses = useLoaderData()
    const sortedCourses = courses.sort((a, b) => b.enrolled - a.enrolled);
    const topSix = sortedCourses.slice(0, 6)

    return (
        <div className="mt-20">
            <h1 className="mt-12 text-center font-bold text-5xl">Popular Courses</h1>
            <p className="my-12 w-3/4 text-center mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perspiciatis beatae maxime et commodi dolorum atque possimus aperiam quaerat, doloremque laboriosam. Voluptates, non placeat, praesentium, aliquid odio quidem similique facilis suscipit corporis sit quod magni ex fugiat animi molestiae voluptas et ipsam. Unde est ad distinctio dignissimos molestiae fuga sequi.</p>
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