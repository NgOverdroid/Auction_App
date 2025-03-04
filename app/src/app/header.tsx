import { Button } from "@/components/ui/button";
import { auth } from "./auth";
import Image from "next/image";
import Link from "next/link";
import SignIn from "@/components/signin";
import { SignOut } from "@/components/signout";

export async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="bg-gray-200 py-2">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <Image src="/logo.png" width="50" height="50" alt="Logo" />
              BidBuddy.com
            </Link>
            <Link href="/"> Create Items </Link>
          </div>

          <div className="flex items-center gap-2">
              <div>
                  {session?.user?.name}
              </div>
              <div>
                  {session ? <SignIn></SignIn> : <SignOut></SignOut>}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}