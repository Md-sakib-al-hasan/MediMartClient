"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, RefreshCw, Heart, Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import medicineImge from "@/assets/medicine/product-19.jpg"
import { MdOutlineSavedSearch } from "react-icons/md"
import { Rating } from "@/components/ui/core/rating/Rating"

export default function SingleMedicineCard() {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        {/* Product Image */}
        <div className="relative flex items-center justify-center bg-white p-2 sm:p-4">
          <div className="relative w-full max-w-md mx-auto">
            <Link href={"https://chatgpt.com/c/67f3e123-5e28-800b-b816-8c74d4912017"} className="absolute md:right-0 lg:right-[-30px] top-0 p-2 z-10">
              <MdOutlineSavedSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
            </Link>
            <Image
              src={medicineImge}
              alt="Zahler Real Calm Multivitamin"
              width={400}
              height={600}
              className="mx-auto object-contain w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Zahler Real Calm Multivitamin</h1>

          {/* Ratings */}
          <span className="flex">
          <Rating/>
          <span className="ml-2 text-xs sm:text-sm text-gray-500">(5 customer reviews)</span>
          </span>

          {/* Price */}
          <div className="text-xl sm:text-2xl font-bold text-pink-500">$123.40</div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            laboris nisi ut aliquip.
          </p>

          {/* Add to Cart Section */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center">
                <span className="font-medium text-sm sm:text-base mr-4">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-l-full"
                  >
                    <span className="text-lg sm:text-xl font-medium">-</span>
                  </button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    className="w-12 sm:w-16 h-8 sm:h-10 text-center border-y border-gray-300 rounded-none text-sm sm:text-base"
                    min="1"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-r-full"
                  >
                    <span className="text-lg sm:text-xl font-medium">+</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 md:hidden lg:flex ">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-6 h-8 sm:h-10 rounded-full text-xs sm:text-sm flex-grow sm:flex-grow-0">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  ADD TO CART
                </Button>

                <button className=" text-gray-500 hover:text-white hover:bg-[#24aeb1] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full">
                  <RefreshCw className="w-4 h-4 " />
                </button>

                <button className=" text-gray-500 hover:text-white hover:bg-[#24aeb1] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full">
                  <Heart className="w-4 h-4 " />
                </button>
              </div>
            </div>
          </div>

          {/* Product Meta */}
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex flex-wrap">
              <span className="font-medium w-20 sm:w-24">SKU:</span>
              <span className="text-gray-600">N/A-273</span>
            </div>
            <div className="flex flex-wrap">
              <span className="font-medium w-20 sm:w-24">Categories:</span>
              <div className="text-gray-500">
                <Link href="#">Devices</Link>, <Link href="#">Health Conditions</Link>, <Link href="#">Treatments</Link>
              </div>
            </div>
            <div className="flex flex-wrap">
              <span className="font-medium w-20 sm:w-24">Tags:</span>
              <div className="text-gray-500">
                <Link href="#">Natural</Link>, <Link href="#">Tomato</Link>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <span className="font-medium w-20 sm:w-24">Share:</span>
              <div className="flex space-x-2">
                <Link href="#" className="text-gray-500 hover:text-[#24aeb1]">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#24aeb1]">
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#24aeb1]">
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#24aeb1]">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#24aeb1]">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

