"use client"
import {
  ClipboardList,
  Clock,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafa] to-[#e6f7f7] min-h-screen">
      <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#24aeb1] to-[#1a8a8c] rounded-xl p-6 mb-6 text-white shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="opacity-90">Overview of your pharmacy operations</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
             
              <Button className="flex-1 sm:flex-initial bg-white/20 hover:bg-white/30 text-white border-none">
                <Clock className="mr-2 h-4 w-4" />
                Last 30 Days
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="border-l-4  shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <div className="h-8 w-8 rounded-full bg-[#24aeb1]/10 flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-[#24aeb1]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <div className="flex items-center mt-1">
                <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +20.1%
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4  shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Orders</CardTitle>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 text-purple-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12</div>
              <div className="flex items-center mt-1">
                <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +8.2%
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Prescriptions</CardTitle>
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                <ClipboardList className="h-4 w-4 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex items-center mt-1">
                <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  -2
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                <Package className="h-4 w-4 text-red-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <div className="flex items-center mt-1">
                <Badge variant="outline" className="bg-red-100 text-red-700 hover:bg-red-100">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  +3
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">from last week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-7 mb-6">
          <Card className="col-span-7 md:col-span-4 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-lg font-semibold text-gray-800">Sales Overview</CardTitle>
              <CardDescription>Monthly revenue for the current year</CardDescription>
            </CardHeader>
            <CardContent className="pl-2 pt-6">
              <div className="h-[240px] flex items-end gap-2">
                {[45, 30, 60, 80, 45, 65, 75, 50, 40, 60, 70, 55].map((height, i) => (
                  <div key={i} className="relative flex flex-col items-center flex-1">
                    <div
                      className="w-full rounded-t-md"
                      style={{
                        height: `${height * 2}px`,
                        background: `linear-gradient(to top, #24aeb1, ${i % 2 === 0 ? "#36c3c5" : "#1a8a8c"})`,
                      }}
                    />
                    <span className="text-xs mt-2 font-medium">{`M${i + 1}`}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-100 text-sm text-gray-600">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span>Overall growth of 24% compared to last year</span>
              </div>
            </CardFooter>
          </Card>

          <Card className="col-span-7 md:col-span-3 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-lg font-semibold text-gray-800">Order Status</CardTitle>
              <CardDescription>Distribution of current orders</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#24aeb1]" />
                    <span className="font-medium">Pending</span>
                  </div>
                  <span className="font-medium text-[#24aeb1]">24%</span>
                </div>
                <Progress value={24} className="h-2.5 rounded-full" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-purple-500" />
                    <span className="font-medium">Processing</span>
                  </div>
                  <span className="font-medium text-purple-500">36%</span>
                </div>
                <Progress value={36} className="h-2.5 rounded-full bg-purple-100 [&>div]:bg-purple-500" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="font-medium">Shipped</span>
                  </div>
                  <span className="font-medium text-amber-500">28%</span>
                </div>
                <Progress value={28} className="h-2.5 rounded-full bg-amber-100 [&>div]:bg-amber-500" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="font-medium">Delivered</span>
                  </div>
                  <span className="font-medium text-green-500">12%</span>
                </div>
                <Progress value={12} className="h-2.5 rounded-full bg-green-100 [&>div]:bg-green-500" />
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-100 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-[#24aeb1] mr-1" />
                <span>Based on 142 active orders</span>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Recent Activity Section */}
    
      </div>
    </div>
  )
}
