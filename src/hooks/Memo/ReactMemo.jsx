// import { useMemo, useState } from "react";
// import { Counts } from "./MemoCount";

// export const ReactMemo = () => {


//   const [count, setCount] = useState(0);  

//   return (
//     <>
//       <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-center  items-center ">
//         <h1>{count}</h1>
//         <button className="btn bg-cyan-500 py-1 px-3" onClick={() => setCount((prev) => prev + 1)}> Increment </button>
//       </div>
//       <Counts  />
//     </>
//   );
// };

// //child Component  of the parent is re rendring  
// // so here we are using React memo to Stop the Re rendring of the child
 



import { useMemo, useState } from "react";
import { Counts } from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const myBioData = useMemo(() => {
    return {
      name: "thapa",
      age: 30,
    };
  }, []);

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-center  items-center ">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={myBioData} />
    </>
  );
};




// //child Component  of the parent is re rendring  becaus in this we are passing object so it will re render 
// // so here we are using Usememo hook to Stop the Re rendring of the child to optimize it
 