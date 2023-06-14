import { Helmet } from "react-helmet";
import InstructorCard from "../../Components/instructorCard";
import { useEffect, useState } from "react";

const Instructors = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/users/instructors')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="pt-20">
            <Helmet>
                <title>The Taste Pot | Instructors</title>
            </Helmet>
            <h2 className="py-20 text-center font-bold text-3xl bg-gradient-to-b from-orange-300 to-white rounded-b-xl">Meet our Instructors</h2>
            <div className="grid lg:grid-cols-3 gap-4 px-12 my-20">
                {
                    users.map(user =>
                        <InstructorCard key={user._id} instructor={user}></InstructorCard>
                    )
                }
            </div>

        </div>
    );
};

export default Instructors;