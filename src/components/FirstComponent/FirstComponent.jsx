import React from 'react'
import "./FirstComponent.scss"

const FirstComponent = ({dataa}) => {
  return (
    <div className='first-background'>
        <p  className='about'>ABOUT US</p>
        
        <p className='big-text'>School values and excellence</p>
        <p className='first-texts'>{`hello my name is ${dataa}`}</p>
        <p className='first-texts'>Get ahead of the competition and discover trends before become yesterday’s news.
International reputation</p>
<p  className='first-texts'>Prepares future leaders</p>
<p className='first-texts'>Moral and spiritual compass</p>
<p className='first-texts'>Curriculum and instruction</p>

      
    </div>
  )
}

export default FirstComponent
