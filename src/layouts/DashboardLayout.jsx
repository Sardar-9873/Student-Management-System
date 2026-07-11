import { useState } from "react";
import { Outlet } from "react-router";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

export default function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="min-h-screen bg-slate-100 flex flex-col">

            <Navbar setSidebarOpen={setSidebarOpen} />

            <div className="flex flex-1">

                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <main
                    className="
                        flex-1
                        p-4
                        md:p-6
                        overflow-x-hidden
                    "
                >

                    <Outlet />

                </main>

            </div>

            <Footer />

        </div>

    );

} 