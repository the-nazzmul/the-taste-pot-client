import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Taste Pot | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;