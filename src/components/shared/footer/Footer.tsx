import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-16">
      <div className="max-w-7xl md:text-left text-center mx-auto grid gap-8 lg:grid-cols-5 md:grid-cols-4 ">
        {/* Logo and Description */}
        <div>
          <div className="">
                  <div className='w-9/12 flex justify-center'>
                  <Image src="/logo.png" width={30} height={20}  alt="Medilazar" className="" />
                  
                  </div>
                  <div className='flex flex-col'>
                  <span className="text-3xl  leading-none font-bold">MediMart</span>
                  
                  </div>
                </div>
          <p className="mt-4 text-gray-600">
            Medilazar Shop is proud of being one of the best pharmacy online shops in the USA with high-quality medicines, supplements, and healthcare products.
          </p>
        </div>

        {/* Information Links */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            {['Newsroom', 'Sell Your Pharmacy', 'Affiliate Program', 'Careers', 'Investor Relations'].map((item) => (
              <li key={item} className="hover:text-[#2ea5b6] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">CATEGORIES</h3>
          <ul className="space-y-2">
            {['Devices', 'Family Care', 'Fitness', 'Lifestyle', 'Personal Care'].map((item) => (
              <li key={item} className="hover:text-[#2ea5b6] cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact and Services */}
        <div className="mt-6 lg:block md:hidden">
          <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 mb-6">
            {['Shipping', 'Returns', 'Product Recalls', 'Contact Us', 'Site Map'].map((item) => (
              <li key={item} className="hover:text-[#2ea5b6] cursor-pointer">{item}</li>
            ))}
          </ul>
          
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
          
          <div className="space-y-2">
            <p className="text-gray-600">56 Glassford Street, Glasgow G1 1UL, New York, USA</p>
            <p className="flex md:justify-start justify-center items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" /> +351 910 331 000
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" /> contact@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
