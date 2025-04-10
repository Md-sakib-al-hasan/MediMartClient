"use client"

import { usepathmatch } from "@/hooks/pathmatch/usepathmatch"
import Link from "next/link"
import { usePathname } from "next/navigation"


 const User = [
  {
    name:"Profile", path:"/user/profile"
  },
  {
    name:"Orders", path:"/user/orders"
  }
 ]
 const admin = [
  {
    name:"Drashboard", path:"/admin/drashboard"
  },
  {
    name:"User Management", path:"/admin/user"
  },
  {
    name:"Orders Management", path:"/admin/order"
  },
  {
    name:"Medicines Management", path:"/admin/medicines"
  }
 ]


export function Sidebar() {
  const pathname = usePathname();
  const showSlider = usepathmatch(pathname, "/admin")

  const linkClass = (path: string) => {
    const isActive = pathname === path
    return `block py-1 font-medium ${
      isActive ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-gray-900"
    }`
  }


  return (
    <div className={`w-full md:w-64 border-r border-gray-200 p-6 h-full rounded-md ${showSlider? "bg-[#f2f4f5]" : "bg-white"  }`}>
      <nav className="space-y-6">
         {
           (showSlider? admin : User  ).map((item) => (
            <div key={item.name}>
              <Link href={item.path} className={linkClass(item.path)}  >
                {item.name}
              </Link>
            </div>
          ))
         }
       
        <div>
          <Link href="#"  >
            Log out
          </Link>
        </div>
      </nav>
    </div>
  )
}
