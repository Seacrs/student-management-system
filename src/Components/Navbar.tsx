import { useTheme } from "../Context/hooks/useTheme";
import { NavLink } from "react-router";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

function Navbar(){
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="">
            <div className="px-8 py-2 grid grid-cols-3 gap-12">
                <div>
                    <h1 className="text-2xl">smgt</h1>
                </div>
                <div className="justify-self-center flex justify-center items-center gap-5">
                    <NavLink
                        to="/"
                        className="font-montserrat font-semibold"
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/students"
                        className="font-montserrat font-semibold"
                    >
                        Students
                    </NavLink>
                    <NavLink
                        to="/courses"
                        className="font-montserrat font-semibold"
                    >
                        Courses
                    </NavLink>
                </div>
                <div className="justify-self-end rounded-4xl max-w-10 flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <button onClick={toggleTheme} >
                        <img src={theme ? sun : moon} alt="" className="w-8" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;