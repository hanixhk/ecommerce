import  ImageUrlBuilder  from "@sanity/image-url";
import { FC } from "react";
import { oneProductType } from "../utils/ProductsDataArrayAndType";
import { client } from "../../../sanity/lib/client";

const builder =ImageUrlBuilder(client);


const Card:FC<{singleProductData:oneProductType}> = ({singleProductData}) => {
  function urlFor(source:any){
    return builder.image(source)
  }
  console.log(urlFor(singleProductData.image[0]).width(500).url())
  return (
    <div className="border-4">
      <div>
        
      </div>
    </div>
  )
}

export default Card