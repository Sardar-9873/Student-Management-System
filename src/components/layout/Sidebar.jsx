import { NavLink } from "react-router";
import {
    FiHome,
    FiUsers,
    FiUserPlus,
    FiInfo,
    FiPhone,
    FiSettings,
    FiX
} from "react-icons/fi";
import Logout from "../logout/index.jsx";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const closeSidebar = () => setSidebarOpen(false);

    const navLinkClasses = ({ isActive }) =>
        `flex items-center gap-3 px-6 py-4 rounded-lg mx-3 transition-all duration-200 ${isActive
            ? "bg-blue-100 text-blue-600 font-semibold"
            : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
        }`;

    return (
        <>
            {/* Overlay */}

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}

            <aside
                className={`
                    fixed lg:static
                    top-0 left-0
                    z-50
                    w-64 lg:w-72
                    h-screen
                    bg-white
                    border-r
                    border-slate-200
                    shadow-lg
                    transform
                    transition-transform
                    duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >

                {/* Header */}

                <div className="flex items-center justify-between p-6 border-b">

                    <div>

                        <h1 className="text-2xl font-bold text-blue-600">

                            StudentMS

                        </h1>

                        <p className="text-sm text-slate-500">

                            Student Management System

                        </p>

                    </div>

                    <button
                        className="lg:hidden text-3xl"
                        onClick={closeSidebar}
                    >
                        <FiX />
                    </button>

                </div>

                {/* Main Links */}

                <div className="mt-4 space-y-1">

                    <NavLink
                        to="/dashboard"
                        end
                        className={navLinkClasses}
                        onClick={closeSidebar}
                    >
                        <FiHome size={20} />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/dashboard/students"
                        className={navLinkClasses}
                        onClick={closeSidebar}
                    >
                        <FiUsers size={20} />
                        Students
                    </NavLink>

                    <NavLink
                        to="/dashboard/students/add"
                        className={navLinkClasses}
                        onClick={closeSidebar}
                    >
                        <FiUserPlus size={20} />
                        Add Student
                    </NavLink>

                </div>

                {/* Divider */}

                <div className="my-5 border-t mx-6"></div>

                {/* Other Links */}

                <div className="space-y-1">

                    <NavLink
                        to="/dashboard/about"
                        className={navLinkClasses}
                        onClick={closeSidebar}
                    >
                        <FiInfo size={20} />
                        About
                    </NavLink>

                    <NavLink
                        to="/dashboard/contact"
                        className={navLinkClasses}
                        onClick={closeSidebar}
                    >
                        <FiPhone size={20} />
                        Contact
                    </NavLink>

                    <NavLink
                        to="/dashboard/settings"
                        className={navLinkClasses}
                        onClick={closeSidebar}
                    >
                        <FiSettings size={20} />
                        Settings
                    </NavLink>

                </div>

                {/* Logout */}

                <div className="absolute bottom-0 left-0 w-full border-t">


                    <Logout className="
                            w-full
                            flex
                            items-center
                            gap-3
                            px-6
                            py-4
                            text-red-600
                            hover:bg-red-50
                            transition
                            cursor-pointer
                            "
                    />



                </div>

            </aside>
        </>
    );
}