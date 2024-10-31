import { useEffect, useState } from "react";
import "./index.css";

export const ReactUseEffect = () => {
  //const [count, setCount] = useState(0);
  const [Time, setTime] = useState(0);

  /*useEffect(() => {
    console.log("count value:", count);
  }, [count]);
*/


 useEffect(() => {

    setInterval(() => {

      const updatedDate = new Date();

      setTime(updatedDate.toLocaleTimeString());

    }, 1000);
  }, []);







  return (
    /*<div className="container effect-container">
      <h1>useEffect Hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    */


    <div className="container effect-container">
    <h1> Time : {Time} </h1>
  </div>




  );
};
