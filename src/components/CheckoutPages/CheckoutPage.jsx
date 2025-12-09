import React, { useState, useEffect } from "react";
import { ErrorMessage, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';

import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const [cartitems, setCartitems] = useState([]);
  console.log("cartitems", cartitems);

  useEffect(() => {
    const checkedItems = JSON.parse(
      localStorage.getItem("checkedItems") || "[]"
    );
    setCartitems(checkedItems);
  }, []);

  const subTotal = cartitems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );


  const notify=()=>toast("your order has been placed")

  //  const validate=values => {
  //                   const errors = {};
  //                   if (!values.email) {
  //                     errors.email = "Required";
  //                   }
  //                   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
  //                   {
  //                     errors.email = "Invalid email address";
  //                   }

  //                   if (!values.contact) {
  //                     errors.contact = "contact required";
  //                   }
  //                   else if(!/^(98|97)\d{8}$/.test(values.contact))
  //                   {
  //                     errors.contact = "invalid contact";
  //                   }

  //                   if(!values.name){
  //                     errors.name="name required"
  //                   }
  //                   else if(values.name.length>15){
  //                     errors.name="length of name shouldn't extend 10 character"

  //                   }

  //                   if(!values.city){
  //                     errors.city="required"
  //                   }

  //                   if(!values.address){
  //                     errors.address="required"
  //                   }

  //                   return errors;
  //                 };

  // onSubmit={(values,{setSubmitting})=>{
  //   setTimeout=(()=>{
  //     alert(JSON.stringify(values,null,2))
  //     setSubmitting(false);

  //   },400);
  // }}

  //   const formik=useFormik({
  //     initialValues:{{
  //                   email: "",
  //                   name: "",
  //                   contact: "",
  //                   address: "",
  //                   city: "",
  //                   postalcode: "",
  //                   province: "",
  //                   remark: "",
  //                 }},
  //                 // validate,
  //                 onSubmit:values=>{
  //                   alert(JSON.stringify(values,null,2))
  //                 },
  // validationSchema:Yup.object({
  // name:Yup.string()
  // .max(15,"length of name shouldn't extend 10 character")
  // .required("name required"),

  // contact:Yup.string()
  // .matches(/^\+?[1-9]\d{6,14}$/, "invalid phone number format")
  // .required("Required"),

  // email:Yup.string()
  // .email("invalid email")
  // .required("required"),

  // address:Yup.string()
  // .required("required"),

  // city:Yup.string()
  // .required("required"),

  // postalcode:Yup.number()
  // .required("required"),

  // province:Yup.string()
  // .required("required")

  // })

  //   });

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        contact: "",
        address: "",
        city: "",
        postalcode: "",
        province: "",
        remark: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "length of name shouldn't extend 10 character")
          .required("name required"),

        contact: Yup.string()
          .matches(/^\+?[1-9]\d{6,14}$/, "invalid phone number format")
          .required("Required"),

        email: Yup.string().email("invalid email").required("required"),

        address: Yup.string().required("required"),

        city: Yup.string().required("required"),

        postalcode: Yup.number().required("required"),

        province: Yup.string().required("required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        debugger
        // setTimeout =
        //   (() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   },
        //   400);
        // alert("your form has been submitted")
        notify();
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <div className="checkout-background">
          <div className="container">
            <div className="row">
              <div className="two-pages">
                <div className="form-page">
                  <p className="heading">dealer information sheet</p>
                  <p className="subtitle">
                    Please fill the form below and we will be in touch with you
                    very soon!
                  </p>

                  <form onSubmit={formik.handleSubmit}>

                    <div className="lable">
                      <label>contact information</label>
                    </div>
                    <div className="input-field">
                      <div className="input-title">
                        email <span>*</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="eg:abcd@example.com"
                        {...formik.getFieldProps("email")}
                      />
                      <ErrorMessage className="error-message" name="email" component="div"/>
                      {/* {formik.touched.email && formik.errors.email ? (
                        <div className="error-message">
                          {formik.errors.email}
                        </div>
                      ) : null} */}
                    </div>

                    <div className="lable">
                      <label>Shipping details</label>
                    </div>
                    <div className="input-field">
                      <div className="input-title">
                        name <span>*</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        {...formik.getFieldProps("name")}
                        placeholder="eg:john doe"
                      />
                      <ErrorMessage className="error-message" name="name" component="div"/>
                      {/* {formik.errors.name && formik.touched.name ? (
                        <div className="error-message">
                          {formik.errors.name}
                        </div>
                      ) : null} */}
                    </div>

                    <div className="input-field">
                      <div className="input-title">
                        contact <span>*</span>
                      </div>
                      <input
                        type="number"
                        name="contact"
                        placeholder="eg:9812345678"
                        {...formik.getFieldProps("contact")}
                      />
                      <ErrorMessage className="error-message" name="contact" component="div"/>
                      {/* {formik.touched.contact && formik.errors.contact ? (
                        <div className="error-message">
                          {formik.errors.contact}{" "}
                        </div>
                      ) : null} */}
                      <p>Number must be in 10 digits</p>
                    </div>

                    <div className="input-field">
                      <div className="input-title">
                        Address <span>*</span>
                      </div>
                      <input
                        type="text"
                        name="address"
                        placeholder="eg:sallaghari"
                        {...formik.getFieldProps("address")}
                      />
                      <ErrorMessage className="error-message" name="address" component="div"/>
                      {/* {formik.errors.address && formik.touched.address ? (
                        <div className="error-message">
                          {formik.errors.address}
                        </div>
                      ) : null} */}
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="input-field">
                          <div className="input-title">
                            city <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="city"
                            placeholder="eg:Kathmandu"
                            {...formik.getFieldProps("city")}
                          />
                          <ErrorMessage className="error-message" name="city" component="div"/>
                          {/* {formik.errors.city && formik.touched.city ? (
                            <div className="error-message">
                              {formik.errors.city}
                            </div>
                          ) : null} */}
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="input-field">
                          <div className="input-title">postal code</div>
                          <input
                            type="number"
                            name="postalcode"
                            placeholder="eg:12345"
                            {...formik.getFieldProps("postalcode")}
                          />
                          <ErrorMessage className="error-message" name="postalcode" component="div"/>
                        </div>
                      </div>
                      
                      <div className="col-md-4">
                        <div className="input-field">
                          <div className="input-title">province</div>
                          <input
                            type="text"
                            name="province"
                            placeholder="eg:bagmati"
                            {...formik.getFieldProps("province")}
                          />
                          <ErrorMessage className="error-message" name="province" component="div"/>
                        </div>
                      </div>
                    </div>

                    <div className="input-field">
                      <div className="input-title">remarks</div>
                      <input
                        type="text"
                        name="remark"
                        placeholder="Remarks"
                        {...formik.getFieldProps("remark")}
                      />
                    </div>

                  <div>
                    <button
                      type="submit"
                      className="continue-shopping cart-button"
                      
                    >
                      continue shopping
                    </button>
                    <ToastContainer />
                    </div>
                  </form>
                </div>

                <div className="right-page">
                  <div className="heading">
                    <span>{cartitems.length} items </span>
                    <span>price</span>
                  </div>

                  <div className="right-container">
                    {cartitems.map((item, id) => (
                      <div className="right-items" key={item.id || id}>
                        <div className="image-container">
                          <img src={item.images[0]}></img>
                          <div className="quantity">{item.quantity}</div>
                        </div>

                        <div className="right-two-items">
                          <p className="title">{item.title}</p>
                          <p className="price">
                            Rs.{(item.price*item.quantity) .toFixed(2)} {" "}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="calculation">
                      <div className="subtotal">subtotal</div>
                      <div className="subtotal-amount">{subTotal .toFixed(2)}</div>
                    </div>
                    <div className="calculation">
                      <div className="gift-coupons">gift coupons</div>
                      <div className="gift-coupons-amount">0</div>
                    </div>
                    <div className="calculation">
                      <div className="discount ">discount amount</div>
                      <div className="discount-amount">0</div>
                    </div>
                    <div className="calculation">
                      <div className="total">TOTAL</div>
                      <div className="total-amount">{subTotal .toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default CheckoutPage;
