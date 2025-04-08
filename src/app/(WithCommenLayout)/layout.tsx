
import MessengerChatPreview from "@/components/shared/liveChat/LiveChat";





export default function CommenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
     <div>
      
       {children}
       <div>
        <MessengerChatPreview/>
       </div>
       
     </div>
       
     
  );
}
