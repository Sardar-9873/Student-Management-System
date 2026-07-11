export default function Modal({

    open,

    title,

    children,

    onClose

}) {

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                bg-black/50
                flex
                justify-center
                items-center
                z-50
            "
        >

            <div
                className="
                    bg-white
                    rounded-xl
                    shadow-xl
                    w-[90%]
                    max-w-md
                "
            >

                <div
                    className="
                        flex
                        justify-between
                        items-center
                        border-b
                        p-5
                    "
                >

                    <h2 className="text-xl font-bold">

                        {title}

                    </h2>

                    <button
                        onClick={onClose}
                        className="
                            text-2xl
                            text-slate-500
                            hover:text-red-600
                        "
                    >

                        ×

                    </button>

                </div>

                <div className="p-5">

                    {children}

                </div>

            </div>

        </div>

    );

}