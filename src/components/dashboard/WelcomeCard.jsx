export default function WelcomeCard() {

    const hour = new Date().getHours();
    
    let greeting = "Good Evening";

    if (hour < 12) {

        greeting = "Good Morning";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon";

    }

    let username = localStorage.getItem("username") || "";

     if(username.includes(".")){
        username = username.split(".")[0];
     }

    let user = username.charAt(0).toUpperCase() + username.slice(1);

    return (

        <div className="
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            rounded-xl
            p-8
            shadow-lg
        ">

            <h1 className="text-3xl font-bold">

                {greeting}, {user}👋

            </h1>

            <p className="mt-3 text-blue-100">

                Welcome back to your Student Management System.

                Manage students quickly and efficiently.

            </p>

        </div>

    );

}