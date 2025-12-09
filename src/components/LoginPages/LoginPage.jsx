import React from "react";
import "./login.scss";
import { useState } from "react";





export const LoginPage = () => {
  
const [sub,setSub]=useState(true)





// const [ischecked,setIschecked]=useState(false)
// const handleChange=()=>{
//   setIschecked(!ischecked);
// };

const [iconvisible,setIconvisible]=useState(true)
const handleClick = ()=>{
setIconvisible(!iconvisible);
};

  return (
    <div className="login-page-container">
      <div className="form-wrapper">
        <form>
          <div className="form-content">
            <p className="title">Login </p>
            <div className="mb-10">
              <label className="sub-title">
                email: 
              </label>

              <div>
                <input type="email" className="form-control sub-title" placeholder="enter email" />
              </div>
            </div>

            <div className="mb-10">
              <label className="sub-title" >password:</label>
              <br></br>
             <div className="password-wrapper">
          <input
            type={iconvisible ? "text" : "password"}  className="form-control sub-title password-field" placeholder="enter password" />
            


            <div className="toggle-eye" onClick={()=>handleClick()}>
              {iconvisible ? 
          <i  className="bi bi-eye-slash " ></i>
            :  
          <i className="bi bi-eye" ></i>

            }



          </div>
     </div>

              <br></br>
            </div>

            <div>
              {/* <div className="mb-10">
                <lable className="sub-title">
                  <input type="checkbox" checked={ischecked} onChange={()=>handleChange()} />
                  show password
                </lable>
              </div> */}
            </div>
            <div className="mb-10">
              <button className="primary-btn">SIGN IN</button>
            </div>

            <label className="d-flex justify-content-center footer-text">Fotgot  <a href="">Username / Password?</a></label>

            <label className="d-flex justify-content-center footer-text">Don't have an account?  <a href="">sign up</a></label>
<div>

  <button type="button"  onClick={
    ()=>
    handleClick()
  }>{sub ? <h2>eye</h2> : <p>eye close</p>}</button>




  <p>jasmine is learning {sub === "react" ? "a": sub === "css" ? "b":"c"}</p>
</div>
            
          </div>
        </form>
      </div>
    </div>
  );
};
