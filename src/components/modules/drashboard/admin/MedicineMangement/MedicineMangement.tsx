"use client"

import { useState } from "react"
import { Plus, Filter, MoreHorizontal, SearchIcon, Settings, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import MedicineDetails from "./medicine-detail/medicine-details"
import MedicineForm from "./medicine-form/medicine-form"
import ConfirmationDialog from "./confirmeathin-dialog/confirmeatin-dialog"

// Define TypeScript interfaces
interface TMedicine {
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

export interface TConfirmDialogState {
  open: boolean
  action: string
  medicineId: string
}

// Sample data - in a real app this would come from an API
const MedicinesData: TMedicine[] = [
  {
    id: "MED-1001",
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    price: "$12.99",
    stock: 150,
    requiresPrescription: true,
    status: "Active",
    manufacturer: "PharmaCorp",
    expiryDate: "2025-06-15",
  },
  {
    id: "MED-1002",
    name: "Ibuprofen 200mg",
    category: "Pain Relief",
    price: "$8.50",
    stock: 200,
    requiresPrescription: false,
    status: "Active",
    manufacturer: "HealthMeds",
    expiryDate: "2025-08-20",
  },
  {
    id: "MED-1003",
    name: "Lisinopril 10mg",
    category: "Blood Pressure",
    price: "$15.75",
    stock: 85,
    requiresPrescription: true,
    status: "Active",
    manufacturer: "CardioPharm",
    expiryDate: "2024-12-10",
  },
  {
    id: "MED-1004",
    name: "Vitamin D3 1000IU",
    category: "Supplements",
    price: "$9.99",
    stock: 300,
    requiresPrescription: false,
    status: "Active",
    manufacturer: "NutriLife",
    expiryDate: "2026-02-28",
  },
  {
    id: "MED-1005",
    name: "Metformin 500mg",
    category: "Diabetes",
    price: "$11.25",
    stock: 120,
    requiresPrescription: true,
    status: "Active",
    manufacturer: "DiabeCare",
    expiryDate: "2025-04-15",
  },
  {
    id: "MED-1006",
    name: "Cetirizine 10mg",
    category: "Allergy",
    price: "$7.99",
    stock: 175,
    requiresPrescription: false,
    status: "Low Stock",
    manufacturer: "AllergyRelief",
    expiryDate: "2025-09-30",
  },
  {
    id: "MED-1007",
    name: "Atorvastatin 20mg",
    category: "Cholesterol",
    price: "$18.50",
    stock: 0,
    requiresPrescription: true,
    status: "Out of Stock",
    manufacturer: "HeartHealth",
    expiryDate: "2025-03-15",
  },
]

export default function  Medicinemenagement() {
  const [medicines, setMedicines] = useState<TMedicine[]>(MedicinesData)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [selectedMedicine, setSelectedMedicine] = useState<TMedicine | null>(null)
  const [confirmDialog, setConfirmDialog] = useState<TConfirmDialogState>({
    open: false,
    action: "",
    medicineId: "",
  })
  const [medicineDetailsOpen, setMedicineDetailsOpen] = useState<boolean>(false)
  const [medicineFormOpen, setMedicineFormOpen] = useState<boolean>(false)
  const [editingMedicine, setEditingMedicine] = useState<TMedicine | null>(null)

  // Filter medicines based on search term and category
  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch =
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || medicine.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  // Handle adding a new medicine
  const handleAddMedicine = (newMedicine: TMedicine) => {
    setMedicines([...medicines, { ...newMedicine, id: `MED-${1000 + medicines.length + 1}` }])
    setMedicineFormOpen(false)
  }

  // Handle updating a medicine
  const handleUpdateMedicine = (updatedMedicine: TMedicine) => {
    setMedicines(medicines.map((medicine) => (medicine.id === updatedMedicine.id ? updatedMedicine : medicine)))
    setMedicineFormOpen(false)
    setEditingMedicine(null)
  }

  // Handle deleting a medicine
  const handleDeleteMedicine = (medicineId: string) => {
    setMedicines(medicines.filter((medicine) => medicine.id !== medicineId))
    setConfirmDialog({ open: false, action: "", medicineId: "" })
  }

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
    <div className="p-6 max-w-[1400px] mx-auto bg-[#f2f4f5]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Medicine Management</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-1">Medicines</h2>
        <p className="text-muted-foreground">Add, update, and remove medicines from the inventory.</p>
      </div>

      <div className="bg-white rounded-lg border shadow-sm p-6">
        <div className="md:flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Medicines Inventory</h3>
          <div className="md:flex gap-2 mt-4 md:mt-0">
            <div className="relative mb-2 md:mb-0">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search medicines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-full md:w-[250px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10 gap-1 w-full md:w-auto mb-2 md:mb-0">
                  <Filter className="h-3.5 w-3.5" />
                  <span className="whitespace-nowrap">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Category</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setCategoryFilter("all")}>All Categories</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Antibiotics")}>Antibiotics</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Pain Relief")}>Pain Relief</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Blood Pressure")}>Blood Pressure</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Supplements")}>Supplements</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Diabetes")}>Diabetes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              className="w-full md:w-auto"
              onClick={() => {
                setEditingMedicine(null)
                setMedicineFormOpen(true)
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Medicine
            </Button>
          </div>
        </div>

        {/* Medicines Table */}
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden sm:table-cell">Price</TableHead>
                <TableHead className="hidden lg:table-cell">Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden xl:table-cell">Prescription</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMedicines.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                    No medicines found matching your filters
                  </TableCell>
                </TableRow>
              ) : (
                filteredMedicines.map((medicine) => (
                  <TableRow key={medicine.id}>
                    <TableCell className="font-medium">{medicine.id}</TableCell>
                    <TableCell>{medicine.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{medicine.category}</TableCell>
                    <TableCell className="hidden sm:table-cell">{medicine.price}</TableCell>
                    <TableCell className="hidden lg:table-cell">{medicine.stock}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(medicine.status)}>
                        {medicine.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      {medicine.requiresPrescription ? (
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Required
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                          Not Required
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-blue-600"
                          onClick={() => {
                            setSelectedMedicine(medicine)
                            setMedicineDetailsOpen(true)
                          }}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">View Details</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-amber-600"
                          onClick={() => {
                            setEditingMedicine({ ...medicine })
                            setMedicineFormOpen(true)
                          }}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-600"
                          onClick={() =>
                            setConfirmDialog({
                              open: true,
                              action: "delete",
                              medicineId: medicine.id,
                            })
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Medicine Details Dialog */}
      {medicineDetailsOpen && selectedMedicine && (
        <MedicineDetails medicine={selectedMedicine} open={medicineDetailsOpen} setOpen={setMedicineDetailsOpen} />
      )}

      {/* Medicine Form Dialog (Add/Edit) */}
      {medicineFormOpen && (
        <MedicineForm
          medicine={editingMedicine}
          open={medicineFormOpen}
          setOpen={setMedicineFormOpen}
          onSave={editingMedicine ? handleUpdateMedicine : handleAddMedicine}
        />
      )}

      {/* Confirmation Dialog */}
      {confirmDialog.open && (
        <ConfirmationDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
          onConfirm={handleDeleteMedicine}
        />
      )}
    </div>
  )
}
