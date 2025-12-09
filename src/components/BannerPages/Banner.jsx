

import React from 'react'
import "./Banner.scss"
import coffee2 from "../../images/coffee2.jpg"


const Banner = (props) => {

  return (
    
    <div>
        <div className='banner-container'>
        {/* <img src={coffee2}  className='coffee-banner'/>
        <div className='banner-content'>  */}
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='bannerContainer'>  
      <img src={coffee2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-caption ">
        <div className='banner-items'>
        <h5 className='banner-quote'>Welcome to {props.company}</h5>
        <button className='Learn-more'>Learn-more</button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className='bannerContainer'>  
      <img src={coffee2} className="d-block w-100" alt="..."/>
      </div>
      <div className='banner-items'>
        <h5 className='banner-quote'>Welcome to our cafe</h5>
        <button className='Learn-more'>Learn-more</button>
        </div>
    </div>
    <div className="carousel-item">
      <div className='bannerContainer'>  
      <img src={coffee2} className="d-block w-100" alt="..."/>
      </div>
      <div className='banner-items'>
        <h5 className='banner-quote'>Welcome to our cafe</h5>
        <button className='Learn-more'>Learn-more</button>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  
</div>
        
      
  
    </div>
    </div>
   
  )
}

export default Banner
