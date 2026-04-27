import { Link } from "react-router";
import { courses } from "../data/course";

function Courses(){
    return (
        <div className="min-h-[calc(100vh-64px)] bg-stone-100 dark:bg-stone-950  p-6">
            <h1 className="text-xl font-bold">Courses</h1>
                <div className="flex flex-col md:flex-row gap-3 p-5">
                    {courses.map(course => (
                        <Link key={course.title} to={`${course.title}`}>
                            <div className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                                <div className="w-full h-52 overflow-hidden rounded-2xl">
                                    <img src={course.img} alt="" className="w-full h-full object-cover"/>
                                </div>
                                <p className="mt-2 font-bold text-sm">{course.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>
    )
}

export default Courses;