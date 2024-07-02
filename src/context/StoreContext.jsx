import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const storeContaxtProvider = ({children}) => {
const [cartItem,setCartItem] =useState({})
const adtocart=(itemid)=>{
         if (!cartItem[itemid]) {
          setCartItem((prev)=>({...prev,[itemid]:1}))
         }else{
          setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
         }
}

const removecart=(itemid)=>{
  setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
} 
useEffect(()=>{
console.log(cartItem);
},[cartItem])

  return (
    <StoreContext.Provider value={{food_list , cartItem,adtocart,removecart}}>
      {children}
    </StoreContext.Provider>
  );
};

export default storeContaxtProvider;
