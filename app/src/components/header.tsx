import { auth } from "@/auth";
import { SignIn } from "./signin";
import { SignOut } from "./signout";
import Link from "next/link";
import { Button } from "./ui/button";

export async function Header(){
    const session = await auth();
    return (
        <div className="bg-gray-200 py-2">
            <div className="container flex justify-between p-3.5">
                <Link href="/" className="cursor-pointer">
                    <div className="flex items-center gap-2">
                        <img src="https://vn4u.vn/wp-content/uploads/2023/09/logo-co-tinh-nhat-quan-2.png" alt="logo" width="60" height="60" className="rounded-full" />
                    </div>
                </Link>
                <div className="flex items-center justify-center">
                    <Link href="/items/create">
                        <Button className="bg-amber-600 cursor-pointer hover:bg-amber-500">Auction an Item</Button>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/auctions">
                        <Button className="bg-amber-600 cursor-pointer hover:bg-amber-500">My Auctions</Button>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div>{session?.user?.name}</div>
                    <div>
                        { session ? <SignOut/> : <SignIn/>}
                    </div>
                </div>
            </div>
        </div>
    )
}