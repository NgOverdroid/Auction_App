import { prisma } from "@/lib/prisma";
import ItemNotFound from "./not-found";

export default async function ItemPage({ params }: { params: { itemId: string } }){
    const id = Number(params.itemId);

    // if (isNaN(id))
    //     return(
    //         <ItemNotFound/>
    //     );

    const item = await prisma.item.findUnique({
        where: {
            id: id
        }
    })

    if (!item) {
        return <ItemNotFound />;
    }

    return(
        <main>

        </main>
    );
}