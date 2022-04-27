import React from 'react'
//import products from '../products/Products'
import {Route, Routes} from 'react-router-dom'
import Products from '../products/Products'
import Signup from '../../signup/Signup'
import Cart from '../../cart/Cart'
function MyRoutes({productItems ,cartItems,handleAddProduct}) {
  console.log(cartItems);
  return (
    <div>
        <Routes>
        <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>} exact />
        <Route path="/signup" element={<Signup/>} exact />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>} exact />
        </Routes> 
        
    </div>
  )
}

export default MyRoutes