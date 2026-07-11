import { FiInbox } from "react-icons/fi";
import Button from "./Button";

export default function EmptyState({

    title,

    description,

    buttonText,

    onClick

}) {

    return (

        <div className="text-center py-16">

            <FiInbox
                size={70}
                className="mx-auto text-slate-400"
            />

            <h2 className="text-2xl font-bold mt-4">

                {title}

            </h2>

            <p className="text-slate-500 mt-2">

                {description}

            </p>

            {buttonText && (

                <div className="mt-6">

                    <Button onClick={onClick}>

                        {buttonText}

                    </Button>

                </div>

            )}

        </div>

    );

}