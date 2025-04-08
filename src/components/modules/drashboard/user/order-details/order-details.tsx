"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface Product {
  name: string
  quantity: number
  price: number
}

interface BillingAddress {
  name: string
  street1: string
  street2: string
  street3: string
  city: string
  country: string
  phone: string
  email: string
}

interface Order {
  id: string
  date: string
  status: string
  total: number
  items: number
  products: Product[]
  paymentMethod: string
  billingAddress: BillingAddress
}




export function OrderDetails({ order }: {order: Order}) {
  const router = useRouter()
  return (
    <div className="space-y-6 md:space-y-8">
      
      <Button
        variant="ghost"
        onClick={() => router.push('/user/orders')}
        className="flex items-center gap-1 mb-2 md:mb-4 pl-0 hover:pl-0 text-xs md:text-sm h-8"
      >
        <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" /> Back to orders
      </Button>
     

      <div>
        <h3 className="text-base md:text-lg font-medium mb-2 md:mb-4">Order details</h3>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-500"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-medium text-gray-500"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order.products.map((product, index) => (
                  <tr key={index}>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900">
                      {product.name} × {product.quantity}
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900 text-right">
                      ${product.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium">Subtotal:</td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium text-right">
                    ${order.total.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm">Payment method:</td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-right">{order.paymentMethod}</td>
                </tr>
                <tr>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium">Total:</td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium text-right">
                    ${order.total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-base md:text-lg font-medium mb-2 md:mb-4">Billing address</h3>
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <address className="not-italic text-xs md:text-sm text-gray-600 space-y-1">
            <p>{order.billingAddress.name}</p>
            <p>{order.billingAddress.street1}</p>
            <p>{order.billingAddress.street2}</p>
            <p>{order.billingAddress.street3}</p>
            <p>{order.billingAddress.city}</p>
            <p>{order.billingAddress.country}</p>
            <p>{order.billingAddress.phone}</p>
            <p className="mt-4">{order.billingAddress.email}</p>
          </address>
        </div>
      </div>
    </div>
  )
}
