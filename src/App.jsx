import FileNotFound from "./pages/404/index.jsx";
import auth, { authState } from "./lib/firebase/auth";
import db from "./lib/firebase/firestore";
import Signup from "./pages/signup/index.jsx";
import Signin from "./pages/signin/index.jsx";
import Home from "./pages/home/index.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";
import PublicRoute from "./components/PublicRoute/index.jsx";
import StudentsLayout from "./pages/dashboard/students/Students-Layout.jsx";
import Students from "./pages/dashboard/students/listing/index.jsx";
import AddStudent from "./pages/dashboard/students/add/index.jsx";
import UpdateStudent from "./pages/dashboard/students/update/index.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Loader from "./components/ui/Loader.jsx";
import About from "./pages/dashboard/about/index.jsx";
import Settings from "./pages/dashboard/settings/index.jsx";
import Contact from "./pages/dashboard/contact/index.jsx";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";


function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = authState((currentUser) => {

      setUser(currentUser);

      setLoading(false);

    });

    return () => {
      unsubscribe()
    };

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="*" element={<FileNotFound />} />

      <Route path="/" element={
        <PublicRoute user={user}>
          <Home />
        </PublicRoute>
      } />

      <Route
        path="signup"
        element={
          <PublicRoute user={user}>
            <Signup />
          </PublicRoute>
        }
      />

      <Route
        path="signin"
        element={
          <PublicRoute user={user}>
            <Signin />
          </PublicRoute>
        }
      />

<Route path="dashboard" element={<DashboardLayout />}>
          <Route
          index
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          } />
        <Route path="students" element={
          <ProtectedRoute user={user}>
            <StudentsLayout />
          </ProtectedRoute>
        }>
          <Route index element={
            <ProtectedRoute user={user}>
              <Students />
            </ProtectedRoute>
          } />
          <Route path="add" element={
            <ProtectedRoute user={user}>
              <AddStudent />
            </ProtectedRoute>
          } />
          <Route path="update/:id" element={
            <ProtectedRoute user={user}>
              <UpdateStudent />
            </ProtectedRoute>
          } />
        </Route>

        <Route path="about" element={
            <ProtectedRoute user={user}>
              <About />
            </ProtectedRoute>
          } />

          <Route path="settings" element={
            <ProtectedRoute user={user}>
              <Settings />
            </ProtectedRoute>
          } />

          <Route path="contact" element={
            <ProtectedRoute user={user}>
              <Contact />
            </ProtectedRoute>
          } />
      </Route>
      

    </Routes>
  );
}

export default App;