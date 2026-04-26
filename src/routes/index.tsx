import { createBrowserRouter } from "react-router";
import Layout from "../Components/Layout";
import Register from "../Pages/register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Register />
            }
        ]
    }
])