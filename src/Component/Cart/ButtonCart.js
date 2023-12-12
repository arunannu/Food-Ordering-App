import React,{useContext} from "react";
import './ButtonCart.css';
import CartssContext from "../../CartssContext";
const cartImg = [
  "https://static.vecteezy.com/system/resources/previews/000/441/347/original/vector-shopping-cart-icon.jpg",
];
const ButtonCart = (props) => {
  const cartCtx=useContext(CartssContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber = item.amount;
  },0)
  return (
    <section className="button">
      <button onClick={props.onClick}>
        <span>
            <img src={cartImg} alt="CartIcan" className="cart"></img>
        </span>
        <span className="yourCart">Your Cart</span>
        <span className="quantity">{numberOfCartItems}</span>
      </button>
    </section>
  );
};

export default ButtonCart;
