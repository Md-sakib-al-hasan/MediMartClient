import { Separator } from "@/components/ui/separator"
import { CategoryList } from "./category-filter/Category-filter"
import { PriceRange } from "./price-range/price-range"
import { BrandFilter } from "./brand-filter/Brand-Filter"
import { PrescriptionFilter } from "./prescription-filter/prescription-filter"
import { TagFilter } from "./tag-filter/Tag-filter"


export function SidebarFilter() {
  return (
    <div className="w-full max-w-[300px] space-y-4 hidden lg:block ">
      <div className="rounded-md bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
        <Separator className="my-4" />
        <CategoryList />
      </div>

      <div className="rounded-md bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Filter</h2>
        <Separator className="my-4" />
        <div className="space-y-6">
          <PriceRange />
          <BrandFilter />
          <PrescriptionFilter />
          <TagFilter />
        </div>
      </div>
    </div>
  )
}

