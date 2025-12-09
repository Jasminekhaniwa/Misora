// import React from 'react'
// import { create } from 'zustand'
// import Product from '../../Pages/Product'

// // const useStorecount=create((set)=>({
// //     count:1,
// //     inc:()=>set((state)=>({count:state.count+1})),
// //     dec:()=>set((state)=>({count:state.count-1}))
// // }))

// // export default useStorecount

// export const useProductlist=create((set)=>({
//     products:([]),
    
//     fetchproducts:()=>{
//         fetch("https://dummyjson.com/products")
//         .then((response)=>response.json())
//         .then((data=>set({products:data.products})))

//     }
// }))

import React from "react";
import {create} from 'zustand'

export const useProductlist=create((set)=>({
    products:([]),
    loadind:false,
    error:null,

    fetchproducts:()=>{
        set({loading:true, error:null});
        fetch("https://dummyjson.com/products")
        .then((response)=>response.json())
        .then((data)=>set({products:data.products}))
    }
}))


export const useSingleproduct=create((set)=>({
   singleProduct:{},
   loading:false,
   error:null,
   fetchSingleproduct:(id)=>{
    set({loading:true,error:null})
    fetch(`https://dummyjson.com/products/${id}`)
    
    .then((response)=>response.json())
    .then((data)=>{
        // debugger;
        set({singleProduct:data,loading:false})})

        .catch (()=>set({error:"failed to fetch",loading:false}))
        
   },
}))




