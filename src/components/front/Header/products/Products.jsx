import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

function Products({ productItems, handleAddProduct }) {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
          <div key={productItem.id}>
            <img
              className="product-image"
              src={productItem.Image}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="product-price">${productItem.price}</div>
          <Link to={`/cart/${productItem.name}`}>
            <div>
              <button
                className="product-add-button"
                onClick={() => handleAddProduct(productItem)}
              >
                Add to cart
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
