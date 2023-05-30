import React from "react";

function App(){
  const menu = ['Watches', 'Bags & Luggages', 'Sunglasses', 'Jewellery', 'Wallets'];
  return(
    <div>
      <h1>Accessories</h1>
      {menu.map((Accessory) => (
        <p>{Accessory}</p>
      ))}

    </div>
  )
}


export default App;
