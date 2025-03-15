import { signOut } from "../auth";
import { Button } from "./ui/button"; 

export function SignOut() {
  return (
    <form className="cursor:pointer"
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  )
}