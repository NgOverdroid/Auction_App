import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function HomePage() {
  const bids = await prisma.bids.findMany();

  return (
      <main className="container mx-auto py-12 ">
        <form>
          <Input type="text" name="bid" />
          <Button type="submit">Create a Bid</Button>
        </form>

        {bids.map((bid) => {
          <div key={bid.id}>{bid.id}</div>
        })}
        
      </main>
  );
}
