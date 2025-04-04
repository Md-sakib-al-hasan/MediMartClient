import Image from "next/image"
import Link from "next/link"
import image from "@/assets/home/brand1.svg"
import image1 from "@/assets/home/brand2.svg"
import image2 from "@/assets/home/brand3.svg"
import image3 from "@/assets/home/brand4.svg"
import image4 from "@/assets/home/brand5.svg"
import image5 from "@/assets/home/brand6.svg"
import image6 from "@/assets/home/brand7.svg"
import image7 from "@/assets/home/brand8.svg"

export default function Brands() {
  const brands = [
    {
      name: "Hospital",
      logo: image,
      href: "#",
    },
    {
      name: "River",
      logo:image1,
      href: "#",
    },
    {
      name: "Gomedical",
      logo: image2,
      href: "#",
    },
    {
      name: "Click Medic",
      logo: image3,
      href: "#",
    },
    {
      name: "DrugStore",
      logo: image4,
      href: "#",
    },
    {
      name: "Medical",
      logo:image5,
      href: "#",
    },
    {
      name: "Pharmacy",
      logo: image6,
      href: "#",
    },
    {
      name: "Dental Consult",
      logo: image7,
      href: "#",
    },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-3xl font-bold text-center mb-10"> Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={brand.href}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={150}
                height={60}
                className="max-h-16 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

