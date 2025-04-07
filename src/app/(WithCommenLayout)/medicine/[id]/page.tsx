
import SingleMedicineCard from "@/components/modules/medicine/medicineCard/SingleMedicineCard";
import PopulerMedicine from "@/components/modules/medicine/populerMedicine/PopulerMedicine";
import ProductInfo from "@/components/modules/medicine/ProductInfo/ProductInfo";


export default function Medicinepage() {
  return (
    <div>
         <SingleMedicineCard/>
         <ProductInfo/>
         <PopulerMedicine/>
    </div>
  )
}
