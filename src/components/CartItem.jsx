import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../redux/actions/cart.action";
import "../styles/CartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function deleteItem() {
    const res = window.confirm("Apakah anda yakin mau hapus barang ini?");
    if (res) dispatch(deleteCartItem(item.id));
  }

  return (
    <>
      <div className="cart-item">
        <div className="cart-item-product">
          <div className="cart-item-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-item-name">
            <span>{item.name}</span>
            <p>{item.seller}</p>
          </div>
        </div>
        <div className="cart-item-quantity center">{item.quantity} pcs</div>
        <div className="cart-item-price center">
          <span>Rp.{item.price * item.quantity}</span>
          <button onClick={deleteItem}>Remove</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
