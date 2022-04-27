import React, { useState } from "react";
import data from "./components/back/Data/data";
import Header from "./components/front/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRoutes from "./components/front/Header/Routes/Routes";
import Search from "./components/Search";
import Products from "./components/front/Header/products/Products";
import Product from "./components/front/Header/products/Product";
import Signup from "./components/front/signup/Signup";
import Cart from "./components/front/cart/Cart";
const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Search />
        <Routes>
          {data.productItems.map((product) => (
            <Route
              path={`cart/${product.name}`}
              element={<Product product={product} />}
            />
          ))}
          <Route
            path="/"
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
            exact
          />
          <Route path="/signup" element={<Signup />} exact />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
            }
            exact
          />
        </Routes>
        <MyRoutes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
