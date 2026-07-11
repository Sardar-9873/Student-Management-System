import { useEffect, useState } from "react";

import {

    FiUsers,

    FiMapPin,

    FiUserPlus

} from "react-icons/fi";

import {

    listenStudents

} from "../../lib/firebase/firestore";

import StatsCard from "../../components/dashboard/StatsCard.jsx";

import WelcomeCard from "../../components/dashboard/WelcomeCard.jsx";

export default function DashboardHome() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        const stop = listenStudents((data) => {

            setStudents(data);

        });

        return stop;

    }, []);

    const totalStudents = students.length;

    const totalCities = new Set(

        students.map((student) => student.city)

    ).size;

    return (

        <div className="space-y-8">

            <WelcomeCard />

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                "
            >

                <StatsCard

                    title="Total Students"

                    value={totalStudents}

                    icon={<FiUsers />}

                    color="bg-blue-600"

                />

                <StatsCard

                    title="Cities"

                    value={totalCities}

                    icon={<FiMapPin />}

                    color="bg-green-600"

                />

                <StatsCard

                    title="Active Records"

                    value={totalStudents}

                    icon={<FiUserPlus />}

                    color="bg-purple-600"

                />

            </div>

        </div>

    );

}