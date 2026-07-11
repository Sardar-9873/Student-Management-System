import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { FiUser, FiMapPin } from "react-icons/fi";
import { FaBirthdayCake } from "react-icons/fa";

import Card from "../../../../components/ui/Card";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";

import {
    updateStudent,
    getStudentById
} from "../../../../lib/firebase/firestore";

export default function UpdateStudent() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [age, setAge] = useState("");

    const [city, setCity] = useState("");

    useEffect(() => {

        async function fetchStudent() {

            const student = await getStudentById(id);

            if (!student) {

                navigate("/dashboard/students", { replace: true });

                return;

            }

            setName(student.name);

            setAge(student.age);

            setCity(student.city);

        }

        fetchStudent();

    }, []);

    async function updateStudentHandler() {

        try {

            await updateStudent(id, {

                name,

                age,

                city

            });

            alert("Student Updated Successfully");

            navigate("/dashboard/students");

        }

        catch (error) {

            alert(error.message);

        }

    }

    return (

        <Card className="max-w-xl mx-auto">

            <h1 className="text-3xl font-bold">

                Update Student

            </h1>

            <p className="text-slate-500 mt-2 mb-8">

                Update student information.

            </p>

            <div className="space-y-5">

                <Input

                    label="Student Name"

                    placeholder="Enter student name"

                    icon={<FiUser />}

                    value={name}

                    onChange={(e) => setName(e.target.value)}

                />

                <Input

                    label="Age"

                    type="number"

                    placeholder="Enter student age"

                    icon={<FaBirthdayCake />}

                    value={age}

                    onChange={(e) => setAge(e.target.value)}

                />

                <Input

                    label="City"

                    placeholder="Enter city"

                    icon={<FiMapPin />}

                    value={city}

                    onChange={(e) => setCity(e.target.value)}

                />

                <Button

                    className="w-full"

                    variant="success"

                    onClick={updateStudentHandler}

                >

                    Update Student

                </Button>

            </div>

        </Card>

    );

}