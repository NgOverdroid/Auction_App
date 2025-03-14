import { Item } from "@/types/types"
import { Button } from "./ui/button";
import Link from "next/link";

export function ItemCard({item}: {item: Item}) {
    return(
        <div className="border p-8 rounded-xl space-y-2">
            <img src={item.imageUrl} alt={item.name} width={200} height={200}/>
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-large">{item.startingPrice}</p>
            <Button asChild>
                <Link href={`/items/${item.id}`}>
                Place Bid
                </Link>
            </Button>
        </div>
    );
}