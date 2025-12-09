import React from 'react'
import Slider from "react-slick";
import "./Slick.scss";
import espresso from "../../images/espresso.webp"
import americano from "../../images/americano.jpg"
import latte from "../../images/latte.jpg"
import cap from "../../images/cap.png"
import iced from "../../images/iced.webp"
import frappe from "../../images/frappe.webp"

const Slick = () => {
var settings = {
    dots: false,
    arrows:true,
//      nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
}
    
  return (
    <div className='container '>
        <div className='special-products'>
        <p className='special-quote'>Our Most Special Products</p>

        <Slider {...settings}>
            
      <div className='special-product-container'>
        <div className='image-container'><img src={espresso} className='special-productimage'/></div>
<div className='coffee-details'>
<p className='coffee-name'>Espresso</p>
<p className='coffe-details'>A concentrated shot of coffee </p>
</div>
      </div>
      <div className='special-product-container'>
        <div className='image-container'><img src={americano} className='special-productimage'/></div>
<div className='coffee-details'>
<p className='coffee-name'>Americano</p>
<p className='coffe-details'>A concentrated shot of coffee </p>
</div>

      </div>
      <div className='special-product-container'>
        <div className='image-container'><img src={latte} className='special-productimage'/></div>
<div className='coffee-details'>
<p className='coffee-name'>Latte</p>
<p className='coffe-details'>A concentrated shot of coffee </p>
</div>

      </div>
      <div className='special-product-container'>
        <div className='image-container'><img src={cap} className='special-productimage'/></div>
<div className='coffee-details'>
<p className='coffee-name'>Cappuccino</p>
<p className='coffe-details'>A concentrated shot of coffee </p>
</div>

      </div>
      <div className='special-product-container'>
        <div className='image-container'><img src={iced} className='special-productimage'/></div>
<div className='coffee-details'>
<p className='coffee-name'>Iced Coffee</p>
<p className='coffe-details'>A concentrated shot of coffee </p>
</div>

      </div>
      <div className='special-product-container'>
        <div className='image-container'><img src={frappe} className='special-productimage'/></div>
<div className='coffee-details'>
<p className='coffee-name'>Frappé</p>
<p className='coffe-details'>A concentrated shot of coffee </p>
</div>

      </div>
    </Slider>
      
    </div>
    </div>
  )
}

export default Slick
