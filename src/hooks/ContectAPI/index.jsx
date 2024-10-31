 import { createContext, useContext } from "react";
 import "./index.css";


// 1 step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {

  const myName = "Muhammad Ahsan";
  const myAge = 21;
  console.log(children);

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};


// custom hooks
export const useBioContext = () => {
    const context = useContext(BioContext);
    if (context === undefined) {
      throw new Error("Component must be wrapped with BioProvider");
    }
    return context;
  };