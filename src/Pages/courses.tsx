import { Link } from "react-router";
import { courses } from "../data/course";

function Courses(){
    return (
        <div className="p-5">
            <h1 className="text-xl font-bold">Courses</h1>
                <div className="flex gap-3 p-5">
                    {courses.map(course => (
                        <Link key={course.title} to={`${course.title}`}>
                            <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                                <img src={course.img} alt="" className="w-full h-64 object-cover rounded-2xl"/>
                                <p className="mt-2 font-bold text-sm">{course.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>
    )
}

export default Courses;