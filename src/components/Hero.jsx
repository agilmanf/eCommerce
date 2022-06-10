import React from "react";
import "../styles/Hero.css";
import Image from "../images/hero.png";

function Hero() {
  return (
    <header id="hero">
      <div className="container">
        <article>
          <h1>
            Barang <span>Terjamin</span> dan <span>Komplit</span> Cuma di
            eCommerce
          </h1>
        </article>
        <aside>
          <img src={Image} alt="hero" />
        </aside>
      </div>
    </header>
  );
}

export default Hero;
