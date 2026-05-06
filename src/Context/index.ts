import { createContext } from "react";

export interface ThemeContextType {
    theme: boolean;
    toggleTheme: () => void;
}
export interface Student {
    name: string;
    email: string;
    number: string;
    course: string;
}
export interface RegisteredStudent extends Student{
    id: string;
}

export interface StudentContextType{
    student: Student | null;
    registeredStudents: RegisteredStudent[];
    setStudent: (student: Student | null) => void;
    addStudent: (student: Student) => void;
    removeStudent: (id: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
export const StudentContext = createContext<StudentContextType | null>(null);