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

const getTotalCartAmount=()=>{
  let totalAmount=0;
  for (const item in cartItem) {
    if (cartItem[item]>0) {
      let iteminfo=food_list.find((product)=>product._id==item)
      totalAmount+=iteminfo.price* cartItem[item]
    }
    
  }
  return totalAmount
}

  return (
    <StoreContext.Provider value={{food_list , cartItem,adtocart,removecart,getTotalCartAmount}}>
      {children}
    </StoreContext.Provider>
  );
};

export default storeContaxtProvider;
