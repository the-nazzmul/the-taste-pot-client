import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import InstructorCard from "../../Components/instructorCard";


const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    const courses = useLoaderData()

    useEffect(() => {
        fetch('https://the-taste-pot-server.onrender.com/users/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const instructorEnrollments = instructors.map((instructor) => {
        const totalEnrollment = courses
            .filter((course) => course.instructorEmail === instructor.email)
            .reduce((sum, course) => sum + course.enrolled, 0);
        return { ...instructor, totalEnrollment };
    });

    const sortedInstructors = instructorEnrollments.sort(
        (a, b) => b.totalEnrollment - a.totalEnrollment
    );

    const top6Instructors = sortedInstructors.slice(0, 6);


    return (
      <div className="mt-20">
        <h1 className="mt-12 text-center font-bold text-5xl">
          Popular Instructors
        </h1>
        <p className="my-12 w-3/4 mx-auto text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          perspiciatis beatae maxime et commodi dolorum atque possimus aperiam
          quaerat, doloremque laboriosam. Voluptates, non placeat, praesentium,
          aliquid odio quidem similique facilis suscipit corporis sit quod magni
          ex fugiat animi molestiae voluptas et ipsam. Unde est ad distinctio
          dignissimos molestiae fuga sequi.
        </p>
        <div className="grid lg:grid-cols-3 gap-4 my-12 px-8">
          {top6Instructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      </div>
    );
};

export default PopularInstructors;