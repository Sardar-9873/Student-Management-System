import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import auth from "../../lib/firebase/auth";
import { signin } from "../../lib/firebase/auth";

export default function SigninForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signInHandler() {

        try {

            const result = await signin(
                email,
                password
            );


            const username = result.user.email.split("@")[0];
            localStorage.setItem("username", username);

            navigate("/dashboard", { replace: true });

        } catch (error) {

            switch (error.code) {

                case "auth/invalid-email":
                    alert("Invalid Email.");
                    break;

                case "auth/invalid-credential":
                    alert("Invalid Email or Password.");
                    break;

                case "auth/too-many-requests":
                    alert("Too many attempts. Try again later.");
                    break;

                default:
                    alert(error.message);
            }

        }

    }

    return (
        <>
            <div className="mt-6 space-y-5">

                {/* Email */}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>

                    <div className="relative">

                        <MdEmail
                            className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                            text-xl
                            "
                        />

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                            w-full
                            py-3
                            pl-12
                            pr-4
                            border
                            border-slate-300
                            rounded-lg
                            outline-none
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-200
                            focus:shadow-md
                            transition-all
                            duration-200
                        "
                        />

                    </div>

                </div>


                {/* Password */}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>

                    <div className="relative">

                        <FaLock
                            className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                            text-lg
                            "
                        />

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="
                            w-full
                            py-3
                            pl-12
                            pr-4
                            border
                            border-slate-300
                            rounded-lg
                            outline-none
                            focus:border-blue-500
                            focus:ring-2
                            focus:ring-blue-200
                            focus:shadow-md
                            transition-all
                            duration-200
                        "
                        />

                    </div>

                </div>

            </div>

            <button
                className="
                    w-full
                    mt-6
                    bg-blue-600
                    text-white
                    py-3
                    rounded-lg
                    font-semibold
                    cursor-pointer
                    hover:bg-blue-700
                    hover:scale-[1.02]
                    transition-all
                    duration-200
                    shadow-md
                "
                onClick={signInHandler}
            >
                Sign In
            </button>


            <p className="text-center mt-5 text-gray-600">
                Don't have an account?
            </p>

            <p className="text-center mt-2">
                <Link
                    to="/signup"
                    className="
                        text-blue-600
                        font-semibold
                        hover:underline
                    "
                >
                    Create Account
                </Link>
            </p>
        </>
    );
}