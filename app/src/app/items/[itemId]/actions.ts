'use server'
import { prisma } from "@/lib/prisma";

export async function findItem(id: string){
    const item = await prisma.item.findUnique({
        where: {
            id: Number(id)
        }
    })
}