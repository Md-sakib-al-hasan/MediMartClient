import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React from 'react'
import { TConfirmDialogState } from '../OrderMangement';

type TpropsConfirmationDilog = {
  confirmDialog: TConfirmDialogState,
  setConfirmDialog: React.Dispatch<React.SetStateAction<TConfirmDialogState>>;
  verifyPrescription: (orderId: string, verified: boolean) => void,
  updateOrderStatus: (orderId: string, newStatus: string) => void,
}



 const ConfirmationDialog = ({confirmDialog,setConfirmDialog, verifyPrescription, updateOrderStatus}:TpropsConfirmationDilog) => {
  return (
    <Dialog
        open={confirmDialog.open}
        onOpenChange={(open) =>
          !open && setConfirmDialog({ open, action: "", orderId: "" })
        }
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {confirmDialog.action === "approve"
                ? "Approve Prescription"
                : "Reject Prescription"}
            </DialogTitle>
            <DialogDescription>
              {confirmDialog.action === "approve"
                ? "Are you sure you want to approve this prescription? This will mark it as verified."
                : "Are you sure you want to reject this prescription? This will cancel the order."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() =>
                setConfirmDialog({ open: false, action: "", orderId: "" })
              }
            >
              Cancel
            </Button>
            <Button
              variant={
                confirmDialog.action === "approve" ? "default" : "destructive"
              }
              onClick={() => {
                if (confirmDialog.action === "approve") {
                  verifyPrescription(confirmDialog.orderId, true);
                } else {
                  verifyPrescription(confirmDialog.orderId, false);
                  updateOrderStatus(confirmDialog.orderId, "Cancelled");
                }
              }}
            >
              {confirmDialog.action === "approve" ? "Approve" : "Reject"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}

export default ConfirmationDialog;