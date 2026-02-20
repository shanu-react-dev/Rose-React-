import React from "react";
import search from "../Assets/search.svg";
import heart from "../Assets/heart.svg";
import cart from "../Assets/cart.svg";

const Buttons = () => {
  return (
    <div className="icons">
      <ul>
        <li>
          <img src={search} alt="" />
        </li>
        <li>
          <img src={heart} alt="" />
        </li>
        <li>
          <img src={cart} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Buttons;
