import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import logo from "../../images/logo.jpg"


const Navbar=()=>{
    return(
    <div className="navbar-section">
        <div className="nav-background">
            <div className="container">
            <div className="nav-items">

    <img src={logo} alt="logo" className="nav-logo" ></img>

<div className="menu-items">
<Link className="items" to="/">Home</Link>
<Link className="items" to="/about">About us</Link>
<Link className="items" to="/features">Features</Link>
<Link className="items" to="/products">Products</Link>


<div className="items dropdown">
   FAQs
    <ul className="dropdown-menu">
       <li><Link className="drop-items" to="/questions"> Q/A</Link></li>
        <li>option b</li>
        <li>option c</li>
    </ul>
    </div>
<Link className="items" to="/cartpage"><i class="bi bi-cart-check"></i></Link>    
    <button className="contact-button"><Link  to="/contact">Contact Us</Link></button>
</div>
                </div>

            </div>

        </div>
    </div>
    )
}
export default Navbar




























// import React from "react";
// import "./Navbar.scss"
// import logo from "../../images/logo.jpg"

// const Navbar=()=>{
//     return(
// <div>
//     <div className="nav-background">
//         <div className="container">
        
//             <div className="nav-logo">
// <img src={logo} alt="logo" className="nav-logo"/>
//             </div>
//         <ul className="nav-menu ">

//             <li>item1</li>
//             <li>item2</li>
//             <li class="dropdown">
//     Item 3 ▼
//     <ul class="dropdown-menu">
//       <li>Option A</li>
//       <li>Option B</li>
//       <li>Option C</li>
//     </ul>
//   </li>
            
//         </ul>
//         </div>
//     </div>
//     </div>

//     )
// }
// export default Navbar



