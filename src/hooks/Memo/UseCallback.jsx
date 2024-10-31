import  { memo,useCallback, useState } from "react";

// Memoized Button component to avoid unnecessary re-renders
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);

  return <button onClick={onClick}>{children}</button>;
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // Increment and decrement functions wrapped with useCallback
  const increment = useCallback(() => {
    console.log("increment Inside ");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement Inside ");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
