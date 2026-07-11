import { logout } from "../../lib/firebase/auth";
import auth from "../../lib/firebase/auth";
import { useNavigate } from "react-router";
import { FiLogOut } from "react-icons/fi";

export default function Logout({ className }) {

    const navigate = useNavigate();

    async function logoutHandler() {

        try {

            await logout();

            alert("Logout Successful");
            
            localStorage.removeItem("username");

            navigate("/", { replace: true });

        } catch (error) {

            console.log(error);

        }

    }


    return (
        <>
            <button className={className} onClick={logoutHandler}>
                <FiLogOut size={20} />
                Log Out
            </button>
        </>
    );
}