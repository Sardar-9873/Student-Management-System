import { useNavigate } from "react-router";
import { MdOutlineErrorOutline } from "react-icons/md";
import Button from "../../components/ui/Button.jsx";

export default function NotFound() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="text-center">


                <MdOutlineErrorOutline className="text-7xl text-blue-600 mb-4 animate-pulse hover:scale-105 transition" />

                <h1 className="text-8xl font-bold text-blue-600 animate-pulse hover:scale-105 transition">
                    404
                </h1>

                <h2 className="text-3xl font-bold mt-4">

                    Page Not Found

                </h2>

                <p className="text-slate-500 mt-3">

                    Oops! We couldn't find the page you were looking for.

                </p>

                <Button

                    onClick={() => navigate("/")}

                    className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"

                >

                    Go to Dashboard

                </Button>

            </div>

        </div>

    );

}