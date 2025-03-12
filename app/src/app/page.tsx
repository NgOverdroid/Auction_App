import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/auth";
import { SignIn } from "@/components/signin";
import { SignOut } from "@/components/signout";

export default async function HomePage() {
  // const bids = await prisma.bids.findMany();
  const session = await auth();

  return (
      <main className="container mx-auto py-12 ">
        { session ? <SignOut/> : <SignIn/>}
        <form>
          <Input type="text" name="bid" />
          <Button type="submit">Create a Bid</Button>
        </form>

        {/* {bids.map((bid) => {
          <div key={bid.id}>{bid.id}</div>
        })} */}

      </main>
  );
}
