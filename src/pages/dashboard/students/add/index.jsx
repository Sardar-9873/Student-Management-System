import { useState } from "react";
import { FiUser, FiMapPin } from "react-icons/fi";
import { FaBirthdayCake } from "react-icons/fa";

import Card from "../../../../components/ui/Card";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";

import { addStudent } from "../../../../lib/firebase/firestore";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate();

    async function addStudentHandler() {

        if (!name || !age || !city) {
            toast("Please fill all fields.", {
                icon: "⚠️",
            });
            return;
        }

        try {

            await toast.promise(addStudent({

                name,
                age,
                city

            }),
                {
                    loading: "Adding student...",

                    success: "Student added.",

                    error: "Unable to add student."
                }
            );

            navigate("/dashboard/students");

        } catch (error) {

            toast.error(error.message);

        }

    }

    return (

        <Card className="max-w-xl mx-auto">

            <h1 className="text-3xl font-bold">

                Add Student

            </h1>

            <p className="text-slate-500 mt-2 mb-8">

                Fill in the student information.

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

                    onClick={addStudentHandler}

                >

                    Add Student

                </Button>

            </div>

        </Card>

    );

}