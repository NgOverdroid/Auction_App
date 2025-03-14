import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import Image from "next/image";

export default async function HomePage() {
  const session = await auth();
  const user_id = session?.user?.id;
  const items = await prisma.item.findMany();

  return (
      <main className="container mx-auto py-12 space-y-10 px-9">
        <h2 className="text-2xl font-bold">Items To Sell</h2>

        <div className="grid grid-cols-4 gap-7">
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.imageUrl} alt={item.name} width={200} height={200}/>
              <p>{item.name}</p>
              <p>{item.startingPrice}</p>
            </div>
          ))}
        </div>
      </main>
  );
}
