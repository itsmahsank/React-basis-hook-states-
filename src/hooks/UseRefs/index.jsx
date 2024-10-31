import "./index.css";
import { useRef } from "react";

export const UseRef = () => {
  //   const username = document.getElementById("username");
  //   const password = document.getElementById("password");


    const username=useRef(null);
    const password=useRef(null);


const handleFormSubmit=(e)=>{

    e.preventDefault();
    console.log(username.current.va,password.current.value);


}

return (
    <form onSubmit={handleFormSubmit}>
        <h1>Uncontrolled Enviroment </h1>
      <input type="text" id="username"  placeholder="Enter name" ref={username} />
      <br />
      <input type="text" id="password" placeholder="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};