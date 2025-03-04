import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
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
      <h1 className="text-4xl font-bold"></h1>
      <form className="w-fit flex flex-col" action={async (form_data : FormData) =>{
        'use server'
        await prisma.item.create({
          data: {
            name: form_data.get("name") as string,
            userId: session?.user?.id!
          },
        });

        revalidatePath("/");
      }}>
        <Input className="max-w-md" name="name" type="number" placeholder="Name your item"></Input>
        <Button className="self-end" type="submit">Post Item</Button>
      </form>
      <h2 className="text-2xl font-bold">Items Listed</h2>
      <div className="grid grid-cols-4 gap-4">
        {allItems.map((item) => 
          <div key={item.id} className="border p-8 rounded-xl"> {item.name} </div>
        )}
      </div>
    </main>
    </>
  );
}
