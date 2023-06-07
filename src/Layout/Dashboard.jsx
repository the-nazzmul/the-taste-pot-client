import { NavLink, Outlet } from "react-router-dom";
import logo from './../assets/logo.svg'


const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#FDF7EC] text-base-content">
                        {/* Sidebar content here */}
                        <img className="my-12" src={logo} alt="logo" />
                        <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li>
                        <li><NavLink to='/dashboard/manageUsers'>Manage Users</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/instructors'>Instructors</NavLink></li>
                        <li><NavLink to='/classes'>Classes</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;