import { useState, useEffect } from "react";
import { StudentContext } from "../index";
import { type Student, type RegisteredStudent } from "../index"
import { nanoid } from "nanoid";

export interface StudentProviderProps {
    children: React.ReactNode;
}

const StudentProvider = ({ children }: StudentProviderProps) => {
    const [student, setStudentState] = useState<Student | null>(()=>{
        const saved = localStorage.getItem("studentDraft");
        return saved ? JSON.parse(saved) : null;
    });

    const [registeredStudents, setRegisteredStudents] = useState<RegisteredStudent[]>(()=>{
        const saved = localStorage.getItem("registeredStudents");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=>{
        if(student) localStorage.setItem("studentDraft", JSON.stringify(student));
        else localStorage.removeItem("studentDraft");
    }, [student]);

    useEffect(()=>{
        localStorage.setItem("registeredStudents", JSON.stringify(registeredStudents));
    }, [registeredStudents]);

    const setStudent = (student: Student | null) => {
        setStudentState(student);
    }

    const addStudent = (student: Student) => {
        setRegisteredStudents(prev => [...prev, {
            id: nanoid(),
            ...student
        }]);
        localStorage.removeItem("studentDraft");
    }

    const removeStudent = (id: string) =>{
        setRegisteredStudents(prev => prev.filter(student => student.id !== id ));
    }

    return (
        <StudentContext value={{student, setStudent, registeredStudents, addStudent, removeStudent}}>
            { children }
        </StudentContext>
    )
}

export default StudentProvider;