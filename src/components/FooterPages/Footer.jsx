import React from 'react'
import "./footer.scss"
// import c from "../../images/footer.jfif"

const Footer = ({car,color,...rest}) => {
    
  return (
    <div className='footer-wrapper'>
        <div className='clip-path'>
                    </div>
                   
            <div className='container '>
                <div className='row'>
                    <div className='col-md-3 '>
                        <div className="footer-content" >
                       
                        <p className='main-title' >{car}</p>
                        <p className='footer-text'>{color}</p>
                        <p className='footer-text'>{rest.year}</p>
                        <p className='footer-text'>bhaktapur, nepal</p>
                        <p className='footer-text'>contact: 9812345678</p>
</div>
                    </div>

                    <div className='col-md-3 '>
                        <div className="footer-content" >
                        <p className='title'>top categories</p>
                        <p className='footer-text'>Espresso Coffee</p>
                        <p className='footer-text'>Caffè Americano</p>
                        <p className='footer-text'>Turkish Coffee</p>
                        <p className='footer-text'>Mochaccino</p>
                    </div>
                    </div>

                    <div className='col-md-3 '>
                        <div className="footer-content" >
                        <p className='title'>quick links</p>
                        <p className='footer-text'>about us</p>
                        <p className='footer-text'>brands</p>
                        <p className='footer-text'>aurrora eBooking</p>
                        </div>
                    </div>

                    <div className='col-md-3 '>
                        <div className="footer-content" >
                        <p className='title'>social media</p>
                        <div className='footer-icon'>
                            <i className="bi bi-facebook" onClick={() => (window.location.href = "https://facebook.com")}/>
                            <i className="bi bi-linkedin" onClick={() => (window.location.href = "https://linkedin.com")}/>
            </div>
            </div>
                        </div>
                       
                        
                    </div>

                    
                </div>
            </div>


      
  )
}

export default Footer
