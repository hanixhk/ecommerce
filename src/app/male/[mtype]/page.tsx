import { oneProductType, responseType } from '@/components/utils/ProductsDataArrayAndType';
import Card from '@/components/views/Card';
import React from 'react'

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+productTypes%5B1%5D%3D%3D%22male%22+%5D&perspective=published`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }
  console.log(Error)
  return res.json();
}

const male =async ({params}:{params:{ftype:string}}) => {
  let res:responseType=await fetchAllProductsData();
  console.log(res.result)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4'
    >{res.result.map((items:oneProductType,index:number)=>(
      // eslint-disable-next-line react/jsx-key
      <Card key={index} singleProductData={items}/>
    ))}</div>
  )
}

export default male