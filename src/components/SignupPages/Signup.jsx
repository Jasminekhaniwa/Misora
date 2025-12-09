import React from 'react'
import "./signup.scss"

const Signup = () => {
  return (
    <div className='signup-page-container'>
      <form>
        <p>signup</p>
        <label className='sub-title'>name</label>
        <input type="text" className='form-control'/>
        <label className='sub-title'>email</label>
        <input type="email" className='form-control'/>
        <label className='sub-title'>password</label>
        <input type="password" className='form-control'/>
      </form>
    </div>
  )
}

export default Signup
