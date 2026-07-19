import { logout } from "../../lib/firebase/auth";
import auth from "../../lib/firebase/auth";
import { useNavigate } from "react-router";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

export default function Logout({ className }) {

    const navigate = useNavigate();

    async function logoutHandler() {

        try {

            await toast.promise(

                logout(),

                {
                    loading: "Destroying current session...",

                    success: "Logout Succesfull.",

                    error: "Something went wrong. Please try again."
                }

            );

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