import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";

export default function StudentFormSkeleton() {

    return (

        <Card className="max-w-xl mx-auto">

            <Skeleton className="h-10 w-52 mb-3" />

            <Skeleton className="h-5 w-40 mb-8" />

            <Skeleton className="h-12 w-full mb-5" />

            <Skeleton className="h-12 w-full mb-5" />

            <Skeleton className="h-12 w-full mb-8" />

            <Skeleton className="h-12 w-full" />

        </Card>

    );

}