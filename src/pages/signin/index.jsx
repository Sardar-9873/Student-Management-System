import { FaLock } from "react-icons/fa";
import SigninForm from "../../components/signin/index.jsx";
import Card from "../../components/ui/Card.jsx";

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

                <Card className="w-full
        max-w-lg
        mx-auto
        p-10">


                    <FaLock className="text-6xl text-blue-600 mx-auto mb-4" />
                    
                                <h1
                                    className="
                                        text-4xl font-bold text-center
                                    "
                                >
                    
                                    Welcome Back
                    
                                </h1>
                    
                                <p
                                    className="
                                        text-center text-gray-500 mt-2
                                    "
                                >
                    
                                    Sign in to your StudentMS account.
                    
                                </p>

                    <SigninForm />


                </Card>

            </div>


        </>
    );
}