import React from "react";
import "./Header.css";

export function Header() {
  return (
    <header>
      <img
        src={"https://www.svgrepo.com/show/187994/shopping-basket-basket.svg"}
        alt="logo"
        className="logo"
      />
      <div className="shop-name">Shop Name</div>
    </header>
  );
}
