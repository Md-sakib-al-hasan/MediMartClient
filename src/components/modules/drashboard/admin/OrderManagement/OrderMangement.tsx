"use client";

import { useState } from "react";
import {
  Check,
  X,
  Filter,
  MoreHorizontal,
 
  SearchIcon,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import OrderDetails, { getStatusColor } from "./orderDetails/OrderDetails";
import OrderEidites from "./OrderEidtites/OrderEidites";
import ConfirmationDialog from "./ConfirmationDailog/ConfirmationDialog";

// Define TypeScript interfaces
interface OrderItem {
  name: string;
  quantity: number;
  price: string;
}

export interface TOrder {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
  requiresPrescription: boolean;
  prescriptionVerified: boolean;
  items: OrderItem[];
}

export interface TConfirmDialogState {
  open: boolean;
  action: string;
  orderId: string;
}

// Sample data - in a real app this would come from an API
const Orders: TOrder[] = [
  {
    id: "ORD-1234",
    customer: "John Smith",
    date: "2023-05-15",
    total: "$129.99",
    status: "Pending",
    requiresPrescription: true,
    prescriptionVerified: false,
    items: [
      { name: "Medication A", quantity: 1, price: "$89.99" },
      { name: "Medication B", quantity: 2, price: "$20.00" },
    ],
  },
  {
    id: "ORD-1235",
    customer: "Sarah Johnson",
    date: "2023-05-14",
    total: "$75.50",
    status: "Processing",
    requiresPrescription: true,
    prescriptionVerified: true,
    items: [{ name: "Medication C", quantity: 1, price: "$75.50" }],
  },
  {
    id: "ORD-1236",
    customer: "Michael Brown",
    date: "2023-05-14",
    total: "$45.25",
    status: "Shipped",
    requiresPrescription: false,
    prescriptionVerified: false,
    items: [{ name: "Supplement A", quantity: 3, price: "$45.25" }],
  },
  {
    id: "ORD-1237",
    customer: "Emily Davis",
    date: "2023-05-13",
    total: "$210.75",
    status: "Delivered",
    requiresPrescription: true,
    prescriptionVerified: true,
    items: [
      { name: "Medication D", quantity: 1, price: "$150.75" },
      { name: "Supplement B", quantity: 2, price: "$30.00" },
    ],
  },
  {
    id: "ORD-1238",
    customer: "Robert Wilson",
    date: "2023-05-13",
    total: "$65.00",
    status: "Pending",
    requiresPrescription: true,
    prescriptionVerified: false,
    items: [{ name: "Medication E", quantity: 1, price: "$65.00" }],
  },
  {
    id: "ORD-1239",
    customer: "Jennifer Taylor",
    date: "2023-05-12",
    total: "$95.25",
    status: "Processing",
    requiresPrescription: false,
    prescriptionVerified: false,
    items: [
      { name: "Supplement C", quantity: 3, price: "$45.25" },
      { name: "Supplement D", quantity: 2, price: "$25.00" },
    ],
  },
  {
    id: "ORD-1240",
    customer: "David Miller",
    date: "2023-05-12",
    total: "$175.50",
    status: "Cancelled",
    requiresPrescription: true,
    prescriptionVerified: false,
    items: [{ name: "Medication F", quantity: 1, price: "$175.50" }],
  },
];

export default function OrdersMangement() {
  const [orders, setOrders] = useState<TOrder[]>(Orders);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<TConfirmDialogState>({open: false,action: "",orderId: "",});
  const [orderDetailsOpen, setOrderDetailsOpen] = useState<boolean>(false);
  const [editOrderOpen, setEditOrderOpen] = useState<boolean>(false);
  const [editingOrder, setEditingOrder] = useState<TOrder | null>(null);

  console.log("sk",statusFilter)





  // Handle status update
  const updateOrderStatus = (orderId: string, newStatus: string) => {
          console.log("Updating order status:", orderId, newStatus);
  };

  // Handle prescription verification
  const verifyPrescription = (orderId: string, verified: boolean) => {
    setConfirmDialog({ open: false, action: "", orderId: "" });
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, prescriptionVerified: verified }
          : order
      )
    );
  };

  // Handle order update
  const handleUpdateOrder = () => {
    if (!editingOrder) return;

    setOrders(
      orders.map((order) =>
        order.id === editingOrder.id ? editingOrder : order
      )
    );
    setEditOrderOpen(false);
    setEditingOrder(null);
  };

  // Get status badge color


  return (
    <div className="p-6 max-w-[1400px] mx-auto bg-[#f2f4f5]">
        
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Order Management</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-1">Orders</h2>
        <p className="text-muted-foreground">
          Approve or reject prescription-based orders and update order statuses.
        </p>
      </div>

      <div className="bg-white rounded-lg border shadow-sm p-6">
        <div className="md:flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Orders</h3>
          <div className=" md:flex gap-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-[250px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1 w-full sm:w-auto"
                >
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

        {/* Orders Table */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] cursor-pointer">
                  Order ID
                </TableHead>
                <TableHead className="cursor-pointer">Customer</TableHead>
                <TableHead className="cursor-pointer hidden md:table-cell">
                  Date
                </TableHead>
                <TableHead className="cursor-pointer hidden sm:table-cell">
                  Total
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden lg:table-cell">
                  Prescription
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Orders.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-6 text-muted-foreground"
                  >
                    No orders found matching your filters
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.date}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {order.total}
                    </TableCell>
                    <TableCell>
                      <Select
                        defaultValue={order.status.toLowerCase()}
                        onValueChange={(value) =>
                          updateOrderStatus(
                            order.id,
                            value.charAt(0).toUpperCase() + value.slice(1)
                          )
                        }
                      >
                        <SelectTrigger
                          className={`w-[130px] h-8 text-xs ${getStatusColor(
                            order.status
                          )}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {order.requiresPrescription ? (
                        order.prescriptionVerified ? (
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 hover:bg-green-200"
                          >
                            Verified
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                          >
                            Pending
                          </Badge>
                        )
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-gray-100 text-gray-800 hover:bg-gray-200"
                        >
                          Not Required
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {order.requiresPrescription &&
                          !order.prescriptionVerified && (
                            <>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-green-600"
                                onClick={() =>
                                  setConfirmDialog({
                                    open: true,
                                    action: "approve",
                                    orderId: order.id,
                                  })
                                }
                              >
                                <Check className="h-4 w-4" />
                                <span className="sr-only">Approve</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-red-600"
                                onClick={() =>
                                  setConfirmDialog({
                                    open: true,
                                    action: "reject",
                                    orderId: order.id,
                                  })
                                }
                              >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Reject</span>
                              </Button>
                            </>
                          )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                            onClick={() => {
                              setTimeout(() => {
                                setSelectedOrder(order);
                                setOrderDetailsOpen(true);
                              }, 0);
                            }}
                            >
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                            onClick={() => {
                              setTimeout(() => {
                                setEditingOrder({ ...order });
                                setOrderDetailsOpen(true);
                              }, 0);
                            }}
                             
                            >
                              Edit Order
                            </DropdownMenuItem>
                            {order.status !== "Cancelled" && (
                              <DropdownMenuItem
                                className="text-red-600"
                                onClick={() =>
                                  updateOrderStatus(order.id, "Cancelled")
                                }
                              >
                                Cancel Order
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Confirmation Dialog */}
      
      {confirmDialog.open && (
  <ConfirmationDialog
    confirmDialog={confirmDialog}
    setConfirmDialog={setConfirmDialog}
    verifyPrescription={verifyPrescription}
    updateOrderStatus={updateOrderStatus}
  />
)}

{orderDetailsOpen && selectedOrder && (
  <OrderDetails
    selectedOrder={selectedOrder}
    orderDetailsOpen={orderDetailsOpen}
    setOrderDetailsOpen={setOrderDetailsOpen}
    setConfirmDialog={setConfirmDialog}
  />
)}

{editOrderOpen && editingOrder && (
  <OrderEidites
    editingOrder={editingOrder}
    editOrderOpen={editOrderOpen}
    setEditOrderOpen={setEditOrderOpen}
    setEditingOrder={setEditingOrder}
    handleUpdateOrder={handleUpdateOrder}
  />
)}
    </div>
  );
}



