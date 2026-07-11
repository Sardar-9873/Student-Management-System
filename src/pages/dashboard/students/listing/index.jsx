import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { deleteStudent, listenStudents } from "../../../../lib/firebase/firestore";
import StudentTable from "../../../../components/students/StudentTable";
import EmptyState from "../../../../components/ui/EmptyState";
import SearchBar from "../../../../components/ui/SearchBar";


export default function Students() {
    const [search, setSearch] = useState("");
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

            }

        );

        return () => {

            stopListen();

        };

    }, []);

    // function getId() {
    //     students.map((student) => {
    //         return student.id;
    //     })
    // }

    // const id = getId();


    async function deleteStudentHandler(id) {

        try {

            await deleteStudent(id);

            alert("Student Deleted Successfully");

        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <>


            <SearchBar

                value={search}

                onChange={(e) => setSearch(e.target.value)}

                placeholder="Search Student"

            />

            {

                students.length === 0 ?

                    (

                        <EmptyState

                            title="No Students Found"

                            description="Add your first student."

                            buttonText="Add Student"

                            onClick={() => navigate("/dashboard/students/add")}

                        />

                    )

                    :

                    (

                        <StudentTable

                            students={students}

                            students={filteredStudents}

                            onEdit={(id) => { navigate(`update/${id}`) }}

                            onDelete={(id) => { deleteStudentHandler(id) }}

                        />

                    )

            }
        </>
    );


}