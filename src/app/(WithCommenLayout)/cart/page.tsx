'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import productimge from "@/assets/medicine/product-19.jpg"

const initialProducts = [
  {
    id: 1,
    title: 'Zahler Real Calm Multivitamin',
    price: 123.4,
    quantity: 2,
    image: productimge
  },
  {
    id: 2,
    title: 'Nordic Naturals Vitamin D3',
    price: 134.49,
    quantity: 1,
    image: productimge,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    )
  }

  const subtotal = products.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <div className="bg-gray-50  p-4 md:p-8 flex justify-center">
      <div className="bg-white rounded-lg shadow-sm max-w-7xl w-full p-4 md:p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Cart</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {products.map((product) => (
              <div key={product.id} className="border-b pb-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button className="text-gray-400 hover:text-gray-600 order-1 sm:order-none self-end sm:self-auto">
                    <span className="text-xl">×</span>
                  </button>

                  <div className="w-20 h-20 relative order-0 sm:order-none">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-start sm:items-center order-2 sm:order-none w-full">
                    <div className="lg:col-span-2">
                      <h3 className="text-gray-800 font-medium">{product.title}</h3>
                    </div>

                    <div className="text-gray-600 hidden lg:block">
                      <span>${product.price.toFixed(2)}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center border rounded-full overflow-hidden">
                        <button
                          className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{product.quantity}</span>
                        <button
                          className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      <div className="font-medium text-gray-800 lg:hidden xl:block block">
                        ${(product.price * product.quantity).toFixed(2)}
                      </div>
                    </div>

                    <div className="text-gray-600 block lg:hidden">
                      <span>${product.price.toFixed(2)} each</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coupon and update cart */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
              <div className="relative flex-1 max-w-md w-full">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="w-full border rounded px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <button className="bg-teal-400 hover:bg-teal-500 text-white font-medium px-6 py-2 rounded transition-colors">
                UPDATE CART
              </button>
            </div>
          </div>

          {/* Cart totals */}
          <div className="lg:w-80 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart totals</h2>

            <div className="space-y-4">
              <div className="flex justify-between pb-4 border-b">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-xl text-gray-800">${subtotal.toFixed(2)}</span>
              </div>

              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded mt-6 transition-colors">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
