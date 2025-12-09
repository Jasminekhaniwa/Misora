import React from 'react'

export const handleAddToCart = (product) => {
    console.log("product",product)
    const existingCart=JSON.parse(localStorage.getItem("cart") || "[]");
    const alreadyInCart=existingCart.find((item)=>item.id===product.id);
    if(alreadyInCart){
        alreadyInCart.quantity +=1;
    }
    else{
        existingCart.push({...product,quantity:1});

    }
    localStorage.setItem("cart",JSON.stringify(existingCart));
      console.log("Cart updated:", existingCart);

}




