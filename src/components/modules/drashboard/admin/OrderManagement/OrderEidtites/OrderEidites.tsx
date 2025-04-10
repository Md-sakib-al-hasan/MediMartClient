"use client"
import { Button } from "@/components/ui/button";
import {Dialog,DialogContent,DialogFooter,DialogHeader,DialogTitle,} from "@/components/ui/dialog";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
import { TOrder } from "../OrderMangement";
import {  X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type TpropsOrderEidtes = {
  editingOrder: TOrder | null;
  editOrderOpen: boolean;
  setEditOrderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingOrder: React.Dispatch<React.SetStateAction<TOrder | null>>;
  handleUpdateOrder: () => void;
}

export const OrderEidites = ({editingOrder,editOrderOpen,setEditOrderOpen, setEditingOrder,handleUpdateOrder}:TpropsOrderEidtes) => {
  return (
    <Dialog
    open={editOrderOpen}
    onOpenChange={(open) => {
      if (!open) {
        setEditOrderOpen(false);
        setEditingOrder(null);
      }
    }}
  >
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Edit Order</DialogTitle>
      </DialogHeader>
      {editingOrder && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="order-id">Order ID</Label>
              <Input id="order-id" value={editingOrder.id} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-date">Date</Label>
              <Input
                id="order-date"
                value={editingOrder.date}
                onChange={(e) =>
                  setEditingOrder({ ...editingOrder, date: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="customer-name">Customer</Label>
              <Input
                id="customer-name"
                value={editingOrder.customer}
                onChange={(e) =>
                  setEditingOrder({
                    ...editingOrder,
                    customer: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-status">Status</Label>
              <Select
                value={editingOrder.status.toLowerCase()}
                onValueChange={(value) =>
                  setEditingOrder({
                    ...editingOrder,
                    status: value.charAt(0).toUpperCase() + value.slice(1),
                  })
                }
              >
                <SelectTrigger id="order-status">
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
            </div>
          </div>

          <div className="space-y-2">
            <Label>Prescription Required</Label>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="prescription-yes"
                  name="prescription-required"
                  checked={editingOrder.requiresPrescription}
                  onChange={() =>
                    setEditingOrder({
                      ...editingOrder,
                      requiresPrescription: true,
                    })
                  }
                />
                <Label
                  htmlFor="prescription-yes"
                  className="cursor-pointer"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="prescription-no"
                  name="prescription-required"
                  checked={!editingOrder.requiresPrescription}
                  onChange={() =>
                    setEditingOrder({
                      ...editingOrder,
                      requiresPrescription: false,
                    })
                  }
                />
                <Label htmlFor="prescription-no" className="cursor-pointer">
                  No
                </Label>
              </div>
            </div>
          </div>

          {editingOrder.requiresPrescription && (
            <div className="space-y-2">
              <Label>Prescription Verified</Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="verified-yes"
                    name="prescription-verified"
                    checked={editingOrder.prescriptionVerified}
                    onChange={() =>
                      setEditingOrder({
                        ...editingOrder,
                        prescriptionVerified: true,
                      })
                    }
                  />
                  <Label htmlFor="verified-yes" className="cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="verified-no"
                    name="prescription-verified"
                    checked={!editingOrder.prescriptionVerified}
                    onChange={() =>
                      setEditingOrder({
                        ...editingOrder,
                        prescriptionVerified: false,
                      })
                    }
                  />
                  <Label htmlFor="verified-no" className="cursor-pointer">
                    No
                  </Label>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>Order Items</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setEditingOrder({
                    ...editingOrder,
                    items: [
                      ...editingOrder.items,
                      { name: "", quantity: 1, price: "$0.00" },
                    ],
                  })
                }
              >
                Add Item
              </Button>
            </div>
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-center">Qty</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {editingOrder.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Input
                          value={item.name}
                          onChange={(e) => {
                            const updatedItems = [...editingOrder.items];
                            updatedItems[index].name = e.target.value;
                            setEditingOrder({
                              ...editingOrder,
                              items: updatedItems,
                            });
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => {
                            const updatedItems = [...editingOrder.items];
                            updatedItems[index].quantity = Number.parseInt(
                              e.target.value
                            );
                            setEditingOrder({
                              ...editingOrder,
                              items: updatedItems,
                            });
                          }}
                          className="text-center"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={item.price}
                          onChange={(e) => {
                            const updatedItems = [...editingOrder.items];
                            updatedItems[index].price = e.target.value;
                            setEditingOrder({
                              ...editingOrder,
                              items: updatedItems,
                            });
                          }}
                          className="text-center"
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-600"
                          onClick={() => {
                            const updatedItems = editingOrder.items.filter(
                              (_, i) => i !== index
                            );
                            setEditingOrder({
                              ...editingOrder,
                              items: updatedItems,
                            });
                          }}
                          disabled={editingOrder.items.length <= 1}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className="text-right font-medium"
                    >
                      Total
                    </TableCell>
                    <TableCell className="text-center font-medium">
                      {`$${editingOrder.items
                        .reduce((sum, item) => {
                          const price = Number.parseFloat(
                            item.price.replace("$", "")
                          );
                          return sum + price * item.quantity;
                        }, 0)
                        .toFixed(2)}`}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      )}
      <DialogFooter>
        <Button
          variant="outline"
          onClick={() => {
            setEditOrderOpen(false);
            setEditingOrder(null);
          }}
        >
          Cancel
        </Button>
        <Button onClick={handleUpdateOrder}>Save Changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default OrderEidites;
