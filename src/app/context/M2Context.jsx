'use client'
import {createContext, useContext, useState} from "react";

const M2Context = createContext();

export function M2Provider({children}) {
  const [totalsM2, setTotalsM2] = useState(0);

  const addM2 = (m2) => setTotalsM2((prev) => prev + m2);
  const removeM2 = (m2) => setTotalsM2((prev) => prev - m2);
  const resetM2 = () => setTotalsM2(0);

  return (
    <M2Context.Provider value={{totalsM2, addM2, removeM2, resetM2}}>{children}</M2Context.Provider>
  );
}

export const useM2 = () => useContext(M2Context);
