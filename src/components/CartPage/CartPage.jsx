import React, { useEffect ,useState} from 'react'
import "./CartPage.scss"
import { useNavigate } from 'react-router-dom';

// import i from "../../images/logo.jpg"

const CartPage = () => {

  const Navigate=useNavigate();

const[cartitems,setCartitems]=useState([]);
useEffect(()=>{
  const storedCart=JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart=storedCart.map((item)=>({...item, checked:item.checked || false}));
  setCartitems(updatedCart);


  // console.log("cartitems",cartitems)
},[])

const updateQuantity=(id,value)=>{
  const updatedCart=cartitems.map((items)=>{
    if(items.id===id){
      let newQuantity=items.quantity || 1;
      if(value==="+"){
        newQuantity +=1
        }
        else if(value==="-"){
           newQuantity=newQuantity>1? newQuantity-1 :1
        }

      
      return {...items,quantity:newQuantity}
    }
return items;
  })
  setCartitems(updatedCart);
  localStorage.setItem("cart",JSON.stringify(updatedCart))

}




// const updateQuantity=(id,value)=>{

//   const updatedCart=cartitems.map((item)=>{
//     if(item.id===id && value=="-"){
//       const newQuantity=(item.quantity || 1)-1;
//       return{...item,quantity:newQuantity>0? newQuantity:1};
//     }
//     else if(item.id===id && value=="+"){
//       return{...item,quantity :(item.quantity || 1)+1}
//     }
//     return item;
//   }
// )
//   setCartitems(updatedCart);
//   localStorage.setItem("cart",JSON.stringify(updatedCart));
// }



 const deleteFromcart=(id)=>{
  const updatedCart=cartitems.filter((item)=> item.id!== id);
  setCartitems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
 }

//  const handleClick=(id,value)=>{
//   let updatedCart;
//   if(value==="bucket"){
//   const allChecked=cartitems.every(item=>item.checked);
//   updatedCart
// }

//   const updatedCart=cartitems.map((item)=>{

//     if(item.id===id){
//       return{...item,checked:!item.checked};
//     }
//     return item
//   })

//   setCartitems(updatedCart)
//   localStorage.setItem("cart",JSON.stringify(updatedCart))


//  }


const handleCheck=(id,value)=>{
  let updatedCart;
  if(value==="bucket"){
    const allChecked=cartitems.every(items=>items.checked===true);
    updatedCart=cartitems.map((item)=>({
      ...item,checked:!allChecked
    }));
  }
  else if(value==="item"){
    updatedCart=cartitems.map((item)=>{
      if(item.id===id){
        return{...item,checked:!item.checked};
      }
      return item;
    })
    
  }
  setCartitems(updatedCart);
  localStorage.setItem("cart",JSON.stringify(updatedCart));
}

const handleCheckout=()=>{
  const checkedItems=cartitems.filter((item)=>item.checked);
  console.log("Checked items being saved:",checkedItems);
  localStorage.setItem("checkedItems",JSON.stringify(checkedItems));
  
  Navigate("/checkoutpage" );
}

  return (
    
    <div className='cartpage-background'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            
            
          
        
<div className='left-container'>
              <div className='cart-heading'>
              <input type='checkbox' checked={cartitems.every((items)=>items.checked)} onChange={()=>handleCheck(null,"bucket")} />
              <p>bucket list</p>

              </div>
                {cartitems.length===0 ? (<p>cart is empty</p>)
          : (
            cartitems.map((item)=>(
              <div className='cart-body'>
                
                <div className=' cart-items-left'>
                  
                  <input type='checkbox' checked={item.checked || false} onChange={()=>handleCheck(item.id,"item")} />
                  <div className='image-container'>
                <img src={item?.images [0]} />
                
                </div>
                </div>
                
                <div className=' cart-items-right' >
                  <p>{item?.title}</p>
                  
                 <div className='cart-items-right-down' >
                
                  <p className='price'>Rs. {item?.price}</p>
                 
                <div className='functionality'>
                  
                  <p className='less' onClick={()=>updateQuantity(item.id,"-")}>-</p>
                  <p className='quantity'>{item?.quantity}</p>
                  <p className='add' onClick={()=>updateQuantity(item.id,"+")}>+</p>
                  
                  <i class="bi bi-trash3" onClick={()=>deleteFromcart(item.id)}></i>
                  

                  </div>
                  </div>
                  </div>


              </div>
                ))
          )

          }
            </div>
          
          </div>
          
          <div className='col-md-4'>
            <div className='right-container'>
              <div className='summary'>Summary</div>
              <div className='total'>
                <div >Total ({cartitems.length} items)</div>
                <div className='price'>Rs. {cartitems.filter(item=>item.checked) .reduce((total,item)=>total + item.price * (item.quantity || 1),0) .toFixed(2)}</div>
              </div>
              <div className='orange'><i class="bi bi-info-circle"></i><p>Above mentioned price is excluding shipping charges </p></div>
              <button className='cart-button checkout' onClick={()=>handleCheckout()}>Proceed to checkout</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartPage
