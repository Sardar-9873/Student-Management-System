export default function Input({

    label,

    type = "text",

    placeholder,

    value,

    onChange,

    icon,

    error

}) {

    return (

        <div className="flex flex-col gap-2 w-full">

            {

                label && (

                    <label className="font-medium text-slate-700">

                        {label}

                    </label>

                )

            }

            <div className="relative">

                {

                    icon && (

                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">

                            {icon}

                        </div>

                    )

                }

                <input

                    type={type}

                    placeholder={placeholder}

                    value={value}

                    onChange={onChange}

                    className={`
                        w-full
                        border
                        rounded-lg
                        py-3
                        ${icon ? "pl-12" : "pl-4"}
                        pr-4
                        outline-none
                        focus:border-blue-500
                        transition
                    `}
                />

            </div>

            {

                error && (

                    <p className="text-red-600 text-sm">

                        {error}

                    </p>

                )

            }

        </div>

    );

}