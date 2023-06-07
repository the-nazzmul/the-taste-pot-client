import { useState } from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false)

    // const handleModeToggle = () => {
    //     setDarkMode(!darkMode)
    // }

    return (
        <div className={`${darkMode ? 'dark bg-grey-500 text-white' : 'bg-white'}  h-screen`}>

            <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>



            {/* {
                darkMode ?
                    <button onClick={handleModeToggle}>Dark</button> :
                    <button onClick={handleModeToggle}>Light</button>
            } */}
        </div>
    );
};

export default MainLayout;