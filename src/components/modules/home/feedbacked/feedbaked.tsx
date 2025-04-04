"use client"
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star, User } from 'lucide-react'


const data = [
    {
      id: 1,
      rating: 5,
      text: "At Medilazar, I can find easily the medicine I need. They sell a lot of pharmacy products and sometimes they offer a discount for me.",
      name: "Debanjan Roy",
      date: "April 18, 2020"
    },
    {
      id: 2,
      rating: 5,
      text: "Medilazar pharmacy is the best one. Staffs are so supportive and behaved. Medicine price is genuine. Thanks",
      name: "Rajarshi Sarkar",
      date: "September 25, 2020"
    },
    {
      id: 3,
      rating: 5,
      text: "I bought medicine at Medilazar shop a lot. Products are so good. The price is a bit high because of high-quality medicines. No problem",
      name: "Lipi Chaudhuri",
      date: "August 28, 2020"
    }
  ]

export default function Feedbacked() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    mode: "snap",
    drag: true,
    created(s) {
      setInterval(() => s.next(), 5000);
    },
  });

  return (
    <section >
      <h2 className="lg:text-3xl text-2xl font-bold text-center mb-10 ">Trusted by 10 Lakh Customers <br></br> across 3600+ Cities</h2>
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
            <Card key={item.id} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                {item.text}
              </p>
              <div className="flex items-center mt-20">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
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
