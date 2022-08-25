 import React,{useState} from "react";
 import Heater from './Heater'
import Home from "./Home";


function App() {

  const [count,updateCount]=useState(0);

  let obj={
    name:"react",
    age:24
  }
  const getName=(data)=>{
    console.log(data,"data");

  }

  return (
    <div>
      <h2>Click the button add count {count}</h2>
      <button onClick={()=>updateCount(count + 1)}>Click me</button>
      <Heater obj={obj} get={getName} />
      <Home/>
    </div>
  );
}

export default App;
