"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function PriceRange() {
  const [priceRange, setPriceRange] = useState([100, 200])

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">Price Range</h3>
      <Slider
        defaultValue={priceRange}
        max={500}
        min={0}
        step={10}
        onValueChange={handlePriceChange}
        className="py-4 "
      />
      <div className="text-sm text-gray-700">
        Price: ${priceRange[0]} — ${priceRange[1]}
      </div>
    </div>
  )
}

