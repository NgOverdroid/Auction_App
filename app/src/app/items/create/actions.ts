'use server'
import { auth } from '@/app/auth';
import { prisma } from '@/prismaClient';
import { redirect } from 'next/navigation';

export async function createItemAction(formData: FormData){
    const session = await auth();

    if(!session)
        throw new Error("Unauthorized");

    const user = session.user;

    if(!user || !user.id)
        throw new Error("Unauthorized");

    await prisma.item.create({
        data: {
          name: String(formData.get("name")),
          userId: session?.user?.id!,
          startingPrice: Number( formData.get("startingPrice") ),
        },
    });

    redirect("/");
}
