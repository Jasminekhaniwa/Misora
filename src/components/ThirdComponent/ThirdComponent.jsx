import React from 'react'
import "./ThirdComponent.scss"

const ThirdComponent = () => {
  return (
    <div>
         <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       <i className="bi bi-book book-icon"></i>   Document Required For Admissions
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        This is the first item’s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
        </div>
    </div>
    </div>
  </div>
    </div>
  )
}

export default ThirdComponent
