import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const storeContaxtProvider = ({children}) => {


  return (
    <StoreContext.Provider value={{food_list}}>
      {children}
    </StoreContext.Provider>
  );
};

export default storeContaxtProvider;
