'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function createItemAction(form_data: FormData){
    const session = await auth();
    if (!session) 
        throw new Error("Unauthorized");

    const user = session.user;

    if (!user || !user.id)
        throw new Error("Unauthorized");

    await prisma.item.create({
        data: {
            name: form_data.get("name") as string,
            startingPrice: Number(form_data.get("startingPrice")),
            imageUrl: form_data.get("imageUrl") as string,
            userId: user.id,
            endDate: "19/04/2004"
        }
    });
    redirect("/");
}