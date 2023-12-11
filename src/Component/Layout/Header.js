import React, { Fragment } from "react";
import "./Header.module.css";
import ButtonCart from "../Cart/ButtonCart";
import Summary from "./Summary";
const header = [
  "https://www.moomoorestaurant.com/brisbane/wp-content/uploads/2016/07/header-image-menu-nbe-2.jpg",
];
const Header = () => {
  return (
    <Fragment>
      <header>
        <h1>React Meals</h1>
        <ButtonCart/>
      </header>
      <div>
        <img src={header} alt="Image of fooding table"style={{width:"100%", height:"500px"}}></img>
        <Summary/>
      </div>
    </Fragment>
  );
};

export default Header;
