import React from "react";
import "./Variety.scss";
import coffee3 from "../../images/coffee3.avif"

const Variety = (value) => {

  const varietylist =[
    {
      title:"Espresso",
      description:"A concentrated shot of coffee brewed by forcing hot water through finely-ground beans."
    },
     {
      title:"Americano",
      description:"Espresso diluted with hot water."
    }, {
      title:"Cappuccino",
      description:"Espresso with steamed milk and a thick layer of milk foam."
    }, {
      title:"Latte",
      description:"Espresso with steamed milk and a small amount of foam"
    }
  ]
  return (
    <div className="variety-background">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 left">
            
            <p className="variety-title">OUR Variety</p>
            <p className="coffee-quote">Discover out top-notch drinks made with love</p>
            <div className="image-container"><img src={coffee3} alt="coffee-image" className="coffee-image"/></div>
            
          </div>

          <div className="col-md-6 right">
            <p className="about-coffee">Coffee is a popular beverage made from the roasted and ground seeds of the coffee plant, known as coffee beans. It's a global commodity, second only to crude oil, with origins in Ethiopia and spread through Yemen to the rest of the world. The two main species are Arabica and Robusta, which are grown in different climates and have distinct flavor profiles and caffeine levels. </p>


            <div className="container">
              
              <div className="row">
                    {varietylist?.map((details)=>
                <div className="col-md-6">
                        <p className="coffee-name"> {details.title} </p> 
                      <p className="coffee-details">{details.description} </p>
                  </div>   
                )};
              
              </div>
              <div  className="learn-button">
              <button className="learn-more">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variety;
