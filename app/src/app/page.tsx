import { SignOut } from "@/components/signout";
import SignIn from "@/components/signin";
import { auth } from "./auth";
import { prisma }  from "../prismaClient";

export default async function Home() {
  const session = await auth();
  const allItems = await prisma.item.findMany();
  const user = session?.user;

  return (
    <>
    { session?.user ? <SignOut/> : <SignIn/> }
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Items for Sale</h1>
      <h2 className="text-2xl font-bold"></h2>
      <div className="grid grid-cols-4 gap-4">
        {allItems.map((item) => 
          <div key={item.id} className="border p-8 rounded-xl"> 
          {item.name} 
          Starting Price: {item.startingPrice}$
          </div>
        )}
      </div>
    </main>
    </>
  );
}
