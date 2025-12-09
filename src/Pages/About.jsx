import React from 'react'
// import Slick from '../components/SlickPages/Slick'
import { useState } from 'react'

const About = () => {
const[color,setColor]=useState('blue');
const[details,setDetails]=useState({
  name:"jasmine",
  address:"bhaktapur",
  age:23
})
const updateAge=()=>{
  setDetails(previousState=>{
return{...previousState, age:1}
  });
}


const [count,setCount]=useState(0);
const handleClick =()=> {
  setCount(count+1);
}
  return (

    <div>
      <h1>helloo this is color {color}</h1>
 <button onClick={(()=>setColor('red'))}>{color}</button>

 <p>my name is {details.name}. I live in {details.address}. I am {details.age} </p>
 <button onClick={updateAge}>click me</button>

 <p>count is {count}</p>
 <button onClick={handleClick}>click me</button>
    </div>
    
  )
}

export default About
