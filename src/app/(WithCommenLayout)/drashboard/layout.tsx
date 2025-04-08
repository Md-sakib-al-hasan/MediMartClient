import Contact from "@/components/modules/userDashboard/contact/Contact";
import Drashboradmange from "@/components/modules/userDashboard/drashboardManage/Drashboradmange";




export default function CommenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <div className="py-10">
       <Drashboradmange >{children}</Drashboradmange>
       <Contact/>
     </div>
  );
}
