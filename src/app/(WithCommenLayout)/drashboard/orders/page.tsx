
import Orders from "@/components/modules/userDashboard/order/Ordder";
import Loading from "@/components/shared/loading/loading";




export default function Orderpage() {
  return (
    <div className="container mx-auto px-4 py-6 relative">
       <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hidden">
         <Loading/>
       </div>
      <Orders />
    </div>
  )
}
