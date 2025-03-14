'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction } from "./actions";
import { CldUploadWidget } from "next-cloudinary";

export default function CreatePage() {

  return (
      <main className="container mx-auto py-12 space-y-10 px-9">
        <h1 className="text-4xl font-bold">Post an Item</h1>
        <form 
            className="w-full max-w-md space-y-4 border border-gray-300 rounded-md shadow-sm py-6 px-4" 
            action={createItemAction}>
          <Input type="text" name="name" required placeholder="Name your Item" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
          <Input type="number" name="startingPrice" required placeholder="Starting Price" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
          <div className="border-gray-300 border w-fit p-3">
            <CldUploadWidget uploadPreset="mkuy9sdx">
              {({ open }) => {
                return (
                  <button onClick={() => open()}>
                    | + | Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
          <Button type="submit" className="hover:bg-gray-700 text-white py-2 rounded-md">Create a Bid</Button>
        </form>
      </main>
  );
}
