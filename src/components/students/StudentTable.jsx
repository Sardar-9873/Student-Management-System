import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function StudentTable({

    students,

    onEdit,

    onDelete

}) {

    return (

        <div className="min-w-full bg-white rounded-xl shadow border border-slate-200 overflow-x-auto">
 
            <table className="min-w-full overflow-x-auto">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-6 py-4 text-left">Name</th>

                        <th className="px-6 py-4 text-left">Age</th>

                        <th className="px-6 py-4 text-left">City</th>

                        <th className="px-6 py-4 text-center">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        students.map((student) => (

                            <tr
                                key={student.id}
                                className="
                                    border-t
                                    hover:bg-slate-50
                                    transition
                                "
                            >

                                <td className="px-6 py-4">

                                    {student.name}

                                </td>

                                <td className="px-6 py-4">

                                    {student.age}

                                </td>

                                <td className="px-6 py-4">

                                    {student.city}

                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex justify-center gap-3">

                                        <button
                                            title="Edit Student"
                                            onClick={() => onEdit(student.id)}
                                            className="
                                                group
                                                p-2
                                                rounded-lg
                                                bg-green-100
                                                text-green-600
                                                hover:bg-green-200
                                            "
                                        >

                                            <FiEdit2 className="group-hover:scale-110 transition-transform"/>

                                        </button>

                                        <button
                                            onClick={() => onDelete(student.id)}
                                            className="
                                                group
                                                p-2
                                                rounded-lg
                                                bg-red-100
                                                text-red-600
                                                hover:bg-red-200
                                            "
                                        >

                                            <FiTrash2 className="group-hover:scale-110 transition-transform"/>

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}