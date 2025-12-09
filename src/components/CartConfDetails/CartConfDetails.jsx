import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartConfDetails.scss";

const CartConfDetails = ({ selectedProducts, closeModal }) => {
  const Navigate = useNavigate();

  const handleGoToCart = () => {
    closeModal();
    setTimeout(() => Navigate("/CartPage"), 150);
  };

  const handleContinue = () => {
    closeModal();
    Navigate("/products");
  };

  return (
    selectedProducts && (
      <div className="popup-container">

        <button className="btn-close cross" onClick={closeModal}></button>

        <div className="popup-wrapper">
          <div className="image-container">
            <img src={selectedProducts.images[0]} alt="" />
          </div>

          <div className="right-content">
            <div className="green-content">1 new item has been added to your cart</div>
            <p className="price">Rs. {selectedProducts.price}</p>

            <div className="button-wrapper">
              <button className="cart-button cart-b" onClick={handleGoToCart}>
                go to cart
              </button>

              <button className="continue-button" onClick={handleContinue}>
                continue shopping
              </button>
            </div>

          </div>
        </div>
      </div>
    )
  );
};

export default CartConfDetails;
