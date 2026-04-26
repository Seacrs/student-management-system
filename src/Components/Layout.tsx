import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Layout(){
    return (
        <div className="p-2">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;