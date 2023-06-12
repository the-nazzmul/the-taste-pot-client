
import SingleClassCard from "../../Components/SingleclassCard";
import { useEffect, useState } from "react";


const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch("https://the-taste-pot-server.vercel.app/classes")
            .then(res => res.json())
            .then((data) => {
                setClasses(data)
            })
    }, [])
    return (
        <div className="pt-20">
            <h2 className="py-20 text-center font-bold text-3xl bg-gradient-to-b from-orange-300 to-white rounded-b-xl">Our Courses</h2>

            <div className="grid lg:grid-cols-3 gap-4 my-12 px-8">
                {
                    classes.map(singleClass =>
                        <SingleClassCard key={singleClass._id} course={singleClass}></SingleClassCard>
                    )
                }
            </div>

        </div>
    );
};

export default Classes;