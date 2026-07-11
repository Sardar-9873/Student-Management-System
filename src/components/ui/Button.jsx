export default function Button({

    children,
    variant = "primary",
    className = "",
    type = "button",
    onClick,
    disabled = false

}) {

    const variants = {

        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",

        secondary:
            "bg-slate-600 hover:bg-slate-700 text-white",

        success:
            "bg-green-600 hover:bg-green-700 text-white",

        danger:
            "bg-red-600 hover:bg-red-700 text-white",

    };

    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`
                px-5
                py-3
                rounded-lg
                font-semibold
                transition
                duration-300
                cursor-pointer
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${variants[variant]}
                ${className}
            `}
        >

            {children}

        </button>

    );

}