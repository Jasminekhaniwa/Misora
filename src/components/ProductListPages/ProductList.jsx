import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./ProductList.scss";

import nescafe from "../../images/nescafe.png";
import cb from "../../images/coldbrew.webp";
import sb from "../../images/starbucks.avif";
import Rating from "../RatingPages/Rating";
import sale from "../../images/sale.jfif";
import bs from "../../images/cafebustelo.png";

const ProductList = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((Response) => Response.json())
      .then((data) => {
        debugger;
        console.log("data", data.products);
        setDetails(data.products);
      });
  }, []);

  return (
    <div className="product-background">
      <div className="container ">
        <div className="row">
          {details?.map((detail) => (
            <div className="col-md-3">
              <div className="product-item-wrapper">
                <span className="heart">
                  <i className="bi bi-suit-heart "></i>
                </span>
                <div className="sale-container">
                  
                  <img src={sale} className="sale-image" />
                  <p className="sale-text" >{detail.discountPercentage} </p> 
                </div>
                          
                <div className="image-container">
                  <img src={detail.images} className="product-image"></img>
                </div>
                <div className="product-details">
                  <p className="product-name">{detail.title} </p>

                  <div className="rating"></div>
                  <Rating  totalStars={detail.rating}  />
                  <p className="price">Rs. {detail.price} </p>
                  <p className="brand-name">{detail.brand}</p>
                  <button className="cart-button">
                    <i className="bi bi-cart-check"></i>Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}

          

         
        </div>
      </div>
    </div>
  );
};

export default ProductList;
