import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import PopularCourses from "./PopularCourses";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Taste Pot | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;