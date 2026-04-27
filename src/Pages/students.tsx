import { useStudent } from "../Context/hooks/useStudent";
import { useState } from "react";
import { Link } from "react-router";
import { courses } from "../data/course";

function Students(){
    const { registeredStudents, removeStudent } = useStudent();
    const [search, setSearch] = useState<string>('');
    const [confirmId, setConfirmId] = useState<string | null>(null);
    
    const total = registeredStudents.length;
    const filteredItems = registeredStudents.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

    const handleDelete = (id: string) => {
        if(id){
            removeStudent(id);
            setConfirmId(null);
        }
    }

    return (
        <div className="p-10">
            <div className="mx-4 my-5">
                <div>
                    <h2 className="text-2xl font-bold">Registered students</h2>
                    <p className="text-sm text-gray-500">{filteredItems.length} students</p>
                </div>
                <input 
                    type="text" 
                    placeholder="search by name" 
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    className="border border-gray-300 rounded-xl px-4 py-2 text-sm outline-none focus:border-blue-400"
                />
            </div>
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 uppercase tracking-wide">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Course</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map(s => (
                            <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td className="px-4 py-3 font-medium">{s.name}</td>
                                <td className="px-4 py-3 font-medium">{s.email}</td>
                                <td className="px-4 py-3 font-medium">{s.number}</td>
                                <td className="px-4 py-3 font-medium">{s.course}</td>
                                <td className="px-4 py-3 flex gap-2">
                                    <Link 
                                        to={`/courses/${s.course}`}
                                        className="text-xs px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 cursor-pointer"
                                    >
                                        View Course
                                    </Link>
                                    <button 
                                        onClick={()=> setConfirmId(s.id)}
                                        className="text-xs px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 text-red-700 cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredItems.length === 0 && (
                    <p className="text-center text-sm text-gray-500 py-8">No students match your search.</p>
                )}
            </div>
            {
                confirmId && 
                <div className="py-5">
                    <p
                        className="text-sm font-medium text-red-700 mb-3"
                    >
                        Are you sure you want to remove {registeredStudents.find(s => s.id === confirmId)?.name}?
                    </p>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => handleDelete(confirmId)}
                            className="text-xs px-4 py-1.5 rounded-lg bg-red-600 text-white cursor-pointer"
                        >
                            Remove
                        </button>
                        <button
                            onClick={() => setConfirmId(null)}
                            className="text-xs px-4 py-1.5 rounded-lg border border-gray-300 cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            }
            <div className="space-y-4 mt-5">
                <div className="p-5">
                    <p className="text-xs font-medium tracking-wide text-stone-400 uppercase">
                        Total students
                    </p>
                    <p className="mt-1 text-5xl font-bold text-stone-950 dark:text-stone-50">{total}</p>
                </div>
                <p
                    className="text-xs font-medium tracking-wide text-stone-400 uppercase px-5"
                >
                    Students per course
                </p>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3 px-5">
                    {
                        courses.map(c => {
                            const count = registeredStudents.filter(s => s.course.toLowerCase() === c.title.toLowerCase()).length;
                            return (
                                <div
                                    key={c.title}
                                    className="rounded-xl bg-stone-100 dark:bg-black p-4 flex flex-col gap-2"
                                >
                                    <p className="text-xs text-stone-900 dark:text-white truncate">{c.title}</p>
                                    <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">{count}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Students;