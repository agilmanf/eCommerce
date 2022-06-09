import React from "react";
import "../styles/Product.css";
import Card from "./Card";

function Product() {
  return (
    <main id="product">
      <div className="container">
        <h1>Product</h1>
        <div className="product-container">
          <Card />
        </div>
      </div>
    </main>
  );
}

export default Product;
