import { useLoaderData, type LoaderFunctionArgs } from "react-router";

export async function loader({ params }: LoaderFunctionArgs){
    const { courseName } = params;
    return courseName;
}

function CourseDetail(){
    const name = useLoaderData<string>();

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default CourseDetail;