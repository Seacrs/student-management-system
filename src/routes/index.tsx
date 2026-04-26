import { createBrowserRouter } from "react-router";
import Layout from "../Components/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    }
])