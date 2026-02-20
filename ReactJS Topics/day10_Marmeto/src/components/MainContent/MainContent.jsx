import React from "react";
import mainContent from "../Assets/mainContent.svg";
import logo from "../Assets/logo.svg";

const MainContent = () => {
  return (
    <div className="mainContent">
      <div>
        <img src={logo} alt="" className="logo" />
        <h1>Cart</h1>
        <p>
          Home &gt; <span>Cart</span>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
