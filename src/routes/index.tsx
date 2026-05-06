import { createBrowserRouter } from "react-router";
import Layout from "../Components/Layout";
import Register, { action as registerAction } from "../Pages/register";
import Confirmation from "../Pages/confirmation"
import Students from "../Pages/students";
import Courses from "../Pages/courses";
import CourseDetail, { loader as courseDetailLoader } from "../Pages/courseDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Register />,
                action: registerAction
            },
            {
                path: "confirmation",
                element: <Confirmation />
            },
            {
                path: "students",
                element: <Students />
            },
            {
                path: "courses",
                element: <Courses />
            },
            {
                path: "courses/:courseName",
                element: <CourseDetail />,
                loader: courseDetailLoader,
            }
        ]
    }
])