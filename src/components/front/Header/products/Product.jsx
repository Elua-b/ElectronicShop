import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Product({ product }) {
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
    //   console.log(product.Image)
  return (
    <div className="products">
        <div className="card" key={product.id}>
          <div key={product.id}>
            <img
              className="product-image"
              src={product.Image}
              alt={product.name}
            />
          </div>
          <div>
            <h3 className="product-name">{product.name}</h3>
          </div>
          <div className="product-price">${product.price}</div>
          <Link to={`/cart/${product.name}`}>
            <div>
              <button
                className="product-add-button"
                onClick={() => handleAddProduct(product)}
              >
                Add to cart
              </button>
            </div>
          </Link>
        </div>
    </div>
  );
}

export default Product;
