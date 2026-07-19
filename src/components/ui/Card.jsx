export default function Card({

    children,

    className = ""

}) {

    return (

        <div
            className={`
                bg-white
                rounded-4xl
                shadow-md
                border
                border-slate-200
                p-6
                ${className}
            `}
        >

            {children}

        </div>

    );

}