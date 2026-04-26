import { useTheme } from "../Context/useTheme";
import clsx from "clsx";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

function Navbar(){
    const { theme, toggleTheme } = useTheme();

    // const activeStyles = ({ isAsctive }: { isActive: boolean}) => clsx(

    // )

    return (
        <div className="">
            <div className="px-8 p-3 grid grid-cols-3">
                <div>
                    <h1 className="text-2xl">smgt</h1>
                </div>
                <div className="rounded-4xl max-w-10 flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <button onClick={toggleTheme} >
                        <img src={theme ? sun : moon} alt="" className="w-8" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;