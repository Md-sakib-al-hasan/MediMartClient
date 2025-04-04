import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";



export default function CommenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
     <div>
       <Navbar/>
       {children}
       <Footer/>
     </div>
       
     
  );
}
