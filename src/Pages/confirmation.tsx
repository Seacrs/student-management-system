import { useEffect, useRef } from "react";
import { useStudent } from "../Context/hooks/useStudent";
import { NavLink, useNavigate } from "react-router";

function Confirmation(){
    const { student, addStudent } = useStudent();
    const navigate = useNavigate();
    const isConfirming = useRef(false);

    useEffect(()=>{
        if(!student && !isConfirming.current) navigate("/", { replace: true });
    }, [student, navigate]);

    const handleConfirm = () => {
        if(student){
            isConfirming.current = true;
            addStudent(student);
            navigate("/students", { replace: true });
        }
    }

    return (
        <div className="flex items-center justify-center p-5">
            <div className="grid grid-cols-2 gap-2 w-full max-w-4xl my-24 p-10 bg-gray-100 rounded-3xl">
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl">Review Student</h2>
                    <p> confirm The details before proceeding</p>
                    <div className="flex gap-6 items-center">
                        <NavLink 
                            to="/"
                            className="cursor-pointer text-center underline"
                        >
                            Go back to register page
                        </NavLink>
                        <button onClick={handleConfirm} className="bg-blue-600 p-3 rounded-4xl text-white cursor-pointer w-4/12 border-2 dark:border-0 hover:border-blue-600 hover:bg-white hover:dark:bg-white hover:text-blue-600">
                            Confirm
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h2>Student details</h2>
                    <div className="max-w-xs flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p className="font-medium dark:text-gray-400">Full Name</p>
                            <p className="">{student?.name}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium dark:text-gray-400">email</p>
                            <p className="">{student?.email}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium dark:text-gray-400">Phone Number</p>
                            <p className="">{student?.number}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium dark:text-gray-400">Course</p>
                            <p className="dark:font-medium">{student?.course}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;