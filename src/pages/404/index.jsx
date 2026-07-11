import { useNavigate } from "react-router";

export default function NotFound() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="text-center">

                <h1 className="text-8xl font-bold text-blue-600">

                    404

                </h1>

                <h2 className="text-3xl font-bold mt-4">

                    Page Not Found

                </h2>

                <p className="text-slate-500 mt-3">

                    The page you are looking for doesn't exist.

                </p>

                <button

                    onClick={() => navigate("/")}

                    className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"

                >

                    Back Home

                </button>

            </div>

        </div>

    );

}