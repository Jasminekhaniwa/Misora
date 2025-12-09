// import React from 'react'

// const Bsmine = () => {

//   const fruiteGroup=[
//     {title:"apple", color:"red"},
//     {title:"grape", color:"green"},
//     {title:"mango", color:"yellow"},
//     {title:"lemon", color:"yellow"}
    
//   ];

// const filteredFruits=fruiteGroup.filter((fruit)=> fruit.color==="yellow")


//   return (
//     <div>
//       this is Bsmine page
//       <p>these are filtered fruits</p>
//    {filteredFruits.map((items,index)=>(
//     <p key={index} >{items.title} </p>
//    ))}

//     </div>
//   )
// }

// export default Bsmine


import React from 'react'

const Bsmine = () => {
  const Fruits=[{title:"watermelon", color:"green"},
    {title:"mango", color:"yello"},
    {title:"guava", color:"green"},
    {title:"apple", color:"red"}
  ]
  const foundFruits=Fruits.find((fruit)=>fruit.color==="red")
  return (
    <div>
      {foundFruits?
      (<p>{foundFruits.title}</p>):
      (<p>no fruite found</p> )
      }
    </div>
  )
}

export default Bsmine
