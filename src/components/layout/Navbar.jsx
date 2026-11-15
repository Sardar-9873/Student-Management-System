import { FiMenu } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa6";


export default function Navbar({ setSidebarOpen }) {

    const username = localStorage.getItem("username") || "User";

    const firstLetter = username.charAt(0).toUpperCase();

    return (

        <nav className="h-16 bg-white border-b border-slate-200 px-4 lg:px-8 flex items-center justify-between">

            {/* Left */}

            <div className="flex items-center gap-4">

                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden text-3xl"
                >
                    <FiMenu />
                </button>

                <div className="flex items-center gap-3">

                    {/* <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold"> */}

                        <FaUserGraduate className="text-2xl text-blue-600" />
                        

                    {/* </div> */}

                    <h1 className="text-xl lg:text-2xl font-bold">

                        StudentMS

                    </h1>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                    {firstLetter}

                </div>

            </div>

        </nav>

    );

}