import { Navigate } from "react-router";

export default function PublicRoute({ user, children }) {

    if (user) {

        return <Navigate to="/dashboard" replace />;

    }

    return children;

}