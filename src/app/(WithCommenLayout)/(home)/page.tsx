import LatestArticles from "@/components/modules/home/articles/articles";
import Brands from "@/components/modules/home/brands/brands";
import CategoriesComponent from "@/components/modules/home/catagories/Catagorie";
import DailyWillBeing from "@/components/modules/home/Daily well-being/DailyWillbeing";
import DailyHealthCard from "@/components/modules/home/Dailyhealthcard/DailyHealthcard";
import Feedbacked from "@/components/modules/home/feedbacked/feedbaked";
import HowtoOrder from "@/components/modules/home/HowtoOrder/HowtoOrder";
import MedicineCard from "@/components/modules/home/medicineCard/MedicineCard";
import Newsletter from "@/components/modules/home/newsletter/Newsletter";
import Ourservices from "@/components/modules/home/ourServices/Ourservices";
import ProduCatagories from "@/components/modules/home/productCatagories/ProductCatagories";
import ProductsSlider from "@/components/modules/home/productslicer/ProductsSlider";
import Totalservices from "@/components/modules/home/totalServices/totalservices";
import Carousel from "@/components/ui/core/Carousel/Carousel";



export default function Home() {
  return (
       <div className="space-y-10">
        <Carousel/>
        <CategoriesComponent/>
        <MedicineCard/>
        <ProduCatagories/>
        <ProductsSlider/>
        <Brands/>
        <DailyWillBeing/>
        <DailyHealthCard/>
        <HowtoOrder/>
        <LatestArticles/>
        <Totalservices/>
        <Feedbacked/>
        <Newsletter/>
        <Ourservices/>
       </div>
  );
}
