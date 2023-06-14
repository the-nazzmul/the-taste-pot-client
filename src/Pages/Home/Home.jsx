import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularCourses from "./PopularCourses";
import PopularInstructors from "./PopularInstructors";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Taste Pot | Home</title>
            </Helmet>
            <Banner></Banner>
            <Fade><PopularCourses></PopularCourses></Fade>
            <Fade><PopularInstructors></PopularInstructors></Fade>
        </div>
    );
};

export default Home;