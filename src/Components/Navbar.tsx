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
            <div className="p-3 grid grid-cols-3">
                <div className="dark:rounded-4xl dark:bg-white dark:max-w-10 dark:flex dark:items-center dark:justify-center p-2">
                    <button onClick={toggleTheme} >
                        <img src={theme ? sun : moon} alt="" className="w-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;