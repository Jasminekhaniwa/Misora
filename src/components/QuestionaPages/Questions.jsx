import React from 'react'
import { useState } from 'react'
import "./Question.scss"
import AskedQuestion from '../AskedQuestion/AskedQuestion'
import YourQuery from '../YourQuery/YourQuery'
import Contact from '../contact/Contact'

const Questions = () => {
  const[showpage,setShowpage]=useState();

  const handleClick=(value)=>{
    setShowpage(value)
  }


// console.log("showpage",showpage)


  return (
    <div className='container '>
      <div className='Question-wrapper'> 
        <div className={`Questions-items asked-question  ${showpage=== "question" ? "active": "" } `}onClick={()=>handleClick("question")}>Asked Questions</div>
        <div className={`Questions-items your-query  ${showpage === "query" ? "active": "" } `} onClick={()=>handleClick("query")}>Your Query</div>
        <div className={`Questions-items contact ${showpage === "contact" ? "active": "" } `} onClick={()=>handleClick("contact")}>Contact</div>
      </div>
     {showpage === "question" ? <AskedQuestion />  : showpage === "query" ? <YourQuery/> : <Contact/>}
        {/* <div > <AskedQuestion /> </div>
        <div >  </div> */}
      
    
    </div>
    
  )
}

export default Questions

