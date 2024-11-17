// components/ProductList.js
"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Grilled Chicken",
    price: 15,
    image: "assets/img/shop-food/s2.png",
  },
  {
    id: 2,
    name: "Burger",
    price: 20,
    image: "assets/img/shop-food/s3.png",
  },
  // Diğer ürünler...
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 mb-4">
          <div className="product-item">
            <img src={product.image} alt={product.name} className="img-fluid" />
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <button
              onClick={() => addToCart(product)}
              className="theme-btn bg-red-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
