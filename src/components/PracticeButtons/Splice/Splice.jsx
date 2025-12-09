import React from 'react'
import { useState } from 'react'

const Splice = () => {
    const [vegetables,setavaegetables]=useState(["cabbage","potato","cauliflower","radish"])
    const removeSecond=()=>{
        const copy = [...vegetables];
        copy.splice(1,1);
        setavaegetables(copy);
    }

  return (
    <div>
        {vegetables.map((items,index)=>(
            <li key={index}>{items} </li>
        ))}
      <button onClick={removeSecond}>remove second vegetable</button>
    </div>
  )
}

export default Splice
