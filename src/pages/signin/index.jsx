import { FaLock } from "react-icons/fa";
import SigninForm from "../../components/signin/index.jsx";

export default function Signin() {
    return (
        <>
            <div className="
                min-h-screen 
                bg-linear-to-br
                from-slate-100
                to-blue-100
                flex justify-center
                items-center">

                <div className="bg-white w-96 rounded-2xl shadow-lg p-10">

                    <FaLock className="text-5xl text-blue-600 mx-auto mb-4" />


                    <h1 className="text-4xl font-extrabold text-center">
                        Sign In
                    </h1>

                    <p className="text-center text-gray-500 mt-2">
                        Welcome! Please sign in to your account.
                    </p>

                    <SigninForm />


                </div>

            </div>

        </>
    );
}