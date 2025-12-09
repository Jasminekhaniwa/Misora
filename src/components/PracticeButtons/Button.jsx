import React from 'react'
import { useState } from 'react';
import Asmine from './Asmine/Asmine';
import Bsmine from './Bsmine/Bsmine';
import Csmine from './Csmine/Csmine';
import Splice from './Splice/Splice';



const Button = () => {

    const[showpage,setShowpage]=useState();
    const handleClick=(value)=>{
        setShowpage(value);
    }
  return (
    <div>
     

    <button onClick={()=>handleClick("asmine")}>Asmine</button>
    <button onClick={()=>handleClick("bsmine")}>Bsmine</button>
    <button onClick={()=>handleClick("csmine")}>Csmine</button>
    <button onClick={()=>handleClick("splice")}>Splice</button>

    {showpage ==="asmine"?<Asmine/> :showpage ==="bsmine"?<Bsmine/>: showpage==="casmine"?<Csmine/> :<Splice/>}
    </div>
  )
}

export default Button
