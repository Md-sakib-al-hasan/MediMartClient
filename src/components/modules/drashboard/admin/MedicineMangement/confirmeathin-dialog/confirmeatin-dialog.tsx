"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TConfirmDialogState {
  open: boolean
  action: string
  medicineId: string
}

interface ConfirmationDialogProps {
  confirmDialog: TConfirmDialogState
  setConfirmDialog: (state: TConfirmDialogState) => void
  onConfirm: (medicineId: string) => void
}

export default function ConfirmationDialog({ confirmDialog, setConfirmDialog, onConfirm }: ConfirmationDialogProps) {
  const handleCancel = () => {
    setConfirmDialog({ open: false, action: "", medicineId: "" })
  }

  const handleConfirm = () => {
    onConfirm(confirmDialog.medicineId)
  }

  return (
    <Dialog open={confirmDialog.open} onOpenChange={(open) => setConfirmDialog({ ...confirmDialog, open })}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            {confirmDialog.action === "delete"
              ? "Are you sure you want to delete this medicine? This action cannot be undone."
              : "Please confirm this action."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            {confirmDialog.action === "delete" ? "Delete" : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
