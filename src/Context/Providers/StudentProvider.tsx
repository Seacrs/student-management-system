import { useState } from "react";
import { StudentContext } from "../index";
import { type Student, type RegisteredStudent } from "../index"
import { nanoid } from "nanoid";

export interface StudentProviderProps {
    children: React.ReactNode;
}

const StudentProvider = ({ children }: StudentProviderProps) => {
    const [student, setStudent] = useState<Student | null>(null);
    const [registeredStudents, setRegisteredStudents] = useState<RegisteredStudent[]>([]);

    const addStudent = (student: Student) => {
        setRegisteredStudents(prev => [...prev, {
            id: nanoid(),
            ...student
        }]);
    }

    const removeStudent = (id: string) => setRegisteredStudents(prev => prev.filter(student => student.id !== id ));

    return (
        <StudentContext value={{student, setStudent, registeredStudents, addStudent, removeStudent}}>
            { children }
        </StudentContext>
    )
}

export default StudentProvider;