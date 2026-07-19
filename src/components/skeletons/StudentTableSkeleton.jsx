import Skeleton from "../ui/Skeleton";
import Card from "../ui/Card";

export default function StudentTableSkeleton() {

    return (

        <Card className="overflow-hidden">

            {/* Search */}

            <Skeleton className="h-12 w-full mb-5" />

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Age</th>
                        <th className="p-4 text-left">City</th>
                        <th className="p-4 text-left">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        Array.from({ length: 5 }).map((_, index) => (

                            <tr key={index} className="border-b">

                                <td className="p-4">
                                    <Skeleton className="h-5 w-36" />
                                </td>

                                <td className="p-4">
                                    <Skeleton className="h-5 w-10" />
                                </td>

                                <td className="p-4">
                                    <Skeleton className="h-5 w-24" />
                                </td>

                                <td className="p-4">

                                    <div className="flex gap-2">

                                        <Skeleton className="w-10 h-10 rounded-lg" />
                                        <Skeleton className="w-10 h-10 rounded-lg" />

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </Card>

    );

}