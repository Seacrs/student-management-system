import { 
    Form,
    useActionData,
    useNavigate,
    type ActionFunctionArgs
} from "react-router";
import { useStudent } from "../Context/hooks/useStudent";
import { useEffect } from "react";
import clsx from "clsx";

export async function action({ request } : ActionFunctionArgs){
    const formData = await request.formData();
    
    const fields = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        course: formData.get("courses") as string,
    };

    const errors: Partial<typeof fields> = {};

    if(!fields.fullName?.trim()) errors.fullName = "Full name is required";

    if(!fields.email?.trim()) errors.email = "Email is Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Enter a valid email address";

    if(!fields.phone?.trim()) errors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(fields.phone)) errors.phone = "Enter a valid 10 digit phone number";

    if(!fields.course) errors.course = "Please select a course";

    if(Object.keys(errors).length > 0){
        return { errors, fields };
    }

    return { errors: {}, fields };
}

function Register(){
    const courses = [
        { value: "Math", label: "Math"},
        { value: "Science", label: "Science"},
        { value: "English", label: "English"},
        { value: "History", label: "History"},
    ]

    const { setStudent, student } = useStudent();
    const navigate = useNavigate();
    const actionData = useActionData<typeof action>();
    const errors = actionData?.errors;
    const fields = actionData?.fields;

    useEffect(()=>{
        if(actionData && Object.keys(actionData.errors).length === 0 && actionData.fields){
            setStudent({
                name: actionData.fields.fullName,
                email: actionData.fields.email,
                number: actionData.fields.phone,
                course: actionData.fields.course
            });
            navigate("/confirmation");
        }
    },[actionData]);

    const defaultName = fields?.fullName ?? student?.name ?? "";
    const defaultEmail = fields?.email ?? student?.email ?? "";
    const defaultPhone = fields?.phone ?? student?.number ?? "";
    const defaultCourse = fields?.course ?? student?.course ?? "";

    const inputClass = (hasError : boolean) => clsx (
        "border-2 dark:border-1 placeholder:text-sm border-gray-300 rounded-2xl pl-4 p-3 w-full",
        hasError ? "border-red-400 focus:border-red-400 outline-none" : "border-2 outline-blue-200 border-gray-300"
    );
    const selectClass = (hasError: boolean) => clsx (
        "mt-2 border-2 p-3 rounded-2xl w-full dark:border-gray-600 cursor-pointer transition-colors bg-transparent bg-stone-100 dark:bg-stone-950",
        hasError ? "border-red-400 focus:border-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-200 outline-blue-200"
    );

    return (
        <div className="min-h-[calc(100vh-64px)] md:py-5 bg-stone-100 dark:bg-stone-950 flex items-center justify-center flex-col px-6 md:px-0">
            <Form 
                method="post"
                className="w-full max-w-md py-5 px-4 md:px-0 flex flex-col gap-3 md:max-w-lg"
            >
                <div>
                    <h2 className="text-xl md:text-3xl">Get Started on smgt</h2>
                    <p className="text-sm md:text-md">register to receive courses</p>
                </div>
                <p className="font-medium text-md md:text-lg">Name</p>
                <div className="flex flex-col gap-1 ml-1">
                    <input 
                        type="text" 
                        name="fullName" 
                        id="" 
                        placeholder="Full name"
                        defaultValue={defaultName}
                        className={inputClass(!!errors?.fullName)}
                    />
                    {errors?.fullName && (
                        <span className="text-red-500 text-xs md:text-sm ml-1">{errors.fullName}</span>
                    )}
                </div>
                <p className="font-medium text-md md:text-lg">email</p>
                <div className="flex flex-col gap-1 ml-1">
                    <input 
                        type="email" 
                        name="email"
                        placeholder="email"
                        defaultValue={defaultEmail}
                        className={inputClass(!!errors?.email)}
                    />
                    {errors?.email && (
                        <span className="text-red-500 text-xs md:text-sm ml-1">{errors.email}</span>
                    )}
                </div>
                <p className="font-medium text-md md:text-lg">Phone number</p>
                <div className="flex flex-col gap-1 ml-1">
                    <input type="text" 
                        inputMode="numeric" 
                        name="phone"
                        pattern="[0-9]*" 
                        placeholder="phone number" 
                        defaultValue={defaultPhone}
                        onKeyDown={(e) => {
                            if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
                                e.preventDefault();
                            }}
                        }
                        className={inputClass(!!errors?.phone)}
                    />
                    {errors?.phone && (
                        <span className="text-red-500 text-xs md:text-sm ml-1">{errors.phone}</span>
                    )}
                </div>
                <p className="font-medium text-md md:text-lg">Course</p>
                <div className="flex flex-col gap-1 ml-1">
                    <select 
                        name="courses" 
                        defaultValue={defaultCourse}
                        className={selectClass(!!errors?.course)}
                    >
                        <option value="" disabled>Select a course</option>
                        {courses.map(({ value, label}) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    {errors?.course && (
                        <span className="text-red-500 text-xs md:text-sm ml-1">{errors.course}</span>
                    )}
                </div>
                <button className="bg-blue-600 p-3 rounded-4xl text-white mt-5 cursor-pointer">
                    Register
                </button>
            </Form>
        </div>
    )
}

export default Register;