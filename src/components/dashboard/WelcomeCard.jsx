export default function WelcomeCard() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {

        greeting = "Good Morning";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon";

    }



    let username = localStorage.getItem("username") || "User";


    if (username.includes(".")) {
        username = username.split(".")[0];
    }

    let displayUserName = username.charAt(0).toUpperCase() + username.slice(1);

    return (

        <div className="
            bg-white
            border-slate-200
            rounded-xl
            p-8
            shadow-lg
        ">

            <h1 className="text-3xl font-bold">
                {greeting}, {displayUserName} 👋
            </h1>

            <p className="mt-3 text-blue-600">
                Welcome to your Student Management System. Manage students quickly and efficiently.
            </p>

        </div>

    );

}