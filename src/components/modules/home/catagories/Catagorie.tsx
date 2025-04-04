import { FaPills, FaHeartbeat } from "react-icons/fa";
import { MdMedicalServices, MdHealthAndSafety } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

const categories = [
  {
    icon: <FaPills className="text-white text-2xl" />, 
    title: "Medicine", 
    description: "Over 25000 products", 
    bgColor: "bg-teal-400"
  },
  {
    icon: <MdMedicalServices className="text-white text-2xl" />, 
    title: "Wellness", 
    description: "Health products", 
    bgColor: "bg-pink-400"
  },
  {
    icon: <GiMedicines className="text-white text-2xl" />, 
    title: "Diagnostic", 
    description: "Book tests & checkups", 
    bgColor: "bg-green-400"
  },
  {
    icon: <FaHeartbeat className="text-white text-2xl" />, 
    title: "Health Corner", 
    description: "Trending from health experts", 
    bgColor: "bg-blue-400"
  },
  {
    icon: <MdHealthAndSafety className="text-white text-2xl" />, 
    title: "Others", 
    description: "More info", 
    bgColor: "bg-yellow-400"
  },
];

export default function CategoriesComponent() {
  return (
    <div className="grid container mx-auto md:justify-items-start lg:ml-[2%] xl:ml-[8%] justify-items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
      {categories.map((category, index) => (
        <div key={index} className="flex md:flex-row flex-col  items-center space-x-4">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full ${category.bgColor}`}>
            {category.icon}
          </div>
          <div>
            <h2 className="font-semibold text-lg">{category.title}</h2>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
