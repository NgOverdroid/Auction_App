import { prisma } from "@/lib/prisma";

export default async function HomePage() {

  return (
      <main className="container mx-auto py-12 space-y-10 px-9">
        <h2 className="text-2xl font-bold">Items To Sell</h2>

        <div className="grid grid-cols-4 gap-7">
          {/* {bids.map((item) => {
          <div key={item.id} className="border p-8 rounded-xl">{item.name} starting price: {item.startingPrice} vnd</div>
        })} */}
        </div>
      </main>
  );
}
