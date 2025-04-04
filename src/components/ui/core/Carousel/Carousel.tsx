"use client"
import { useState } from 'react';
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import sliceoneimage from "@/assets/Carosue/one.png"
import slicetwoimage from "@/assets/Carosue/two.png"
import slicethreeimage from "@/assets/Carosue/three.png"
import Image from 'next/image';
import { Button } from '../../button';
import { ArrowRight } from 'lucide-react';
import { RiMedicineBottleLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaHandHoldingDollar } from 'react-icons/fa6';

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3);
 

  return (
    <div className="relative w-full group overflow-hidden ">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        
        {/* slider one */}
        <div className="w-full  flex-shrink-0 relativ min-h-60 ">
        <div className='absolute xl:px-0 md:px-2 px-4 inset-0 text-white flex justify-between container mx-auto items-center'>
        <ul className='lg:space-y-6 md:space-y-3.5  space-y-2'>
          {/* Left-to-right animation */}
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='uppercase md:text-lg text-sm font-bold'
          >
            products
          </motion.li>

          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='capitalize font-bold lg:text-6xl md:text-5xl text-xl'
          >
            Flat 25% off <br className='md:block hidden'></br> Medicine Order
          </motion.li>

          {/* Bottom-to-top animation */}
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='capitalize'
          >
            original price $2999
          </motion.li>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className='md:py-6 !px-6'>
              <div>Shop now</div> <ArrowRight />
            </Button>
          </motion.div>
        </ul>

        {/* Right-to-left animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='h-full flex items-end '
        >
          <Image className='h-10/12 lg:object-fill   object-contain  ' alt='doctor' src={sliceoneimage} />
        </motion.div>
      </div>
          <Image src="https://i.ibb.co.com/6771qc3g/slider1.png"  width={1000} height={50} alt="Slide 1" className="w-full h-full" />
        </div>
          {/* slider two */}
        <div className="w-full flex-shrink-0 relative min-h-60">
           <div className='absolute xl:px-0 md:px-2 px-4 inset-0 text-white flex justify-evenly container mx-auto items-center'>
                <Image className='w-3/12' src={slicetwoimage} alt='medicine'/>
                
                <ul className='lg:space-y-10 md:space-y-5 space-y-4 '>
                    <li className='lg:text-5xl  md:text-3xl font-bold'>Your Cancer care <br></br>  companion</li>
                    <li className=' hidden md:grid lg:grid-cols-3 md:grid-cols-2 md:space-y-4 lg:max-w-[500px] md:max-w-[300px]'>
                      <span className='flex items-center gap-2'> <RiMedicineBottleLine className='bg-white w-14 h-10 px-2  rounded-full text-[#2ea5b6]' /> <span className='text-sm'>Temperature controlled meds</span></span>
                      <span className='flex items-center gap-2'> <TbTruckDelivery className='bg-white w-10 h-10 px-2  rounded-full text-[#2ea5b6]' /> <span className='text-sm'>Free Doorstep Delivery</span></span>
                      <span className='flex items-center gap-2'> <FaHandHoldingDollar className='bg-white w-10 h-10 px-2  rounded-full text-[#2ea5b6]' /> <span className='text-sm'>Up to 70% Off</span></span>
                    </li>
                    <Button className='md:py-6 !px-6'>
                      <div>Shop now</div> <ArrowRight />
                    </Button>
                </ul>
                
           </div>
          <Image src="https://i.ibb.co.com/hRXHnxYd/slider2.png" width={1000} height={60}  alt="Slide 2" className="w-full h-full" />
        </div>
          {/* slider three */}
        <div className="w-full flex-shrink-0 relative min-h-60 ">
        <div className='absolute xl:px-0 md:px-2 px-4 inset-0 text-white flex justify-evenly container mx-auto items-center'>
        <ul className='lg:space-y-6 md:space-y-3.5  space-y-2'>
          {/* Left-to-right animation */}
          <motion.li 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='uppercase md:text-lg text-sm font-bold'
          >
            products
          </motion.li>

          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='capitalize font-bold lg:text-6xl md:text-5xl text-xl'
          >
            Flat 25% off <br className='md:block hidden'></br> Medicine Order
          </motion.li>

          {/* Bottom-to-top animation */}
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='capitalize'
          >
            original price $2999
          </motion.li>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className='md:py-6 !px-6'>
              <div>Shop now</div> <ArrowRight />
            </Button>
          </motion.div>
        </ul>

        {/* Right-to-left animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='h-full flex items-center  '
        >
          <Image className=' h-8/12 w-8/12 ' alt='doctor' src={slicethreeimage} />
        </motion.div>
      </div>
          <Image src="https://i.ibb.co.com/KjndnMcX/slider3.png" width={1000} height={50}  alt="Slide 3" className="w-full h-full" />
        </div>
      </div>

      <div className="absolute left-5 hidden group-hover:flex right-5 top-1/2  -translate-y-1/2 justify-between">
        <button  onClick={prevSlide} className="rounded-full bg-black/50 group h-12 w-12 hover:bg-[#2ea5b6] flex items-center justify-center ">
          <HiMiniArrowSmallLeft size={30} className='text-white' />  
        </button>
        <button  onClick={nextSlide} className="rounded-full  bg-black/50 group h-12 w-12 hover:bg-[#2ea5b6] flex items-center justify-center ">
          <HiMiniArrowSmallRight size={30} className='text-white' />  
        </button>
      </div>
    </div>
  );
};

export default Carousel;
