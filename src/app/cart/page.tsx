import CartComp from "@/components/views/CartParent/cartChild";
import ContextWrapper from "@/global/Context";

async function fatchAllStoreProducts() {
  let res = await fetch(`https://zxyxfzkk.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products']`, {
    cache: "no-store",
  })
  return res.json();
};

const Cart = async () => {
  let allProductsOfStore = await fatchAllStoreProducts();
  return (
    <ContextWrapper>
      <CartComp allProductsOfStore={allProductsOfStore.result} />
    </ContextWrapper>
  )
}

export default Cart