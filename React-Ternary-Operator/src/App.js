import React from "react";

function App(){
  const mobile = 'IPhone';
  const isNameShowing = true;
  return(
    <div>
      <h1>Brand :{isNameShowing ? mobile : 'Anonymous'}</h1>
    </div>
  )
}


export default App;
