
// here we are using React memo for Stop the Re reding of this Component 

// import { useRef, memo } from "react";

// export const Counts = memo(() => {
//   const renderCount = useRef(0);
//   console.log(renderCount);

//   return (
//     <div className="mt-3 font-display text-center">
//       <p className="">
//         Nothing changed here but Ive now rendered:
//         <span className="text-red-600">{renderCount.current++} time(s)</span>
//       </p>
//     </div>
//   );
// });

// export default memo(Counts);





// here we are using Usememo for Stop the Rerending of this Component  beacuse of object passing in this Component 
import { useRef, memo } from "react";

// eslint-disable-next-line react/display-name
export const Counts = memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
        <p>My name is {bioData.name}</p>
        <p>My Age is {bioData.age}</p>
      </p>
    </div>
  );
});

