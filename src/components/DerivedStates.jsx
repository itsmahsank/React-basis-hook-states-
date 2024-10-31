
import { useState } from "react";

export const DerivedStates = () => {

/*
    const user=[
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
    ]
*/


  const [user, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

 // Derived state: count of users
 console.log(user);
 const userCount = user.length;
 // Derived state: average age of users
 const averageAge = user.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;
  

  return (
    <>
      <div className="main-div">
        <h1>User List</h1>
        <ul>
          {user.map((user, index) => (
            <li key={index}>
              My name is {user.name} and I am {user.age} years old
            </li>
          ))}
        </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
      </div>
    </>
  );
};
