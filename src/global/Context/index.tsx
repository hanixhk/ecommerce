"use client"
import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { cartReducer } from '../Reducer';

 export const cartContext = createContext<any>(null);

 const ContextWrapper =({children}: {children:ReactNode}) => {
    const iniatizilerOfCart={
        cart:[
        {
            productId: " " ,
            quantity:3,
        },
    ],
    }
    const [state,dispatch] =useReducer(cartReducer,iniatizilerOfCart)
    // console.log("wants to update:",state)

    useEffect(() => {
       let cart= localStorage.getItem("cart") as string
      if(cart === null) {
        localStorage.setItem('Cart',JSON.stringify(state.cart))
      }
      else{
        iniatizilerOfCart.cart=JSON.parse(cart)
      }});
   useEffect(() => {
     localStorage.setItem("cart:", JSON.stringify(state.cart))
     , [state.cart]})
   
    
    return (
        <cartContext.Provider value={{state,dispatch}}>
            {children}
        </cartContext.Provider>
    )
};
// export const cartState=()=>{
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const first = useContext(cartContext)
//     console.log("First:" ,first)
// }

export default ContextWrapper