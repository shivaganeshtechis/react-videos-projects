
import './App.css';
import { useState } from 'react';

function App() {
 // Count is the state here
 // setCount is a function that updates the value of ccunt or state
 // initial value of state is set to 0
  const [count,setCount] =useState(0)
  return(
    <>
      <h1>Count : {count}</h1>

      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  );
}

export default App;
