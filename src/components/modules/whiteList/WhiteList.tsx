"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import producticon from "@/assets/medicine/product-19.jpg"
import { useRouter } from "next/navigation"
import Contact from "../userDashboard/contact/Contact"

interface WishlistItem {
  id: string
  name: string
  category: string
  image: string | StaticImageData,
  hasOptions: boolean
}

export default function Wishlist() {
    const router = useRouter()
  const [items, setItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "Cosmetic Dentistry",
      category: "Health",
      image: producticon,
      hasOptions: true,
    },
    {
      id: "2",
      name: "CBD and Joint Pain",
      category: "Health",
      image: producticon,
      hasOptions: false,
    },
  ])

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
     <div>
      <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My wishlist</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="group">
            <div className="flex flex-row items-start sm:items-center gap-4 py-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Remove from wishlist"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative h-20 w-20 border border-gray-200 rounded-md overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
              </div>

              <div className="flex-1 min-w-0 ">
                <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
                <button  onClick={() => router.push('/medicine/1')} className="text-teal-600 hover:text-teal-700 text-sm font-medium sm:hidden">Quick View</button>
              </div>

              <div className=" hidden sm:flex flex-row items-start sm:items-center gap-3 mt-2 sm:mt-0 w-full sm:w-auto ">
                <button  onClick={() => router.push('/medicine/1')} className="text-teal-600 hover:text-teal-700 text-sm font-medium">Quick View</button>

                <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                  

                  <Button
                    variant="outline"
                    className="text-gray-500 hidden sm:block border-gray-300 hover:bg-gray-100 text-xs px-4 py-2 h-auto"
                    onClick={() => removeItem(item.id)}
                  >
                    REMOVE
                  </Button>
                </div>
              </div>
            </div>

            {items.indexOf(item) < items.length - 1 && <div className="border-b border-gray-200"></div>}
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        )}
      </div>
     
    </div>
     <div className="py-10">
     <Contact/>
     </div>
     </div>
  )
}
