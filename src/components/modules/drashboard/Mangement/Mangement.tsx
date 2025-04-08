"use client"

import { useState } from "react"
import {  Menu, X } from "lucide-react"

import { Sidebar } from "@/components/modules/drashboard/sidebar/Sidebar"
import { Button } from "@/components/ui/button"
import { usepathmatch } from "@/hooks/pathmatch/usepathmatch"
import { usePathname } from "next/navigation"
import Contact from "../contact/Contact"


// Sample order data

export default function Management({children}: {children: React.ReactNode}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const pathname = usePathname();
  const isAdmin = usepathmatch(pathname, "/admin")
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen)
  }


  return (
   <div>
     <div className={` flex flex-col lg:flex-row min-h-screen rounded-md  bg-gray-50 ${isAdmin ? "lg:px-8": " px-0 container mx-auto "}`}>
      {/* Mobile header */}
      <div className="lg:hidden flex items-center p-4 bg-white border-b">
        <Button variant="ghost" size="icon" className="mr-2" onClick={toggleMobileSidebar}>
          {mobileSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
        <h1 className="text-xl font-bold">Orders</h1>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileSidebarOpen(false)} />
      )}

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-200 ease-in-out ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar  />
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1 p-4 md:p-8">
        
        {children} 
        
      </div>
    </div>
     <span className={isAdmin ? "hidden": "block"}>
     <Contact/>
     </span>
   </div>
  )
}



