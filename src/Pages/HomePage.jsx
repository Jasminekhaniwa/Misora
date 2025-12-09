import React from 'react'
import { useState, createContext} from 'react'



import Banner from '../components/BannerPages/Banner'
import Variety from '../components/VarietyPages/Variety'
import Footer from '../components/FooterPages/Footer'
import ThreeComponent from '../components/ThreeComponents/ThreeComponent'

export const DetailContext=createContext();


const HomePage = () => {
  const name = "jasmine"
  const surname = "khaniwa"
  // const car="ford"
   const color="red"
    const year=1996
    const modal="mustang"


    const[user,setUser]=useState("jasmine")

    const[details,setDetails]=useState({
      title:"apple",
      taste:"sweet",
      dish:"apple pie",
      place:"mustang"

    })

  
  

  const company="aurora"
  return (
    <div>
      <Banner company="aurora"/>
      <Variety name={name} surname={surname}/>
      <DetailContext.Provider value={{details}} >
        <ThreeComponent data={user} />
      </DetailContext.Provider>
      
      <Footer  car="ford" color="red"  year={1996} modal="mustang" />
      

      {/* <Footer>
<div style={{background: 'lightblue'}}>this is react</div>
        </Footer> */}
    </div>
  )
}

export default HomePage
