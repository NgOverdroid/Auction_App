import { Button } from "./ui/button";
import { signIn } from "../app/auth";
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button type="submit">Signin with Github</Button>
    </form>
  )
} 