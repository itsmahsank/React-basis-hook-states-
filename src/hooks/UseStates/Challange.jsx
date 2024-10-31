import "./Hooks.css";
import { useState } from "react";

export const CounterChallenge = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + step);
  };

  const handleDecrement = () => {
    setCounter(counter - step);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <h1>useState Challenge</h1>
      
      <p>
        Count: <span>{counter}</span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div                       >

      <div>
        <button onClick={handleIncrement} disabled={counter >= 100}> Increment</button>
        <button onClick={handleDecrement} disabled={counter <= 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
