import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { FaLock, FaLockOpen } from "react-icons/fa";

import { signin } from "../../lib/firebase/auth";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import toast from "react-hot-toast";

export default function SigninForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function signInHandler(e) {

        e.preventDefault();

        try {

            const result = await toast.promise(

                signin(email, password),

                {
                    loading: "Signing in...",

                    success: "Welcome back!",

                    error: "Something went wrong. Please try again."
                }

            );

            const username = result.user.email.split("@")[0];

            localStorage.setItem(
                "username",
                username
            );

            navigate("/dashboard", {
                replace: true
            });

        } catch (error) {

            switch (error.code) {

                case "auth/invalid-email":
                    toast.error("Invalid Email.");
                    break;

                case "auth/invalid-credential":
                    toast.error("Invalid Email or Password.");
                    break;

                case "auth/too-many-requests":
                    toast("Too many attempts. Try again later.", { icon: "⚠️", });
                    break;

                case "auth/network-request-failed":
                    toast.error("Network connection error.");
                    break;  

                default:
                    toast.error(error.message);

            }

        }

    }

    return (

        <>
            <form
                onSubmit={signInHandler}
                className="space-y-5"
            >

                <Input

                    label="Email"

                    type="email"

                    placeholder="Enter your email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                    icon={<MdEmail size={20} />}

                    autoComplete="email"

                />

                <Input

                    label="Password"

                    type="password"

                    placeholder="Enter your password"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                    icon={<FaLock size={18} />}

                    autoComplete="current-password"

                />

                <Button

                    type="submit"

                    className="w-full"

                >

                    Sign In

                </Button>

            </form>

            <p className="text-center mt-5 text-slate-600">

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