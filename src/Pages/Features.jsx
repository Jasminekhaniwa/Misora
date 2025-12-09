import React from 'react'
import { useState } from 'react'

const Features = () => {
const[text,setText]=useState('features')

const handleClick=(value)=>{
  setText(value)
}


  return (
    <div>
      <h1>this is {text}</h1>
      <button onClick={()=>handleClick("features")}>features</button>
      <button onClick={()=>handleClick("products")}>product</button>
    </div>
  )
}

export default Features
