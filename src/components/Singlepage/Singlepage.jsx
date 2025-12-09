import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Singlepage.scss";
import i from "../../images/logo.jpg";
import { TailSpin } from 'react-loader-spinner'

import CartConfDetails from "../CartConfDetails/CartConfDetails";
import { handleAddToCart } from "../../Utils/Service";
import { useProductlist, useSingleproduct } from "../Store/store";
// import { handleAddToCart } from "../../Utils/Service";


const Singlepage = () => {
  const { id } = useParams();
  // console.log("id",id)

  // const [details, setDetails] = useState();
  // console.log("details",details)

  const {singleProduct,fetchSingleproduct,loading}=useSingleproduct();



  useEffect(() => {
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDetails(data);
    //     // console.log("data",data)
    //   });
    fetchSingleproduct(id);

    
  }, [id]);

  const [selectedProducts, setSelectedProducts] = useState();
const [modalVisible, setModalVisible] = useState(false);

const handleOpenModal = (items) => {
  setSelectedProducts(items);
  setModalVisible(true);
};


 

  //   const founditem = details?.find((value)=> {
  //     const num= Number(id)
  //     debugger

  //     return value.id === num})
  //   console.log("founditem",founditem)

//   const founditem = details;

  // console.log("founditem",founditem)
  if(loading)
  return (
    <div className="loader-container">
      <TailSpin
        height="80"
        width="80"
        color="#6a7cadff"
        ariaLabel="tail-spin-loading"
        visible={loading}
        
        
      />
    </div>
  )
  return (
    
    <div className="singlepage-Background">
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

      <div className="container page-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="image-container">
              <img src={singleProduct?.images?.[0]} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-container">
              <p className="title">{singleProduct?.title}</p>
              <p className="rate">Rs.{singleProduct?.price} </p>
              <p className="bold-text">Product Discription :</p>
              <p className="text">{singleProduct?.description}</p>
              <p className="bold-text">
                Product Category: {singleProduct?.category}{" "}
              </p>
              <button 
  className="cart-button"
  onClick={() => {handleOpenModal(singleProduct); handleAddToCart(singleProduct)}}
>
  add to cart
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
