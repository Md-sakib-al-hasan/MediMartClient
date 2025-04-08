import { OrderDetails } from '@/components/modules/userDashboard/order-details/order-details'
import Loading from '@/components/shared/loading/loading'
import React from 'react'


const order = 
    {
      id: "8261",
      date: "07-Apr-2025",
      status: "On hold",
      total: 381.29,
      items: 3,
      products: [
        { name: "Zahler Real Calm Multivitamin", quantity: 2, price: 246.8 },
        { name: "Nordic Naturals Vitamin D3", quantity: 1, price: 134.49 },
      ],
      paymentMethod: "Direct bank transfer",
      billingAddress: {
        name: "md sakib al hasl qjfsdlkaskdf",
        street1: "shaonman",
        street2: "mjdkjfksdjkfsadfs",
        street3: "jaskdfjaksdfhasjk",
        city: "ADFASDFAS",
        country: "Afghanistan",
        phone: "0242721742171714",
        email: "mdsakibalhasanprogrammer1@gmail.com",
      },
    }
  
  

 const Orderpage = () => {
  return (
    <div  className='relative'>
    <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hidden ">
          <Loading/>
    </div>
    <OrderDetails
      order={order}
    />
    </div>
  )
}

export default Orderpage