import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";

export default function WelcomeCardSkeleton() {

    return (

        <Card>

            <Skeleton className="h-8 w-64 mb-4" />

            <Skeleton className="h-5 w-full mb-2" />

            <Skeleton className="h-5 w-3/4" />

        </Card>

    );

}