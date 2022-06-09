import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="brand">eCommerce</div>
        <div className="navigasi">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <HashLink to="/#product">Product</HashLink>
            </li>
            <li>
              <Link to="/cart">
                <ion-icon name="cart"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
