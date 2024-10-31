import { useBioContext } from "./Index";
import "./index.css";

export const Services = () => {
  const { myName, myAge } = useBioContext();

  return (
    <section
      className="container">
      <h1>
        Hello Context API (Services) </h1>
        <h1>My name is {myName}. I am {myAge} yrs old</h1>
    </section>
  );
};
