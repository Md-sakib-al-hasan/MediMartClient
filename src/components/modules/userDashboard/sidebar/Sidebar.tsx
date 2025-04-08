"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export function Sidebar() {
  const pathname = usePathname()

  const linkClass = (path: string) => {
    const isActive = pathname === path
    return `block py-1 font-medium ${
      isActive ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-gray-900"
    }`
  }

  return (
    <div className="w-full md:w-64 bg-white border-r border-gray-200 p-6 h-full rounded-md">
      <nav className="space-y-6">
        <div>
          <Link href="/drashboard/profile" className={linkClass("/drashboard/profile")} >
            Profile
          </Link>
        </div>
        <div>
          <Link href="/drashboard/orders" className={linkClass("/drashboard/orders")} >
            Orders
          </Link>
        </div>
        <div>
          <Link href="#" className={linkClass("#")} >
            Log out
          </Link>
        </div>
      </nav>
    </div>
  )
}
