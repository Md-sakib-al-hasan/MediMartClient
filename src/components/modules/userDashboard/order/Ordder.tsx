'use client'

import { useState } from 'react'
import { Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


const orders = [
  {
    id: '8261',
    date: '07-Apr-2025',
    status: 'Processing',
    total: 381.29,
    items: 3,
  },
  {
    id: '8269',
    date: '07-Apr-2025',
    status: 'Processing',
    total: 381.29,
    items: 3,
  },
]

export default function Orders() {
  const router = useRouter()

  const [orderStatuses, setOrderStatuses] = useState<Record<string, string>>(
    orders.reduce((acc, order) => ({ ...acc, [order.id]: order.status }), {})
  )
 
  const handleStatusChange = (orderId: string, status: string) => {
    console.log(`Order ID: ${orderId}, New Status: ${status}`)
    setOrderStatuses(prev => ({ ...prev}))
    // Optional: update state if you want the UI to reflect change
    // setOrderStatuses(prev => ({ ...prev, [orderId]: status }))
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 hidden md:block">Orders</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Order</th>
                <th className="px-4 hidden md:block md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Date</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Status</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Total</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-2 md:px-6 py-3 text-blue-600 text-xs md:text-sm">#{order.id}</td>
                  <td className="px-0 hidden md:block md:px-6 py-3 text-gray-500 text-xs md:text-sm">{order.date}</td>
                  <td className="px-0 md:px-6 py-3 text-gray-500 text-xs md:text-sm">
                    <Select
                      value={orderStatuses[order.id]}
                      onValueChange={(value) => handleStatusChange(order.id, value)}
                    >
                      <SelectTrigger className="w-[120px] md:w-[180px] h-8 text-xs md:text-sm">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="On hold">On hold</SelectItem>
                        <SelectItem value="Processing">Processing</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-2 md:px-6 py-3 text-gray-500 text-xs md:text-sm">
                    <span className="hidden sm:inline">${order.total.toFixed(2)} for {order.items} items</span>
                    <span className="sm:hidden">${order.total.toFixed(2)}</span>
                  </td>
                  <td className="px-4 md:px-6 py-3 text-gray-500 text-xs md:text-sm">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push('/drashboard/orders/order/1')}
                      className="flex items-center gap-1 h-8 text-xs md:text-sm"
                    >
                      <span className="hidden sm:inline">View</span>
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
