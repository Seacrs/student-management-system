import { useContext } from "react";
import { StudentContext } from "../index";

export const useStudent = () => {
    const context = useContext(StudentContext);

    if(!context) throw new Error("useStudent must be used within student Provider");
    const { student, setStudent, registeredStudents,addStudent, removeStudent} = context;

    return { student, setStudent, registeredStudents, addStudent, removeStudent }
}