import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import banneriamge from "@/assets/home/HowtoorderBanner.png"

export default function HowtoOrder() {
  return (
    <div className="w-full bg-[#f2f4f5]  flex items-center justify-center sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background DNA graphics - responsive positioning */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=400')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=400')] bg-no-repeat bg-contain"></div>
      </div>
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left side with images - responsive for all devices */}
        <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto w-full max-w-md md:max-w-full order-2 md:order-1">
         
          <Image src={banneriamge} alt="placeholder"  className="object-fill" />
        </div>
        
        {/* Right side with content - responsive text and spacing */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 md:order-2">
          <div>
            <h3 className="text-teal-500 font-medium tracking-wide uppercase text-sm sm:text-base mb-1 sm:mb-2">QUICK ORDER WITH PRESCRIPTION</h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              {`How to order medicines on Medilazar? It's Simple.`}
            </h1>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-semibold text-sm sm:text-base">
                1
              </div>
              <p className="text-slate-700 text-base sm:text-lg">Upload a photo of your prescription</p>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-semibold text-sm sm:text-base">
                2
              </div>
              <p className="text-slate-700 text-base sm:text-lg">Add delivery address and place the order</p>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold text-sm sm:text-base">
                3
              </div>
              <p className="text-slate-700 text-base sm:text-lg">We will call you to confirm the medicines</p>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-sm sm:text-base">
                4
              </div>
              <p className="text-slate-700 text-base sm:text-lg">Now, sit back! your medicines will get delivered at your doorstep</p>
            </div>
          </div>
          
          <div className="pt-2 sm:pt-4">
            <h3 className="text-teal-500 font-medium text-lg sm:text-xl mb-1 sm:mb-2">{`Don't have Prescription? Don't worry!`}</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Simply search & add the medicines OR get consultation from Medilazar doctor
            </p>
          </div>
          
          <div className="pt-2 sm:pt-4">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full h-10 sm:h-12 px-6 sm:px-8 ">
              <span className="text-sm sm:text-base px-4">ABOUT US</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating back to top button - responsive sizing */}
      
    </div>
  )
}
