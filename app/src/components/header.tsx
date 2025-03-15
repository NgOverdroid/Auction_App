'use client'
import { useState, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header(){
    const [isVisible, setIsVisible] = useState(false);
    const notifButtonRef = useRef<HTMLButtonElement | null>(null);
    const session = useSession();

    const userId = session?.data?.user?.id;

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
                    <div>{session?.data?.user?.name}</div>
                    <div>
                    {
                        userId ? 
                        (<Button
                            onClick={() =>
                                signOut({
                                    callbackUrl: "/",
                                })
                            }
                        >
                            Sign Out
                        </Button>) 
                        : 
                        (<Button type="submit" onClick={() => signIn()}>
                            Sign In
                        </Button>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}