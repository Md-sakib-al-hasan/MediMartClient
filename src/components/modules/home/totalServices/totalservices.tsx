import { Building, Ambulance, MapPin, Pill } from "lucide-react"

export default function Totalservices() {
  return (
    <div className=" p-6 flex justify-center">
      <div className="bg-white rounded-lg shadow-md w-full container py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Families Served */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">50 Lakh +</h3>
              <p className="text-gray-500">Families Served</p>
            </div>
          </div>

          {/* Orders Delivered */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-md flex items-center justify-center">
              <Ambulance className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">1.5 Crore +</h3>
              <p className="text-gray-500">Orders Delivered</p>
            </div>
          </div>

          {/* Pincodes Served */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-md flex items-center justify-center">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">22000 +</h3>
              <p className="text-gray-500">Pincodes Served</p>
            </div>
          </div>

          {/* Medicines Available */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-md flex items-center justify-center">
              <Pill className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">10 Lakh +</h3>
              <p className="text-gray-500">Medicines Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

