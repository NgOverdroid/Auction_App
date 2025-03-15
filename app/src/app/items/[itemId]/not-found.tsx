'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ItemNotFound(){
    const router = useRouter();
    return(
        <div className="w-fit flex flex-col gap-4">
            <h2>
            Item Not Found
            </h2>
            <Button onClick={() => router.back()}>
                Go Back
            </Button>
        </div>
    );
}