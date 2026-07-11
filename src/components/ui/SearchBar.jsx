import { FiSearch } from "react-icons/fi";

export default function SearchBar({

    value,

    onChange,

    placeholder = "Search..."

}) {

    return (

        <div className="relative w-full max-w-full py-2 px-2 sm:px-0">

            <FiSearch
                className="
                    absolute
                    left-6
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    text-base
                "
            />

            <input

                type="text"

                value={value}

                onChange={onChange}

                placeholder={placeholder}

                className="
                    w-full
                    max-w-full
                    h-11
                    pl-11
                    pr-4
                    text-sm
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    outline-none
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-200
                    transition
                "

            />

        </div>

    );

}