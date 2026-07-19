import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";

export default function StatsCardSkeleton() {

    return (

        <Card className="flex justify-between items-center">

            <div>

                <Skeleton className="h-4 w-28 mb-3" />

                <Skeleton className="h-8 w-20" />

            </div>

            <Skeleton className="w-14 h-14 rounded-xl" />

        </Card>

    );

}