import "./App.css";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Navbar from "./components/Navbar pages/Navbar";
import HomePage from "./Pages/HomePage";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Questions from "./components/QuestionaPages/Questions";
import Contact from "./components/ContactPages/Contact";
import Product from "./Pages/Product";
import { LoginPage } from "./components/LoginPages/LoginPage";
import Button from "./components/PracticeButtons/Button";

import Singlepage from "./components/Singlepage/Singlepage";
import CartPage from "./components/CartPage/cartPage";
import ProductPage from "./components/productPage/ProductPage";
import CheckoutPage from "./components/CheckoutPages/CheckoutPage";
import Formikpractice from "./components/Formikpractice/Formikpractice";
// import Counter from "./components/Counter/Counter";



function App() {
  return (
    <>
     
        <Router>
          {/* <LoginPage/>
     <Signup/> */}
              {/* <Card/> */}
              <Navbar />
              
              
              
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/features" element={<Features/>}></Route>
            <Route path="/products" element={<Product/>} > </Route>
            <Route path="/Questions" element={<Questions/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/button" element={<Button/>}></Route>
            <Route path="/productpage" element={<ProductPage/>}></Route>
            <Route path="/productpage/:id" element={<Singlepage/>}></Route>
            <Route path="/cartpage" element={<CartPage/>} ></Route>
            <Route path="/checkoutpage" element={<CheckoutPage/>} ></Route>
            <Route path="/formikpractice" element={<Formikpractice/>} ></Route>
            {/* <Route path="/counter" element={<Counter/>} ></Route> */}
          </Routes>
          
        </Router>
      
    </>
  );
}

export default App;
