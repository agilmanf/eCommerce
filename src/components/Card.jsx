import React from "react";
import "../styles/Card.css";

function Card() {
  const data = {
    id: 1,
    name: "MINISO Storage Box Organizer",
    seller: "MINISOSO",
    prices: {
      actualPrice: 98000,
      discountPrice: 72000,
      isDiscount: true,
    },
    stock: 12,
    image:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/11/12/896f4efd-59a0-4253-b965-abaf5df34a5c.jpg.webp",
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="card-details">
        <h4 className="card-name">{data.name}</h4>
        <div>
          {data.prices.isDiscount ? (
            <>
              <span className="card-price">Rp {data.prices.discountPrice}</span>
              <span className="card-discount">
                Rp. {data.prices.actualPrice}
              </span>
            </>
          ) : (
            <span className="card-price">Rp {data.prices.actualPrice}</span>
          )}
        </div>
        <div className="card-footer">
          <div>
            <p className="card-seller">{data.seller}</p>
            <p className="card-stock">Tersisa {data.stock}</p>
          </div>
          <button>
            <ion-icon name="bag-add"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
