import { Form } from "react-router";

function Register(){
    const courses = [
        { value: "math", label: "Math"},
        { value: "science", label: "Science"},
        { value: "english", label: "English"},
        { value: "history", label: "History"},
    ]
    return (
        <div className="flex items-center justify-center flex-col">
            <Form 
                method="post"
                className="py-5 flex flex-col gap-3 max-w-lg"
            >
                <div>
                    <h2 className="text-3xl">Get Started on smgt</h2>
                    <p className="text-md">register to receive courses</p>
                </div>
                <p className="font-medium text-lg">Name</p>
                <input 
                    type="text" 
                    name="full-name" 
                    id="" 
                    placeholder="Full name"
                    className="ml-1 border-2 border-gray-300 outline-blue-200 rounded-2xl pl-4 p-3 w-md"
                />
                <p className="font-medium text-lg">email</p>
                <input 
                    type="email" 
                    name="email"
                    placeholder="email"
                    className="ml-1 border-2 border-gray-300 outline-blue-200 rounded-2xl pl-4 p-3 w-md"
                />
                <p className="font-medium text-lg">Phone number</p>
                <input type="text" 
                    inputMode="numeric" 
                    pattern="[0-9]*" 
                    placeholder="phone number" 
                    onKeyDown={(e) => {
                        if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
                            e.preventDefault();
                        }}
                    }
                    className="ml-1 border-2 border-gray-300 outline-blue-200 rounded-2xl pl-4 p-3 w-md"
                />
                <p className="font-medium text-lg">Course</p> 
                <select 
                    name="courses" 
                    defaultValue=""
                    className="ml-1 mt-2 border-2 border-gray-300 p-3 rounded-2xl outline-blue-200 bg-white dark:border-gray-600 cursor-pointer focus:ring-2 focus:ring-blue-200 transition-colors"
                >
                    <option value="" disabled>Select a course</option>
                    {courses.map(({ value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <button className="bg-blue-600 p-3 rounded-4xl text-white mt-5 cursor-pointer">
                    Register
                </button>
            </Form>
        </div>
    )
}

export default Register;