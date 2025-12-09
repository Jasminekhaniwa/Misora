import React from 'react'
import "./ThreeComponent.scss"
import FirstComponent from '../FirstComponent/FirstComponent'
import SecondComponent from '../SecondComponent/SecondComponent'
import ThirdComponent from '../ThirdComponent/ThirdComponent'

const ThreeComponent = ({data}) => {
  return (
    <div className='container threecomponent-wrapper'>
        <div className='row'>
            <div className='col-md-4'><FirstComponent dataa={data} /></div>
             <div className='col-md-4'><SecondComponent/></div>
             <div className='col-md-4'><ThirdComponent/></div>
      </div>
    </div>
  )
}

export default ThreeComponent
