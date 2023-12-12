import React,{Fragment,useState} from 'react'

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
    <Fragment>
      { cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Header onShowCart ={showCartHandler} />
      <Items/>
    </Fragment>
  );
}

export default App;
