import React from 'react'

const Csmine = () => {
  const vegetables=["cabbage","potato","pea","cucumber","radish"]
  const slicedVegetables=vegetables.slice(0,3)
  return (
    <div>
      <p>this is csmine page</p>
{slicedVegetables.map((items,index)=>
(
  <li key={index}>{items} </li>
))}
    </div>
  )
}

export default Csmine
