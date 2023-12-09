import React, { Fragment } from "react";
import "./Header.module.css";
const header = [
  "https://www.moomoorestaurant.com/brisbane/wp-content/uploads/2016/07/header-image-menu-nbe-2.jpg",
];
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={header} alt="Image of fooding table"></img>
      </div>
    </Fragment>
  );
};

export default Header;
