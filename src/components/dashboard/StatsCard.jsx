export default function StatsCard({

    title,

    value,

    icon,

    color = "bg-blue-600"

}) {

    return (

        <div className="
            bg-white
            rounded-xl
            shadow
            border
            border-slate-200
            p-6
            flex
            items-center
            justify-between
            hover:shadow-lg
            transition
        ">

            <div>

                <p className="text-slate-500 text-sm">

                    {title}

                </p>

                <h2 className="text-3xl font-bold mt-2">

                    {value}

                </h2>

            </div>

            <div
                className={`
                    w-14
                    h-14
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-white
                    text-2xl
                    ${color}
                `}
            >

                {icon}

            </div>

        </div>

    );

}