import React from "react";
import { useSelector } from "react-redux";
import "../styles/Product.css";
import Card from "./Card";

function Product() {
  const products = useSelector((state) => state.productReducer);

  return (
    <main id="product">
      <div className="container">
        <h1>Product</h1>
        <div className="product-container">
          {products.length !== 0 ? (
            products.map((product) => {
              return <Card data={product} key={product.id} />;
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </main>
  );
}

export default Product;
