import { Button } from '@/components/ui/button'
import Image from 'next/image'
import notFound from "@/assets/notFound/notFound.png"
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="md:w-full min-h-screen h-dvh w-dvw md:h-full relative">
    <div className="absolute  inset-1/6 max-w-[319px] min-w-[319px] flex items-center justify-around">
      <div className="">
     
      <p className="text-5xl font-bold  mb-2 text-[#24aeb1]">404</p>
       <div>
         <h4 className="text-[#4B5865] text-[22px] font-semibold">Page not found</h4>
         <p className="text-[#818A93] text-[14px]">{`Sorry, the content that you are looking for doesn't exist.`}</p>
       </div>
      <Button className="mt-6"><Link href="/">Go Home</Link></Button>  
      </div>
    </div>
    <Image className="w-full min-h-screen object-cover " src={notFound} alt="NotFound"></Image>
</div>
  )
}