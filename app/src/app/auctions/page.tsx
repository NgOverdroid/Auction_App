import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { ItemCard } from "@/components/itemcard";

export default async function MyAuctionPage(){
    const session = await auth();

    if (!session || !session.user)
        throw new Error("Unauthorized");

    const items = await prisma.item.findMany({
        where: {
            userId: session.user.id
        }
    })

    return(
        <main className="space-y-10 px-9">
            <div className="grid grid-cols-4 gap-7">
                {items.map((item) => (
                <ItemCard key={item.id} item={item}/>
                ))}
            </div>
        </main>
    );
}