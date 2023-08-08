import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularCourses from "./PopularCourses";
import PopularInstructors from "./PopularInstructors";
import { Fade } from "react-awesome-reveal";
import LatestBlogs from "./LatestBlogs";
import SubBanner from "../../Components/SubBanner";
import Events from "./Events/Events";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Taste Pot | Home</title>
            </Helmet>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <Events></Events>
            <Fade><PopularCourses></PopularCourses></Fade>
            <Fade><PopularInstructors></PopularInstructors></Fade>
            <LatestBlogs></LatestBlogs>
        </div>
    );
};

export default Home;