import { useNavigate } from "react-router";
import { FiArrowRight, FiUsers, FiDatabase, FiShield } from "react-icons/fi";

export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-slate-100">

            {/* Hero */}

            <section className="max-w-7xl mx-auto px-6 py-20 text-center">

                <h1 className="text-5xl font-bold text-slate-800">

                    Student Management System

                </h1>

                <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">

                    Manage students quickly with React, Firebase Firestore and Realtime Updates.

                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                    <button

                        onClick={() => navigate("/signup")}

                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"

                    >

                        Get Started

                    </button>

                    <button

                        onClick={() => navigate("/signin")}

                        className="border border-slate-300 bg-white hover:bg-slate-50 px-8 py-3 rounded-xl font-semibold transition"

                    >

                        Sign In

                    </button>

                </div>

            </section>

            {/* Features */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-xl shadow p-8 text-center">

                        <FiUsers className="text-5xl text-blue-600 mx-auto" />

                        <h2 className="font-bold text-xl mt-4">

                            Student CRUD

                        </h2>

                        <p className="text-slate-500 mt-2">

                            Add, Update, Delete and Search Students.

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-8 text-center">

                        <FiDatabase className="text-5xl text-green-600 mx-auto" />

                        <h2 className="font-bold text-xl mt-4">

                            Firebase

                        </h2>

                        <p className="text-slate-500 mt-2">

                            Firestore Realtime Database Integration.

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-8 text-center">

                        <FiShield className="text-5xl text-purple-600 mx-auto" />

                        <h2 className="font-bold text-xl mt-4">

                            Secure Login

                        </h2>

                        <p className="text-slate-500 mt-2">

                            Authentication with Firebase.

                        </p>

                    </div>

                </div>

            </section>

            {/* Footer */}

            <footer className="border-t py-6 text-center text-slate-500">

                © 2026 StudentMS. All Rights Reserved.

            </footer>

        </div>

    );

}