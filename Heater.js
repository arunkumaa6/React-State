import React from 'react'

function Heater(props) {

    console.log(props, "props");

  return (
    <div>Heater
        {props.obj.age}
        <button onClick={()=>props.get({value:46,age:67})}>click</button>
    </div>
  )
}

export default Heater