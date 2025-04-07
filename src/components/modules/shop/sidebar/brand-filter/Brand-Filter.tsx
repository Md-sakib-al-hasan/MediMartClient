"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Sample brands data
const brands = [
  { id: "apple", label: "Apple" },
  { id: "samsung", label: "Samsung" },
  { id: "sony", label: "Sony" },
  { id: "lg", label: "LG" },
  { id: "philips", label: "Philips" },
]

export function BrandFilter() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]))
  }

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">Brand</h3>
      <div className="space-y-2">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center space-x-2">
            <Checkbox
              id={`brand-${brand.id}`}
              checked={selectedBrands.includes(brand.id)}
              onCheckedChange={() => toggleBrand(brand.id)}
              
            />
            <Label
              htmlFor={`brand-${brand.id}`}
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {brand.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

