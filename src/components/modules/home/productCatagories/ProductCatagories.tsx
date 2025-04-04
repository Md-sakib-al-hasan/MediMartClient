"use client"
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imageone from "@/assets/home/Home12_category1.png"
import imagetwo from "@/assets/home/home9_png-36-1.png"
import imagethree from "@/assets/home/home9_png-38-1.png"
import imagefoure from "@/assets/home/home9_png-39-1.png"
import imagefive from "@/assets/home/home9_png-40-1.png"
import Image from "next/image";

const data = [
  { title: "Health condition", products: 10, image: imageone },
  { title: "Skin care", products: 0, image: imagetwo },
  { title: "Healthcare devices", products: 3, image: imagethree },
  { title: "Infrared Thermometer", products: 0, image: imagefoure },
  { title: "Infrared Thermometer", products: 0, image: imagefive },
];

export default function ProduCatagories() {
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
      setInterval(() => s.next(), 3000);
    },
  });

  return (
    <section>
      <h2 className="lg:text-3xl text-2xl font-bold text-center mb-10 ">Popular Categories</h2>
      <div className="relative w-full   mx-auto">
      <Button
        className="absolute hidden lg:block left-2  top-1/2 transform -translate-y-1/2 z-10"
        onClick={() => instanceRef.current?.prev()}
      >
        <ChevronLeft />
      </Button>
      <div ref={sliderRef} className="keen-slider container  mx-auto ">
        {data.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <Card className=" shadow-md rounded-lg">
              <CardContent className=" flex items-center justify-items-center gap-5">
                <div>
                <Image  src={item.image} alt={item.title} className=" h-32 object-cover" />
                </div>
                <div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.products} products</p>
                </div>
              </CardContent>
            </Card>
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
