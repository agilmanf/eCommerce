import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/actions/cart.action";
import "../styles/Card.css";

function Card({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      {data.stock === 0 ? (
        <div className="card-overlay">
          <h3>Stok Habis</h3>
        </div>
      ) : (
        ""
      )}
      <div className="card-image">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="card-details">
        <h4 className="card-name">{data.name}</h4>
        <div className="card-price-section">
          {data.prices.isDiscount ? (
            <>
              <span className="card-price">Rp{data.prices.discountPrice}</span>
              <span className="card-discount">
                Rp.{data.prices.actualPrice}
              </span>
            </>
          ) : (
            <span className="card-price">Rp{data.prices.actualPrice}</span>
          )}
        </div>
        <div className="card-footer">
          <div>
            <p className="card-seller">{data.seller}</p>
            <p className="card-stock">Stock {data.stock}</p>
          </div>
          <button onClick={() => dispatch(addCartItem(data))}>
            <ion-icon name="bag-add"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
