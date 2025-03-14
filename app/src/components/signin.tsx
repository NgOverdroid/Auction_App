import { signIn } from "../auth";
import { Button } from "./ui/button";
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
      className="mb-2"
    >
      <Button type="submit">Sign in with GitHub</Button>
    </form>
  )
}