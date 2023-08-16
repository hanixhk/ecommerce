import Image from 'next/image'
import Hero from '../components/views/Hero'
import ProductsType from '@/components/views/Product Types'
import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import ProductCarousel from '@/components/views/ProductCarousel';
// import { responseType } from '@/components/utils/ProductsDataArrayAndType';
async function fetchAllProductsData() {
  // let res = await fetch(`${BASE_PATH_FORAPI}/api/products`); 
  // if (!res.ok) {
  //   throw new Error("Failed to fetch")
  // }
  // return res.json();
  return {response:"HI"}
}
export default async function Home() {
  let { response } =await fetchAllProductsData();
  return (
   <div>
    <Hero /> 
     <ProductsType/>
    <ProductCarousel ProductData={response} />
   </div>
    )
}
