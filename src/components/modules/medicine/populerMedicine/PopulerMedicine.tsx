"use client"
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/core/productCard/Productcard";
import imageone from "@/assets/home/product-12-1.jpg"
import imagetwo from "@/assets/home/product-13.jpg"


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

export default function PopulerMedicine() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 30 },
      },
    },
    mode: "snap",
    drag: true,
    created(s) {
      setInterval(() => s.next(), 30000);
    },
  });

  return (
    <section className=" pb-10">
      <h2 className="lg:text-3xl text-2xl container mx-auto font-bold  pl-10 py-10 ">Related products</h2>
      <div className="relative w-full   mx-auto">
      <Button
        className="absolute hidden lg:block left-2  top-1/2 transform -translate-y-1/2 z-10"
        onClick={() => instanceRef.current?.prev()}
      >
        <ChevronLeft />
      </Button>
      <div ref={sliderRef} className="keen-slider  container  mx-auto  ">
        {data.map((product, index) => (
            <div key={index} className="keen-slider__slide md:pl-0 md:justify-start md:items-start  flex flex-col justify-center items-center" >
              <ProductCard   {...product} />
            </div>
        ))}
      </div>
      <Button
             className=" hidden lg:block absolute right-2  top-1/2 transform -translate-y-1/2 z-10"
             onClick={() => instanceRef.current?.next()}
           >
             <ChevronRight />
           </Button>
    </div>
    </section>
  );
}









