import { prisma } from "@/lib/prisma";
import { ItemCard } from "@/components/itemcard";

export default async function HomePage() {
  const items = await prisma.item.findMany();

  return (
      <main className="container mx-auto py-12 space-y-10 px-9">
        <h2 className="text-2xl font-bold">Items To Sell</h2>

        <div className="grid grid-cols-4 gap-7">
          {items.map((item) => (
            <ItemCard key={item.id} item={item}/>
          ))}
        </div>
      </main>
  );
}
