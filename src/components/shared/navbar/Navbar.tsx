'use client'
import { useState } from 'react';
import {  Search, User, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { TbMenu3 } from 'react-icons/tb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Page', path: '/page' },
  { name: 'Blog', path: '/blog' },
  { name: 'On sale', path: '/on-sale' },
  { name: 'Contact', path: '/contact' },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center container mx-auto  justify-between  p-4  bg-white">
      {/* Logo */}
      <div className="">
        <div className='w-9/12 flex justify-end'>
        <Image src="/logo.png"  alt="Medilazar" className="" />
        
        </div>
        <div className='flex flex-col'>
        <span className="text-3xl  leading-none font-bold">MediMart</span>
        <span className='capitalize text-md text-center text-gray-400'>Online Pharmacy</span>
        </div>
      </div>

      {/* Menu Button (Mobile) */}
      <button
        
        className=" lg:hidden flex py-3 text-white px-4 hover:bg-[#eb3a7b] bg-[#2ea5b6] rounded-full w-[120px] items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='flex gap-5 text-sm'>Menu<TbMenu3 size={24} /></span>
      </button>

      {/* Main Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg   z-50"
          >
            <button  onClick={() => setIsOpen(!isOpen)} className='w-full bg-[#f3f4f6] text-right py-1 text-2xl px-4 ' >x</button>
            <nav className="flex flex-col">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="flex hover:text-[#2ea5b6] justify-between items-center p-4 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
           
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden lg:flex items-center justify-between xl:w-9/12 lg:w-10/12  ">

     {/* Menu Button  */}
      <button
        
        className=" flex py-3 text-white px-4 hover:bg-[#eb3a7b] bg-[#2ea5b6] rounded-full w-[120px] items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='flex gap-5 text-sm'>Menu<TbMenu3 size={24} /></span>
      </button>


        {/* Search Bar */}
        <div className="relative w-6/12 items-center flex ">
          <Select >
          <SelectTrigger  className="py-5.5 pl-5 text-black rounded-l-full border-none bg-gray-100" >
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
         <div className='h-6 w-[2px] bg-[#c6c8ca]'></div>
          <input
            type="text"
            placeholder="Search..."
            className="border-none rounded-r-full placeholder:text-sm px-5  w-full border-gray-300 focus:outline-none py-2.5  bg-gray-100 "
          />
          <Button className="absolute  hover:bg-gray-100 shadow-none bg-gray-100 bg-none border-none right-1 top-0 h-full rounded-r-full">
            <Search className='text-[#afb0b1]' size={20} />
          </Button>
        </div>

        {/* Icons */}
        <div className="flex w-[30%] justify-between items-center">
      <Link href="/signin" className="flex items-center gap-1 ">
        <User size={25} /> <span className='text-[12px]  text-black uppercase font-semibold hover:text-[#2ea5b6]'>Sign In</span> / <span className='text-[12px] text-black font-semibold hover:text-[#2ea5b6] uppercase'> Register</span> 
      </Link>
      <Link href="/wishlist" className='hover:text-[#2ea5b6]'>
        <Heart size={25} />
      </Link>
      <Link href="/cart" className="relative flex gap-2 hover:text-[#2ea5b6]">
        <div className='relative'>
        <ShoppingBag size={25} />
        <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">0</span>
        </div>
        $0.00
      </Link>
    </div>
      </div>
    </nav>
  );
}
