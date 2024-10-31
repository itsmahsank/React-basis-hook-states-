//import { useContext } from "react";
//import { BioContext } from "./Index";

import { useBioContext } from "./Index";
import "./index.css";

export const Home = () => {
  //const { myName, myAge } = useContext(BioContext);

  const { myName, myAge } = useBioContext();
  



  return (
    <section className="container">
      <h2>
        Hello Context API(Home). 
      </h2>
      <h2>
        My name is {myName}.I am {myAge} yrs old 
      </h2>
     

    </section>
  );
};