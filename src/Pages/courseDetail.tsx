import { useLoaderData, NavLink, type LoaderFunctionArgs } from "react-router";
import { courses } from "../data/course";
import { useStudent } from "../Context/hooks/useStudent";

export async function loader({ params }: LoaderFunctionArgs){
    const { courseName } = params;
    const decodedName = decodeURIComponent(courseName || "").toLowerCase();
    const course = courses.find(c => c.title.toLowerCase() === decodedName);
    if(!course) throw new Response("Course not found", { status: 404 });
    return course;
}

function CourseDetail(){
    const course = useLoaderData<typeof loader>();
    const { registeredStudents } = useStudent();
    const count = registeredStudents.filter(s => s.course.toLowerCase() === course.title.toLowerCase()).length;

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-stone-950">
            <nav className="sticky top-0 z-10 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm">
                <div className="mx-6 flex max-w-5xl items-center px-6 py-4">
                    <NavLink 
                        to="/students"
                        className="group flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900 dark:hover-text-stone-100"
                    >
                        <span
                            className="inline-block transition-transform group-hover:translate-x-0.5"
                        >
                            Go back to student List page
                        </span>
                    </NavLink>
                </div>
            </nav>

            <div className="mx-auto px-10 pt-14 pb-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 dark:bg-green-950 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-green-400 ring-1 ring-emerald-200 dark:ring-green-900">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {count} students enrolled
                        </div>
                        <h1 className="text-4xl lg:text-5xl leading-tight tracking-tight text-stone-900 dark:text-stone-50 font-bold">{course.title}</h1>
                        <p className="mt-8 text-sm dark:text-stone-500">{course.description}</p>
                        <NavLink
                            to="/"
                            className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-stone-900 dark:bg-stone-50 px-6 py-3 text-sm font-semibold text-white dark:text-stone-950 shadow-sm transition-all hover:bg-stone-700 dark:hover:bg-white active:scale-95"
                        >
                            Enroll now →
                        </NavLink>
                    </div>
                    <img src={course.img} alt={course.title} className="w-full max-w-lg rounded-xl mt-4"/>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail;