import "./App.css";


function App() {
  const name = "Max";
  return (
    <div className="App">
      <User name="Max" age={24} email="max@gmail.com"/>
      <User name="Jake" age={27} email="Jake@gmail.com"/>
      <User name="Ray" age={44} email="Ray@gmail.com"/>
    </div>
  );
}
const User = (props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}
export default App;