import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction } from "./actions";

export default async function CreatePage() {
  return (
    <>
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold"></h1>
      <form className="w-fit flex flex-col" action={createItemAction}>
        <Input className="max-w-md" name="name" required placeholder="Name your item"></Input>
        <Input className="max-w-md" name="startingPrice" required type="number" min="1000" placeholder="Your start pricce?"></Input>
        <Input type="file" name="file"></Input>
        <Button className="self-end" type="submit">Post Item</Button>
      </form>
      <h2 className="text-2xl font-bold">Items Listed</h2>
    </main> 
    </>
  );
}
