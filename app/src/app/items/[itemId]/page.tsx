import { prisma } from "@/lib/prisma";
import ItemNotFound from "./not-found";
import { formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";
import { createBidAction } from "./actions";

function formatTimestamp(timestamp: Date) {
    return formatDistance(timestamp, new Date(), { addSuffix: true });
}

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

    const allBids = await prisma.bid.findMany({
        where: {
            itemId: id
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });

    return(
        <main className="space-y-8">
            <div className="flex gap-8">
                <div>
                    <h1 className="text-4xl font-bold">{item.name}</h1>
                    <img src={item.imageUrl} alt={item.name} width={200} height={200}/>
                    <div>Current Bid: <span className="font-bold">{item.currentBid}</span></div>

                    <div>Starting Price: <span className="font-bold">{item.startingPrice}</span></div>
                    <div>
                        Bid Interval{" "}
                        <span className="font-bold">
                            {item.bidInterval}
                        </span>
                    </div>
                    <div>
                        <form action={ createBidAction.bind(null, item.id) }>
                                    <Button>Place a bid</Button>
                        </form>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Current Bids</h2>

                    { 
                        (allBids.length == 0) && 
                        <div>
                            <p>No one has bidded yet</p>
                        </div>
                    }

                    <ul className="space-y-4">
                        {allBids.map((bid) => (                        
                        <li key={bid.id} className="bg-gray-100 rounded-xl p-8">
                            <div className="flex gap-4">
                                <div>
                                    <span className="font-bold">
                                        {bid.amount}
                                    </span>{"vnd "}
                                    by <span className="font-bold">{bid.user.name}</span>
                                </div>
                                <div className="">{formatTimestamp(bid.timestamp)}</div>
                            </div>
                        </li>)
                        )}
                    </ul>
                </div>
            </div>
        </main>
    );
}