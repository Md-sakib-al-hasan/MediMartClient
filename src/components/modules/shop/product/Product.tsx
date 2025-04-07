"use client"

import { useState } from "react"
import { TbMenuOrder } from "react-icons/tb"
import { IoClose } from "react-icons/io5"
import imageone from "@/assets/home/product-12-1.jpg"
import imagetwo from "@/assets/home/product-13.jpg"
import ProductCard from "@/components/ui/core/productCard/Productcard"
import { SidebarFilter } from "../sidebar/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { PriceRange } from "../sidebar/price-range/price-range"
import { TagFilter } from "../sidebar/tag-filter/Tag-filter"
import { PrescriptionFilter } from "../sidebar/prescription-filter/prescription-filter"
import { BrandFilter } from "../sidebar/brand-filter/Brand-Filter"
import { CategoryList } from "../sidebar/category-filter/Category-filter"
import { Separator } from "@/components/ui/separator"

const data = [
    {
      title: "Online Only Triple Oxygen",
      categories: ["Covid Essentials", "Health Conditions", "Treatments"],
      price: 193.38,
      salePrice: 115.0,
      discount: 41,
      image:imageone,
    },
    {
      title: "Nutrilite Memory Builder Dietarylkjafkjdkfjkasjkdfjaksjdfksjjaksdfjksjsdfsdk",
      categories: ["Diabetes", "Eyewear", "Health Conditions"],
      price: 196.48,
      salePrice: 137.0,
      discount: 30,
      image: imagetwo,
    },
    {
      title: "Online Only Triple Oxygen",
      categories: ["Covid Essentials", "Health Conditions", "Treatments"],
      price: 193.38,
      salePrice: 115.0,
      discount: 41,
      image:imageone,
    },
    {
      title: "Nutrilite Memory Builder Dietarylkjafkjdkfjkasjkdfjaksjdfksjjaksdfjksjsdfsdk",
      categories: ["Diabetes", "Eyewear", "Health Conditions"],
      price: 196.48,
      salePrice: 137.0,
      discount: 30,
      image: imagetwo,
    },
    {
      title: "Online Only Triple Oxygen",
      categories: ["Covid Essentials", "Health Conditions", "Treatments"],
      price: 193.38,
      salePrice: 115.0,
      discount: 41,
      image:imageone,
    },
    {
      title: "Nutrilite Memory Builder Dietarylkjafkjdkfjkasjkdfjaksjdfksjjaksdfjksjsdfsdk",
      categories: ["Diabetes", "Eyewear", "Health Conditions"],
      price: 196.48,
      salePrice: 137.0,
      discount: 30,
      image: imagetwo,
    },
    {
      title: "Online Only Triple Oxygen",
      categories: ["Covid Essentials", "Health Conditions", "Treatments"],
      price: 193.38,
      salePrice: 115.0,
      discount: 41,
      image:imageone,
    },
    {
      title: "Nutrilite Memory Builder Dietarylkjafkjdkfjkasjkdfjaksjdfksjjaksdfjksjsdfsdk",
      categories: ["Diabetes", "Eyewear", "Health Conditions"],
      price: 196.48,
      salePrice: 137.0,
      discount: 30,
      image: imagetwo,
    },
    {
      title: "Online Only Triple Oxygen",
      categories: ["Covid Essentials", "Health Conditions", "Treatments"],
      price: 193.38,
      salePrice: 115.0,
      discount: 41,
      image:imageone,
    },
    {
      title: "Nutrilite Memory Builder Dietarylkjafkjdkfjkasjkdfjaksjdfksjjaksdfjksjsdfsdk",
      categories: ["Diabetes", "Eyewear", "Health Conditions"],
      price: 196.48,
      salePrice: 137.0,
      discount: 30,
      image: imagetwo,
    },
  ]
  

export default function Product() {
  const [sortOption, setSortOption] = useState("default")
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  const handleFilter = () => {
    setIsOpenFilter(prev => !prev)
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] lg:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar Filter - Large Screens */}
        <div className="lg:block hidden">
          <SidebarFilter />
        </div>

        {/* Product Results */}
        <div className="">
          {/* Filter Button & Sorting */}
          <div className="md:flex items-center justify-between mt-3 space-y-5">
            <div className="flex justify-between gap-8">
              <div className="lg:hidden">
                <button onClick={handleFilter} className="flex items-center gap-2 text-sm font-medium">
                  <TbMenuOrder />
                  Filter
                </button>
              </div>
              <p className="text-gray-500">Showing the single result</p>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="md:w-[180px] w-full">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default sorting</SelectItem>
                  <SelectItem value="popularity">Sort by popularity</SelectItem>
                  <SelectItem value="rating">Sort by average rating</SelectItem>
                  <SelectItem value="latest">Sort by latest</SelectItem>
                  <SelectItem value="price-low">Sort by price: low to high</SelectItem>
                  <SelectItem value="price-high">Sort by price: high to low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product List */}
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-8 gap-4 justify-items-center py-5">
            {data.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      {isOpenFilter && (
        <div className="fixed z-50 inset-0  lg:hidden">
          <div className="md:w-6/12  bg-white h-full p-4 overflow-y-auto relative">
            <button onClick={handleFilter} className="absolute top-4 right-4 text-2xl text-gray-600">
              <IoClose />
            </button>
             <div className=" min-h-screen"> 
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
          </div>
        </div>
      )}
    </div>
  )
}
