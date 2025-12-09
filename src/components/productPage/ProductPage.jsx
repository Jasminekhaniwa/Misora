import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.scss";
import CartConfDetails from "../CartConfDetails/CartConfDetails";
import { handleAddToCart } from "../../Utils/Service";
import { useProductlist } from "../Store/store";

const ProductPage = () => {
  const Navigate = useNavigate();

  const [selectedProducts, setSelectedProducts] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

//  const products=useProductlist((state)=>state.products)
//  const fetchproducts=useProductlist((state)=>state.fetchproducts)

const {products,fetchproducts}=useProductlist();

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setDetails(data.products));
    fetchproducts();
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProducts(product);
    setModalVisible(true);
  };

 
    
  
  return (
    <div className="product-background">

      {/* React controlled modal */}
      <div className={modalVisible ? "modal fade show d-block" : "modal fade d-none"}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <CartConfDetails
                selectedProducts={selectedProducts}
                closeModal={() => setModalVisible(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {products.map((detail) => (
            <div className="col-md-3" key={detail.id}>
              <div className="card-wrapper">
                <div className="image-container">
                  <img
                    src={detail.images[0]}
                    onClick={() => Navigate(`/productpage/${detail.id}`)}
                  />
                </div>
                <div className="title">{detail.title}</div>
                <div className="product-buttons">
                  <div className="price">Rs.{detail.price}</div>

                  <button
                    onClick={() => {handleOpenModal(detail); handleAddToCart(detail) } }
                    className="add-to-cart cart-button"
                  >
                    <i className="bi bi-cart" ></i>
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

export default ProductPage;
