import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { deleteStudent, listenStudents } from "../../../../lib/firebase/firestore";
import StudentTable from "../../../../components/students/StudentTable";
import EmptyState from "../../../../components/ui/EmptyState";
import SearchBar from "../../../../components/ui/SearchBar";
import toast from "react-hot-toast";
import Button from "../../../../components/ui/Button";
import StudentTableSkeleton from "../../../../components/skeletons/StudentTableSkeleton.jsx";
import SearchEmptyState from "../../../../components/ui/SearchEmptyState";


export default function Students() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();


    const filteredStudents = students.filter((student) =>

        student.name
            .toLowerCase()
            .includes(search.trim().toLowerCase())

    );

    useEffect(() => {

        const stopListen = listenStudents(

            (students) => {

                setStudents(students);
                setLoading(false);

            }

        );

        return () => {

            stopListen();

        };

    }, []);

    if (loading) {

        return <StudentTableSkeleton />;

    }


    async function deleteStudentHandler(id) {

        try {

            await toast.promise(

                deleteStudent(id),

                {

                    loading: "Deleting student...",

                    success: "Student deleted.",

                    error: "Delete failed."

                }

            );
        } catch (error) {
            toast.error(error.message);
        }
    }


    if (students.length === 0) {

        return (

            <EmptyState
                title="No Students Found"
                description="Add your first student."
                buttonText="Add Student"
                onClick={() => navigate("/dashboard/students/add")}
            />

        );

    }

    if (filteredStudents.length === 0) {

        return (

            <>
                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Student"
                />

                <SearchEmptyState />
            </>

        );

    }

    return (

        <>
            <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Student"
            />

            <StudentTable
                students={filteredStudents}
                onEdit={(id) => navigate(`update/${id}`)}
                onDelete={(id) => deleteStudentHandler(id)}
            />
        </>

    );

}