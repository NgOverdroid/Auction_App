import { prisma } from "@/lib/prisma";
import { ItemCard } from "@/components/itemcard";

export default async function HomePage() {
  const items = await prisma.item.findMany();

  return (
      <main className="space-y-10">
        <h2 className="text-4xl font-bold">Items For Sale</h2>

        <div className="grid grid-cols-4 gap-7">
          {items.map((item) => (
            <ItemCard key={item.id} item={item}/>
          ))}
        </div>
      </main>
  );
}
