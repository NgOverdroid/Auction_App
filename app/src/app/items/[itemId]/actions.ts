'use server'
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createBidAction(itemId: number){
    const session = await auth();

    const userId = session?.user?.id;
  
    if (!userId) 
      throw new Error("You must be logged in to place a bid");
  
    const item = await prisma.item.findFirst({
      where: {
        id: itemId
      },
    });
  
    if (!item) 
      throw new Error("Item not found");
    
    const isBidOver = item.endDate < new Date();

    if (isBidOver) 
      throw new Error("This auction is already over");
  
    const latestBidValue = item.currentBid + item.bidInterval;

    revalidatePath("/");
}