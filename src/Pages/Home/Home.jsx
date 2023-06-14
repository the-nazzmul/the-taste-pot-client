import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularCourses from "./PopularCourses";
import PopularInstructors from "./PopularInstructors";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Taste Pot | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;