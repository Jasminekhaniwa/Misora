import React, { useContext } from 'react'
import { DetailContext } from '../../Pages/HomePage'
import "./SecondComponent.scss"
import bg from "../../images/bg.jpg"


const SecondComponent = () => {

const {details}=useContext(DetailContext)

  return (
    <div className='second-background'>
        <img className='second-image' src={bg} />
        <div className="overlay">
    <h2>Excellence in education</h2>
    <p>{`${details.title} is a ${details.taste} fruit .We can make ${details.dish} from it and it's available in ${details.place} `}</p>
    {/* <p>We are proud of our international and multi-cultural methods, and our community.</p> */}
  </div>
      
    </div>
  )
}

export default SecondComponent
