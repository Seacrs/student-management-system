import { useTheme } from "../Context/hooks/useTheme";
import { NavLink } from "react-router";
import { useState } from "react";
import clsx from "clsx";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import bars from "../assets/bars.svg";
import exit from "../assets/exit.svg";

function Navbar(){
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        {to: "/", label: "Register"},
        {to: "/students", label: "Students"},
        {to: "/courses", label: "Courses"}
    ]
    return (
        <div className="">
            <div className="relative z-50 px-8 py-2 grid grid-cols-3 items-center">

                <h1 className="text-2xl">smgt</h1>

                <div className="hidden md:flex justify-self-center justify-center items-center gap-5">
                    {navLinks.map(({to, label})=>(
                        <NavLink
                            key={to}
                            to={to}
                            className="font-montserrat font-semibold"
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                <div className="justify-self-center md:justify-self-end rounded-4xl max-w-10 flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <button onClick={toggleTheme} >
                        <img src={theme ? sun : moon} alt="" className="w-8" />
                    </button>
                </div>

                <button
                    className="md:hidden justify-self-end flex flex-col gap-1.5 p-2"
                    onClick={()=> setMenuOpen(!menuOpen)}
                >
                    <img src={menuOpen ? exit : bars} alt="menu" className="w-10 dark:invert"/>

                </button>
            </div>
            <div 
                className={clsx(
                    "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-white dark:bg-black transition-all duration-300 md:hidden",
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {navLinks.map(({to, label})=>(
                    <NavLink
                        key={to}
                        to={to}
                        className="font-montserrat font-semibold"
                        onClick={()=> setMenuOpen(false)}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navbar;