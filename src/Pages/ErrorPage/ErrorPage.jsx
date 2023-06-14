import { Helmet } from "react-helmet";
import { Link, useRouteError } from 'react-router-dom';
// import './styles.css';
import Lottie from 'react-lottie';
import animationData from './../../assets/Lottie/error.json';

const ErrorPage = () => {

    const { error, status } = useRouteError()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='container flex flex-col justify-center items-center h-screen text-center py-32'>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
            <h1 className=' text-7xl font-extrabold mb-8'>Error {status || 404}</h1>
            <p className='lg:text-3xl'>{error?.message}</p>
            <button className='custom-btn mt-8'>
                <Link to='/'>Go Back to HomePage</Link>
            </button>
        </div>
    );
};

export default ErrorPage;