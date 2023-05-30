
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name , setName] = useState("")


  //On every render
  useEffect(() =>{
    console.log('I re-rendered')
  })

  useEffect(()=>{
    console.log("The component mounted")
  },[])

  useEffect(()=>{
    console.log(`The name changed!: ${name}`)
    return()=>{
      console.log('The component unmounted')
    }
  })

  

  return (
    <div >
      <h1>Hello</h1>
      <input value={name}
      onChange={(e)=> setName(e.target.value)} 
      placeholder="Enter a Name"/>
    </div>
  );
}

export default App;
