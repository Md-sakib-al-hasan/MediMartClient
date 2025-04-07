"use client"

import { useState } from "react"
import { Heart, Share2, Eye, ShoppingBasket } from "lucide-react"
import Image, { StaticImageData } from "next/image";
import { Rating } from "../rating/Rating";
import { useRouter } from "next/navigation";


interface ProductCardProps {
  title: string
  categories: string[]
  price: number
  salePrice: number
  discount: number
  image:   string | StaticImageData;
}

export default function ProductCard({
  title = "Online Only Triple Oxygen",
  categories = ["Covid Essentials", "Health Conditions", "Treatments"],
  price = 193.38,
  salePrice = 115.0,
  discount = 41,
  image = "/placeholder.svg?height=200&width=200",
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  return (
    <div
      className="relative w-full max-w-[300px]  min-w-[350px] bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount tag */}
      <div className="absolute top-6 left-5 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-md z-10">
        -{discount}% OFF
      </div>

      {/* Action buttons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
        <button className="bg-white p-2 text-gray-600 rounded-full shadow-sm hover:bg-[#24aeb1] hover:text-white">
          <Heart className="w-4 h-4  " />
        </button>
        <button
          className={`bg-white p-2  text-gray-600 hover:bg-[#24aeb1] hover:text-white rounded-full shadow-sm  ${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          className={`bg-white p-2 hover:bg-[#24aeb1] hover:text-white  text-gray-600 rounded-full shadow-sm ${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        >
          <Eye className="w-4 h-4 " />
        </button>
      </div>

      {/* Product image */}
      <div className="p-6 flex xl:justify-center items-center bg-gray-50">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={180}
          height={180}
          className="object-contain  h-[180px] transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
      </div>

      {/* Product info */}
      <div className="p-4">
        <div className="text-xs line-clamp-1 text-gray-500 mb-1">{categories.join(", ")}</div>
        <h3 className="font-medium line-clamp-1 text-gray-900 mb-2">{title}</h3>
        <Rating/>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-500 line-through text-sm">${price.toFixed(2)}</span>
            <span className="text-rose-600 font-bold ml-2">${salePrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Add to cart button */}
      <div className="px-4 pb-4">
        
        <button  onClick={() => router.push('/medicine/1')}
          className=" bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300"
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(5px)",
            opacity: isHovered ? 1 : 0.9,
          }}
        >
          <ShoppingBasket   className="w-4 h-4" />
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

