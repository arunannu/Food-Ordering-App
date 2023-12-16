import React,{useState} from 'react'
import CartssProvider from './CartssProvider';
import Header from "./Component/Layout/Header";
import Items from "./Component/Meals/Items";
import Cart from "./Component/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartssProvider>
      {/* { cartIsShown && <Cart onClose={hideCartHandler} /> }<hr/> */}
      <Header onShowCart ={showCartHandler} /><hr style={{border:"1px solid black"}}></hr>
      { cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Items/>
    </CartssProvider>
  );
}

export default App;
