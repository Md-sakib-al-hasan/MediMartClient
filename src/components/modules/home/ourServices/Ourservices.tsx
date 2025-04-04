import { ArrowLeftRight, Truck, Headphones, Shield } from "lucide-react"

export default function Ourservices() {
  return (
    <div className="w-full py-6 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            <div className="text-teal-500">
              <ArrowLeftRight size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Free Easy Returns</h3>
              <p className="text-sm text-gray-500">Return to 7 days</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-teal-500">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Free Delivery Monday</h3>
              <p className="text-sm text-gray-500">Orders over $499</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-teal-500">
              <Headphones size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">All Day Support</h3>
              <p className="text-sm text-gray-500">24/7 Support care</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-teal-500">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Secure Checkout</h3>
              <p className="text-sm text-gray-500">100% Protected by paypa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

