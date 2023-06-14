import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import SingleClassCard from "../../Components/SingleclassCard";


const InstructorCourse = () => {
    const instructor = useLoaderData()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(`https://the-taste-pot-server.vercel.app/instructor/${instructor?.email}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="pt-20">
            <div className="py-20 text-center font-bold text-3xl bg-gradient-to-b from-orange-300 to-white rounded-b-xl">
                <img className="mx-auto rounded-full mb-4" src={instructor.image} alt="instructor" />
                <h2>{instructor.name}</h2>
                <div className="grid lg:grid-cols-3 gap-4 my-12 px-8">
                    {
                        courses.map(course =>
                            <SingleClassCard key={course._id} course={course}></SingleClassCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorCourse;