import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  return (
    <div id="cart" className="container">
      <h1>Shopping Cart</h1>
      <div className="cart">
        {cartItems.length !== 0 ? (
          <>
            <div className="cart-details cart-box">
              <div className="cart-details-header">
                <h4>Products</h4>
              </div>
              <hr />
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </div>
            </div>
            <div className="cart-total cart-box">
              <div>
                <h3>Total Payment</h3>
                <h2>
                  Rp
                  {cartItems.reduce((total, item) => {
                    return total + item.price;
                  }, 0)}
                </h2>
              </div>
              <button onClick={() => alert("Purchasing")}>
                Make a Purchase
              </button>
            </div>
          </>
        ) : (
          <h5>Keranjang Kamu Kosong, Silahkan Belanja Dulu!</h5>
        )}
      </div>
    </div>
  );
}

export default Cart;
