import Image from "next/image"
import { Plus } from "lucide-react"
import imageone from "@/assets/home/blog-3-330x208.jpg"
import imagetwo from "@/assets/home/blog-4-330x208.jpg"
import imagethree from "@/assets/home/blog-5-330x208.jpg"
import imagefoure from "@/assets/home/blog-6-330x208.jpg"

export default function LatestArticles() {
  const articles = [
    {
      id: 1,
      title: "Quick Guide to Identify Slipped or Bulging Disc",
      date: "14-OCT-2020",
      image: imageone,
      alt: "Person with back pain sitting at desk",
    },
    {
      id: 2,
      title: "Thyroid in Kids: Everything You Need to Know",
      date: "14-OCT-2020",
      image: imagetwo,
      alt: "Elderly couple with medical documents",
    },
    {
      id: 3,
      title: "What's the Link between Lupus and Arthritis?",
      date: "14-OCT-2020",
      image:imagethree,
      alt: "Blood glucose testing",
    },
    {
      id: 4,
      title: "Hypertension: Most Commonly Asked Questions",
      date: "14-OCT-2020",
      image: imagefoure,
      alt: "Person taking medication",
    },
  ]

  return (
    <div className="w-full bg-[#f5f8fa] py-12 px-4 md:px-8">
      <div className="container  mx-auto">
        <h2 className="lg:text-3xl  font-bold text-center mb-10 text-[#2d3748]">Latest Articles & Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.alt} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">
                  POSTED ON: <span className="text-[#00b5bd]">{article.date}</span>
                </p>
                <h3 className="font-bold text-lg mb-6 text-[#2d3748] leading-tight">{article.title}</h3>
                <div className="flex items-center">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00b5bd] text-white hover:bg-[#009da4] transition-colors mr-2">
                    <Plus size={20} />
                  </button>
                  <span className="font-medium text-[#00b5bd]">READ MORE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

