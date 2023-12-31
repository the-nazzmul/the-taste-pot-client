import { NavLink, Outlet } from "react-router-dom";
import logo from './../assets/logo.svg'
import useUserRole from "../Hooks/useUserRole";
import useSelectedCourse from "../Hooks/useSelectedCourse";
import { Helmet } from "react-helmet";


const Dashboard = () => {
    const [userRole] = useUserRole()
    const [selectedCourses] = useSelectedCourse()


    return (
        <div>
            <Helmet>
                <title>The Taste Pot | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    {/* TODO: NEED to work on UI */}
                    <label htmlFor="my-drawer-2" className="custom-btn drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#FDF7EC] text-base-content">
                        {/* Sidebar content here */}
                        <img className="my-12" src={logo} alt="logo" />
                        {
                            userRole === 'admin' &&
                            <>
                                <li><NavLink to='/dashboard/manageUsers'>Manage Users</NavLink></li>
                                <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li>
                            </>
                        }
                        {
                            userRole === 'instructor' &&
                            <>
                                <li><NavLink to='/dashboard/myClasses'>My Classes</NavLink></li>
                                <li><NavLink to='/dashboard/addClasses'>Add Classes</NavLink></li>
                            </>
                        }
                        {
                            userRole === 'student' &&
                            <>
                                <li><NavLink to='/dashboard/selectedClasses'>
                                    My Classes
                                    <div className="badge">{selectedCourses.length}</div>
                                </NavLink></li>
                                <li><NavLink to='/dashboard/enrolledClasses'>Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'>Payment History</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/instructors'>Instructors</NavLink></li>
                        <li><NavLink to='/Courses'>Courses</NavLink></li>
                    </ul>
                        
                </div>
            </div>
        </div>
    );
};

export default Dashboard;