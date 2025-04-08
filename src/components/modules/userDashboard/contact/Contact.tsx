import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import playsotreiamge from "@/assets/contact/one.png"
import appleiamge from "@/assets/contact/two.png"

export default function Contact() {
  return (
    <div className="w-full bg-gray-50 py-8 ">
      <div className=" container mx-auto ">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Section */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-white rounded-full p-3 shadow-sm">
                <MapPin className="h-8 w-8 text-teal-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Address</h3>
                <p className="mt-1 text-sm text-gray-500">
                  9066 Green Lake Drive Chevy Chase,
                  <br />
                  MD 20815
                </p>
              </div>
            </div>

            {/* WhatsApp Section */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-white rounded-full p-3 shadow-sm">
                <Phone className="h-8 w-8 text-teal-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">WHATSAPP US</h3>
                <p className="mt-1 text-xl font-medium text-teal-500">(1800)-88-66-990</p>
                <p className="mt-1 text-sm text-gray-500">contact@example.com</p>
              </div>
            </div>

            {/* Download App Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Download the app now!</h3>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="inline-block">
                  <Image
                    src={playsotreiamge}
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-10 w-auto rounded-md"
                  />
                </a>
                <a href="#" className="inline-block">
                  <Image
                    src={appleiamge}
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-10 w-auto rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
