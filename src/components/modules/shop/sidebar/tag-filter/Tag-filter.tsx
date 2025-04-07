"use client"

import { useState } from "react"

// Sample tags data
const tags = [
  { id: "bread", label: "Bread" },
  { id: "fruits", label: "Fruits" },
  { id: "healthy", label: "Healthy" },
  { id: "juices", label: "Juices" },
  { id: "meat", label: "Meat" },
  { id: "natural", label: "Natural" },
  { id: "organic", label: "Organic" },
  { id: "tomato", label: "Tomato" },
]

export function TagFilter() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) => (prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]))
  }

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">Product tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.id}
            className={`rounded-full border px-3 py-1 text-sm ${
              selectedTags.includes(tag.id)
                ? "border-none bg-[#24aeb1] text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => toggleTag(tag.id)}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  )
}

