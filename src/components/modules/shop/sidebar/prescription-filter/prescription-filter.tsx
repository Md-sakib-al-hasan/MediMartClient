"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function PrescriptionFilter() {
  const [requiresPrescription, setRequiresPrescription] = useState(false)

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">Prescription</h3>
      <div className="flex items-center space-x-2">
        <Switch id="prescription-required" checked={requiresPrescription} onCheckedChange={setRequiresPrescription} />
        <Label htmlFor="prescription-required" className="text-sm">
          Requires prescription
        </Label>
      </div>
    </div>
  )
}

