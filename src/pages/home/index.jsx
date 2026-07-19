import { useNavigate } from "react-router";
import { FiArrowRight, FiUsers, FiDatabase, FiShield } from "react-icons/fi";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import Footer from "../../components/layout/Footer.jsx";


export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-slate-100 flex flex-col">

            <main className="flex-1">
            {/* Hero */}

            <section className="max-w-7xl mx-auto px-6 py-20 text-center">

                <h1 className="text-5xl font-bold text-slate-800">

                    Student Management System

                </h1>

                <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">

                    Manage students quickly with React, Firebase Firestore and Realtime Updates.

                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                    <Button

                        onClick={() => navigate("/signup")}

                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"

                    >

                        Get Started

                    </Button>

                    <Button

                        onClick={() => navigate("/signin")}

                        className="px-8 py-3 rounded-xl font-bold transition"
                        variant="primary"

                    >

                        Sign In

                    </Button>

                </div>

            </section>

            {/* Features */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <Card className="text-center hover:shadow-lg transition">

                        <FiUsers className="text-5xl text-blue-600 mx-auto" />

                        <h2 className="font-bold text-xl mt-4">
                            Student CRUD
                        </h2>

                        <p className="text-slate-500 mt-2">
                            Add, Update, Delete and Search Students.
                        </p>

                    </Card>

                    <Card className="text-center hover:shadow-lg transition">

                        <FiDatabase className="text-5xl text-green-600 mx-auto" />

                        <h2 className="font-bold text-xl mt-4">
                            Firebase
                        </h2>

                        <p className="text-slate-500 mt-2">
                            Firestore Realtime Database Integration.
                        </p>

                    </Card>

                    <Card className="text-center hover:shadow-lg transition">

                        <FiShield className="text-5xl text-purple-600 mx-auto" />

                        <h2 className="font-bold text-xl mt-4">
                            Secure Login
                        </h2>

                        <p className="text-slate-500 mt-2">
                            Authentication with Firebase.
                        </p>

                    </Card>

                </div>

            </section>

            </main>

            {/* Footer */}

            <Footer />
        </div>

    );

}