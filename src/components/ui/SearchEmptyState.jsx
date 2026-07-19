import { FiSearch } from "react-icons/fi";

import Card from "./Card";

export default function SearchEmptyState() {

    return (

        <Card className="text-center py-12">

            <FiSearch className="mx-auto text-6xl text-slate-300 mb-4" />

            <h2 className="text-2xl font-bold text-slate-700">

                No Search Results

            </h2>

            <p className="text-slate-500 mt-2">

                We couldn't find any student matching your search.

            </p>

        </Card>

    );

}