import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        setUniversities(response.data);
      }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Fetching of data</h1>
      <h2>Universities in the United States</h2>
      <ul>

        {/* So when you use key as univesity.name it gives you warning two children with the same key ,
          if the same name is coming again so to resolve that problem
          we are using index as key and those warning will not appear again
         */}

         {universities.map((university,index) => (
          <li key={index}>{university.name}</li> 

          //  {universities.map((university) => (g
          //   <li key={university.name}>{university.name}</li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
