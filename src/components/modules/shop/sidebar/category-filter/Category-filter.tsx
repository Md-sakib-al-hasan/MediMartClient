import { ChevronRight } from "lucide-react"
import { Accordion ,AccordionItem } from "@/components/ui/accordion"

// Sample categories data
const categories = [
  { id: 1, name: "Ayush" },
  { id: 2, name: "Covid Essentials" },
  { id: 3, name: "Devices" },
  { id: 4, name: "Diabetes" },
  { id: 5, name: "Eyewear" },
  { id: 6, name: "Fitness" },
  { id: 7, name: "Health Conditions" },
  { id: 8, name: "Mom & Baby" },
  { id: 9, name: "Otc Deals" },
  { id: 10, name: "Personal Care" },
  { id: 11, name: "Sexual Wellness" },
  { id: 12, name: "Surgical" },
  { id: 13, name: "Treatments" },
  { id: 14, name: "Uncategorized" },
]

export function CategoryList() {
  return (
    <div className="space-y-1">
      {categories.map((category) => (
        <Accordion type="single" collapsible key={category.id}>
          <AccordionItem value={`item-${category.id}`} className="border-0">
            
              <div className="flex items-center py-1">
                <ChevronRight className="mr-2 h-4 w-4 shrink-0 transition-transform duration-200" />
                {category.name}
              </div>
           
            
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}

