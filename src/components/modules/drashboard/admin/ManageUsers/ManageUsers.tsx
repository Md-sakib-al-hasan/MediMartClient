"use client"

import { useState } from "react"
import Link from "next/link"
import {  Filter, MoreHorizontal, Plus, Search, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

// Sample user data
const users = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "Active",
    orders: 12,
    spent: "$2,400.00",
    lastOrder: "2023-05-15",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    status: "Active",
    orders: 8,
    spent: "$1,200.00",
    lastOrder: "2023-05-10",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    status: "Inactive",
    orders: 3,
    spent: "$350.00",
    lastOrder: "2023-04-25",
  },
  {
    id: "4",
    name: "William Kim",
    email: "william.kim@email.com",
    status: "Active",
    orders: 15,
    spent: "$3,200.00",
    lastOrder: "2023-05-18",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    status: "Active",
    orders: 6,
    spent: "$950.00",
    lastOrder: "2023-05-12",
  },
]

export default function UserMangement() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState("All")
  console.log(statusFilter)
  const router = useRouter()
  return (
    <div className="h-full min-h-screen bg-[#f2f4f5]">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <Link href="/admin" className="lg:hidden">
            <Users className="h-6 w-6" />
            <span className="sr-only">Dashboard</span>
          </Link>
          <div className="w-full flex-1">
            <h1 className="text-xl font-semibold">User Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tight">Users</h1>
              <p className="text-muted-foreground">View and manage customer details and order history.</p>
            </div>
            <div className="flex items-center gap-2">
             
              <Button size="sm" className="h-8 gap-1 bg-[#24aeb1] hover:bg-[#1e9799]">
                <Plus className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add User</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <Card>
                <CardHeader className="px-5 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle>Users</CardTitle>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <div className="relative w-full sm:w-auto">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search users..."
                            className="w-full rounded-lg pl-8 sm:w-[180px] md:w-[200px] lg:w-[300px]"
                          />
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-8 gap-1 w-full sm:w-auto">
                              <Filter className="h-3.5 w-3.5" />
                              <span className="whitespace-nowrap">Filter</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            <DropdownMenuLabel>Status</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => setStatusFilter("All")}>
                              All
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setStatusFilter("Active")}>
                              Active
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setStatusFilter("Inactive")}>
                              Inactive
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-auto px-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Orders</TableHead>
                          <TableHead className="text-right">Total Spent</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow
                            key={user.id}
                            className={selectedUser === user.id ? "bg-muted/50" : ""}
                            onClick={() => setSelectedUser(user.id)}
                          >
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              <div
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  user.status === "Active"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {user.status}
                              </div>
                            </TableCell>
                            <TableCell>{user.orders}</TableCell>
                            <TableCell className="text-right">{user.spent}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Open menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View details</DropdownMenuItem>
                                  <DropdownMenuItem>View orders</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  
                                  <DropdownMenuItem className="text-red-600">Delete user</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
            {selectedUser && (
              <div className="w-full lg:w-[350px] sticky top-20 self-start">
                <Card>
                  <CardHeader className="px-5 py-4">
                    <CardTitle>User Details</CardTitle>
                    <CardDescription>View customer information and order history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {(() => {
                      const user = users.find((u) => u.id === selectedUser)
                      if (!user) return null

                      return (
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-[#24aeb1]">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Status:</span>
                              <span>{user.status}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Total Orders:</span>
                              <span>{user.orders}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Total Spent:</span>
                              <span>{user.spent}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Last Order:</span>
                              <span>{user.lastOrder}</span>
                            </div>
                          </div>

                          <Tabs defaultValue="orders">
                            <TabsList className="w-full">
                              <TabsTrigger value="orders" className="flex-1">
                                Orders
                              </TabsTrigger>
                              <TabsTrigger value="activity" className="flex-1">
                                Activity
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="orders" className="space-y-4 pt-3">
                              <div className="rounded-lg border p-3">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-sm font-medium">Order #1089</p>
                                    <p className="text-xs text-muted-foreground">May 15, 2023</p>
                                  </div>
                                  <p className="text-sm font-medium">$240.00</p>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Delivered
                                  </span>
                                </div>
                              </div>

                              <div className="rounded-lg border p-3">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-sm font-medium">Order #1082</p>
                                    <p className="text-xs text-muted-foreground">May 8, 2023</p>
                                  </div>
                                  <p className="text-sm font-medium">$175.00</p>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Delivered
                                  </span>
                                </div>
                              </div>

                              <div className="rounded-lg border p-3">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="text-sm font-medium">Order #1076</p>
                                    <p className="text-xs text-muted-foreground">Apr 30, 2023</p>
                                  </div>
                                  <p className="text-sm font-medium">$120.00</p>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Delivered
                                  </span>
                                </div>
                              </div>

                              <Button onClick={() => router.push('admin/singleuser/1')} variant="outline" size="sm" className="w-full">
                                View all orders
                              </Button>
                            </TabsContent>
                            <TabsContent value="activity" className="space-y-4 pt-3">
                              <div className="space-y-4">
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                    <div className="absolute bottom-0 left-1/2 top-2 w-px -translate-x-1/2 bg-border" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">
                                      Placed an order <span className="font-medium">#1089</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">May 15, 2023</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                    <div className="absolute bottom-0 left-1/2 top-2 w-px -translate-x-1/2 bg-border" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">Updated their profile information</p>
                                    <p className="text-xs text-muted-foreground">May 12, 2023</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                    <div className="absolute bottom-0 left-1/2 top-2 w-px -translate-x-1/2 bg-border" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">
                                      Placed an order <span className="font-medium">#1082</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">May 8, 2023</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div className="relative mt-0.5">
                                    <div className="h-2 w-2 rounded-full bg-[#24aeb1]" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-sm">Account created</p>
                                    <p className="text-xs text-muted-foreground">Apr 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>

                          
                        </div>
                      )
                    })()}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
