import React from "react";
import "./App.css";
import Details from "./Details";
import MyDetails from "./jsComponents/MyDetails";
function App() {
  return (
    <div>
      <div className="App">
        <h1 className="head">My Details (TypeScript)</h1>
        <Details
          name="Jake"
          email="Jake@gmail.com"
          age={25}
          friends={["Alex", "Ben", "Sara"]}
        />
      </div>

      <div className="App">
        <h1 className="head">My Details (JavaScript)</h1>
        <MyDetails 
          name="Jake"
          email="Jake@gmail.com"
          age={25}
          friends={["Alex", "Ben", "Sara"]}
        />
      </div>
    </div>
  );
}

export default App;

// TypeScript allows specifying the types of data being 
// passed around within the code, and has the ability to 
//  report errors when the types don’t match. For example, 
//  Now , TypeScript is reporting an error when passing a string 
//  into a function that expects a number.


// In computer science, type safety 
// are the extent to which a programming language 
// discourages or prevents type errors.

// benefits
// TypeScript supports static typing. This means that 
// static typing allows type accuracy to be checked
//  at build time.
// At the time of development, TypeScript identifies the 
// compilation bugs. As a result, the scope of 
// evaluating errors at runtime is very less. 
// JavaScript, on the other hand, is an interpreted language. 