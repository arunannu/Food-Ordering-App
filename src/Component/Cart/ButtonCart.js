import React from "react";
import './ButtonCart.css';
const cartImg = [
  "https://static.vecteezy.com/system/resources/previews/000/441/347/original/vector-shopping-cart-icon.jpg",
];
const ButtonCart = (props) => {

  return (
    <section className="button">
      <button onClick={props.onClick}>
        <span>
            <img src={cartImg} alt="CartIcan" className="cart"></img>
        </span>
        <span className="yourCart">Your Cart</span>
        <span className="quantity">3</span>
      </button>
    </section>
  );
};

export default ButtonCart;
