import { responseType } from '@/components/utils/ProductsDataArrayAndType'
import ProductDetail from '@/components/views/ProductDetail'
import  { FC } from 'react'

async function fetchPreviewData(slug:string){
  let res = await fetch(`https://zxyxfzkk.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current%3D%3D%22${slug}%22+%5D&perspective=published`)
  return res.json()
}
const Catalog= async({params}:{params:{slug:string}}) => {
  let data:responseType = await fetchPreviewData(params.slug)  
  return (
    <div><ProductDetail item={data.result[0]}/></div>
  )
}

export default Catalog