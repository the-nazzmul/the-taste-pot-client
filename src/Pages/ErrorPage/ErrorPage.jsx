import { MdOutlineError } from "react-icons/md";
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const { error, status } = useRouteError()
    return (
        <div className='flex flex-col justify-center items-center h-screen text-center py-32'>
           <MdOutlineError className='text-red-300 text-9xl'/>
            <h1 className=' text-7xl font-extrabold mb-8'>Error {status || 404}</h1>
            <p className='text-5xl'>{error?.message}</p>
            <button className='btn bg-indigo-600  border-0 mt-8'>
                <Link to='/'>Go Back to HomePage</Link>
            </button>
        </div>
    );
};

export default ErrorPage;