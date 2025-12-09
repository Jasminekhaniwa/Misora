import React from "react";
import "./Contact.scss";
import mail from "../../images/mail.jpg"


const Contact = () => {
    
 
  return (
    <div className="contact-background">
      <div className="container contact-wrapper">
        <div className="row">
          <div className="col-md-8">
            <div>
              <h1 className="lets-talk">let's talk</h1>
              <p className="contact-paragraph">
                We would love to hear from you. Send us your commentwith the
                form below and we'll be in touch with you as soon as possible
              </p>
            </div>
            <form className="contact-form">
              <div className="contact-item">
              <label className="contact-lable">
                full name<span className="star">*</span>
              </label>
              <input
                type="text"
                className="Form-inputbox"
                placeholder=" Enter Your Fullname"
              />
              </div>

              <div className="contact-item">
                <label className="contact-lable">
                  email address<span className="star">*</span>
                </label>
                <input
                  type="email"
                  className="Form-inputbox"
                  placeholder=" Enter Your Address"
                />
              </div>
              <div className="contact-item">
                <label className="contact-lable">
                  phone number<span className="star">*</span>
                </label>
                <input
                  type="number"
                  className="Form-inputbox"
                  placeholder=" Enter Your Number"
                />
              </div>
              <div className="contact-item">
                <label className="contact-lable">
                  most loved coffee<span className="star">*</span>
                </label>
                <input
                  type="text"
                  className="Form-inputbox"
                  placeholder=" Enter Your Most Loved Coffee"
                />
              </div>
            </form>
          </div>

          <div className="col-md-4">
            <img src={mail} />
            <div className="contact-details">
                <p className="details"><i class="bi bi-geo-alt"></i>Banepa kavre,Nepal</p>
                <p className="details"><i class="bi bi-telephone"></i><span className="imp-contact"> project Manager:</span> 9821223334</p>
                <p className="details"><span className="imp-contact">operation manager:</span> 9812128769</p>
                <p className="details"><span className="imp-contact">technical support:</span> +011-77443, +011-77443, +011-77443, +011-77443</p>
                <p className="details"><i class="bi bi-envelope"></i> thecoffeecop.gmail.com</p>
                <div className="icons"><i class="bi bi-facebook"onClick={() => (window.location.href = "https://facebook.com")}></i>  <i class="bi bi-linkedin" onClick={() => (window.location.href = "https://linkedin.com")}></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
