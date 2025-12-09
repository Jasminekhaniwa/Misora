import React from 'react'


const Asmine = () => {

  const numbers=[1,54,2,89,16,65,8,91,18]
  const FilteredNumber=numbers.filter((num)=> num>20);

  return (
    <div>
      <p>this is asmine page</p>
      <p>these are FilteredNumbers:</p>
      {FilteredNumber.map((n,index)=>(
        <p key={index}>{n} </p>
      
      ))}
      
    </div>
  )
}

export default Asmine
