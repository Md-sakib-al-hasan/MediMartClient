"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Mail, Phone, User, MapPin, Edit } from "lucide-react"
import Link from "next/link"

export default function ProfileView() {
  return (
    <div className="relative max-w-3xl mx-auto">
    
      <Card className="shadow-md">
        <CardHeader className="border-b pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <CardTitle>View Profile</CardTitle>
          <Link href="/user/updateprofile">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Edit className="h-4 w-4" />
              <span>Update</span>
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-center">Md sakib al hasan</h2>
            <Badge variant="outline" className="mt-2">
              Customer
            </Badge>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">Male</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                    <CalendarIcon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">01/15/1990</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">Email Address</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium break-all">mdsakibalhasanprogrammer1@gmail.com</p>
                     
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium">+880 1234 567890</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">
                <MapPin className="h-5 w-5 text-gray-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">123 Main Street, Dhaka, Bangladesh</p>
              </div>
            </div>

           
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
