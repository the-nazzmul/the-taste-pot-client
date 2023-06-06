import { useState } from "react";


const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleModeToggle = () => {
        setDarkMode(!darkMode)

    }
    return (
        <div className={`${darkMode ? 'dark bg-grey-500 text-white' : 'bg-red-200'}  h-screen`}>
            <h1>Layout</h1>
            {
                darkMode ?
                    <button onClick={handleModeToggle}>Dark</button> :
                    <button onClick={handleModeToggle}>Light</button>
            }
        </div>
    );
};

export default MainLayout;