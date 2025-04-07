
import Image from "next/image";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import  Image1  from "@/assets/home/Dailycard1.png";
import  Image2  from "@/assets/home/DailyCard2.png";
import  Image3  from "@/assets/home/Dailycardtwofontend.png";
import  Image4 from "@/assets/home/dailycardonefontend.png";






const DailyHealthCard = () => {
  const cards = [
    {
      title: "Naturally Good",
      subtitle: "Flat 25% off",
      link: "/shop",
      image:Image1,
      image2:Image4,
     
    },
    {
      title: "Healthcare Products",
      subtitle: "Flat 30% off",
      link: "/shop",
      
      image:Image2,
      image2:Image3,

    },
  ];

  return (
    <div className="md:flex container mx-auto py-10  px-4 gap-8 md:space-y-0 space-y-10 ">
      {cards.map((card, index) => (
         <div key={index} className="w-full relative overflow-hidden">
            <div className="absolute inset-0 flex items-center group ">
               <ul className="xl:space-y-3 space-y-1.5 w-6/12 lg:pl-12 pl-4 ">
                   <li className="lg:text-xl md:text-sm font-semibold text-white">{card.subtitle}</li>
                   <li className="xl:text-4xl lg:text-3xl text-xl font-semibold text-white capitalize ">{card.title}</li>
                   <li className="xl:mt-8 lg:mt-4 mt-2 flex items-center lg:gap-4 gap-2.5 ">
                    <button   className="rounded-full group-hover:-ml-2.5  bg-white  lg:h-10 lg:w-10 flex items-center justify-center ">
                          <HiMiniArrowSmallRight size={30} className='text-black' />  
                    </button>
                    <span className="capitalize text-white lg:text-md text-sm font-semibold">shop now</span>
                   </li>
               </ul>
               <Image className="w-6/12 hover:scale-105" src={card.image2} width={300} height={150} alt="product"/>
            </div>
            <Image className="w-full rounded-md" src={card.image} width={100} height={50} alt="imge"/>
         </div>
      ))}
    </div>
  );
};

export default DailyHealthCard;
