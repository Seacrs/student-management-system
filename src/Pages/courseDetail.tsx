import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { courses } from "../data/course";

export async function loader({ params }: LoaderFunctionArgs){
    const { courseName } = params;
    const decodedName = decodeURIComponent(courseName || "").toLowerCase();
    const course = courses.find(c => c.title.toLowerCase() === decodedName);
    if(!course) throw new Response("Course not found", { status: 404 });
    return course;
}

function CourseDetail(){
    const course = useLoaderData<typeof loader>();

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">{course.title}</h1>
            <img src={course.img} alt={course.title} className="w-full max-w-lg rounded-xl mt-4"/>
        </div>
    )
}

export default CourseDetail;