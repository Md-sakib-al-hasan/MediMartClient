"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface MedicineDetailsProps {
  medicine: {
    id: string
    name: string
    category: string
    price: string
    stock: number
    requiresPrescription: boolean
    status: string
    manufacturer: string
    expiryDate: string
  }
  open: boolean
  setOpen: (open: boolean) => void
}

export default function MedicineDetails({ medicine, open, setOpen }: MedicineDetailsProps) {
  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "low stock":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "out of stock":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "discontinued":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Medicine Details</DialogTitle>
          <DialogDescription>Detailed information about this medicine.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">ID:</span>
            <span>{medicine.id}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Name:</span>
            <span>{medicine.name}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Category:</span>
            <span>{medicine.category}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Price:</span>
            <span>{medicine.price}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Stock:</span>
            <span>{medicine.stock} units</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Status:</span>
            <Badge variant="outline" className={getStatusColor(medicine.status)}>
              {medicine.status}
            </Badge>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Prescription:</span>
            <span>{medicine.requiresPrescription ? "Required" : "Not Required"}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Manufacturer:</span>
            <span>{medicine.manufacturer}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] items-center gap-2">
            <span className="font-medium text-muted-foreground">Expiry Date:</span>
            <span>{medicine.expiryDate}</span>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
