import { prisma } from "@/lib/prisma";
import ItemNotFound from "./not-found";

export default async function ItemPage({ params }: { params: { itemId: string } }){
    const id = Number(params.itemId);

    if (isNaN(id))
        return(
            <ItemNotFound/>
        );

    const item = await prisma.item.findUnique({
        where: {
            id: id
        }
    })

    if (!item) {
        return <ItemNotFound />;
    }

    return(
        <main className="space-y-8">
            <div className="flex gap-8">
                <div>
                    <h1 className="text-4xl font-bold">{item.name}</h1>
                    <img src={item.imageUrl} alt={item.name} width={200} height={200}/>
                    <div>Starting Price: <span className="font-bold">{item.startingPrice}</span></div>
                </div>
                <div>
                    <h2>Current Bids</h2>
                    <ul>
                        
                    </ul>
                </div>
            </div>
        </main>
    );
}