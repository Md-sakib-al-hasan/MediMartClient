import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TConfirmDialogState, TOrder } from "../OrderMangement";
import { Check } from "lucide-react";
type TpropsOrderDetils = {
  selectedOrder: TOrder | null;
  orderDetailsOpen: boolean;
  setOrderDetailsOpen: (open: boolean) => void;
  setConfirmDialog: (item:TConfirmDialogState) => void;
} 


export const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "shipped":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "delivered":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

 const OrderDetails = ({selectedOrder,orderDetailsOpen,setOrderDetailsOpen, setConfirmDialog}:TpropsOrderDetils) => {
  return (
    <Dialog open={orderDetailsOpen} onOpenChange={setOrderDetailsOpen}>
    <DialogContent className="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>Order Details</DialogTitle>
      </DialogHeader>
      {selectedOrder && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Order ID
              </p>
              <p>{selectedOrder.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Date
              </p>
              <p>{selectedOrder.date}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Customer
              </p>
              <p>{selectedOrder.customer}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Status
              </p>
              <Badge className={getStatusColor(selectedOrder.status)}>
                {selectedOrder.status}
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Items
            </p>
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Qty</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedOrder.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right">
                        {item.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        {item.price}
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
                    <TableCell className="text-right font-medium">
                      {selectedOrder.total}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Prescription
            </p>
            <div className="p-3 border rounded-md">
              {selectedOrder.requiresPrescription ? (
                selectedOrder.prescriptionVerified ? (
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-2" />
                    Prescription verified
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-yellow-600">
                      <span className="mr-2">⚠️</span>
                      Prescription verification pending
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          setOrderDetailsOpen(false);
                          setConfirmDialog({
                            open: true,
                            action: "approve",
                            orderId: selectedOrder.id,
                          });
                        }}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          setOrderDetailsOpen(false);
                          setConfirmDialog({
                            open: true,
                            action: "reject",
                            orderId: selectedOrder.id,
                          });
                        }}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                )
              ) : (
                <div className="text-muted-foreground">
                  No prescription required for this order
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <DialogFooter>
        <Button onClick={() => setOrderDetailsOpen(false)}>Close</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}
export default OrderDetails;



