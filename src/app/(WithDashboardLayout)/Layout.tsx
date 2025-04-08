
import Management from "@/components/modules/drashboard/Mangement/Mangement";


export default function CommenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <div className="py-10">
       <Management >{children}</Management>
      
     </div>
  );
}
