import { Link, NavLink } from "react-router-dom";
import logo from './../assets/logo.svg'
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import { useEffect, useState } from "react";
import sun from './../assets/logo/sun.png'
import moon from './../assets/logo/moon.png'


const NavBar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const { user, logOut } = useAuth()
    const [userRole] = useUserRole()
    const navigationElement = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to='/courses'>Courses</NavLink></li>
        {
            userRole === 'student' && <li><NavLink to='/dashboard/selectedClasses'>Dashboard</NavLink></li>
        }
        {
            userRole === 'instructor' && <li><NavLink to='/dashboard/myClasses'>Dashboard</NavLink></li>
        }
        {
            userRole === 'admin' && <li><NavLink to='/dashboard/manageUsers'>Dashboard</NavLink></li>
        }

    </>

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div>
            <div className="navbar bg-[#FDF7EC] container absolute z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navigationElement}
                        </ul>
                    </div>
                    <Link to='/'><img className="w-[200px]" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigationElement}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="avatar mr-2">
                                    <div className="w-14 border-4 border-white rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="custom-btn">Logout</button>
                            </> :
                            <Link to='/login'><button className="custom-btn">Login</button></Link>
                    }
                    <button className="btn btn-circle btn-ghost ml-2">
                        <label className="swap swap-rotate w-12 h-12">
                            <input
                                type="checkbox"
                                onChange={handleToggle}
                                checked={theme === "light" ? false : true}
                            />
                            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
                            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
                        </label>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;