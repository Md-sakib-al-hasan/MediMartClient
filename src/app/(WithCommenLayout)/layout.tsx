import Footer from "@/components/shared/footer/Footer";
import MessengerChatPreview from "@/components/shared/liveChat/LiveChat";
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
       <div>
        <MessengerChatPreview/>
       </div>
       <Footer/>
     </div>
       
     
  );
}
