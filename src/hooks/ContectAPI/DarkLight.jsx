// import { Children, createContext, useContext, useState } from "react";


// export const ThemeContext = createContext("dark")

// export const ThemeProvider=(  {children})=>{


//     const[Theme,SetTheme]=useState("dark")

//     const handleThemeBtn=()=>{

//         return SetTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//     }


//     return<ThemeContext.Provider value={{Theme , handleThemeBtn}} >
//         {children}
//     </ThemeContext.Provider>
    
// }



// export const DarkLight=()=>{

//     const { Theme, handleThemeBtn } = useContext(ThemeContext);

//     return (
//         <div>
//             <h1 className={ `p-4 h-lvh flex flex-col justify-center items-center ${Theme === "dark" ? "bg-gray-800" : "bg-white"}`}>Welcome to the Dark-Light Website</h1>
//             <h1 className={`my-4 text-xl  ${Theme === "light" ? "text-gray-800" : "text-white"}`}>Welcome to the Dark-Light Website</h1>
//             <button onClick={handleThemeBtn} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"> {Theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>



//         </div>
//     )
// }

import "./Style.css";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext("dark");

export const ThemeProvider = ({ children }) => {
  const [Theme, SetTheme] = useState("dark");

  const handleThemeBtn = () => {
    return SetTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ Theme, handleThemeBtn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { Theme, handleThemeBtn } = useContext(ThemeContext);

  return (
    <div className={`container ${Theme}`}>
      <h1 className="header">Welcome to the Dark-Light Website</h1>
      <button onClick={handleThemeBtn} className="theme-button">
        {Theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
