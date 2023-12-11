import "./App.css";
import Header from "./Component/Layout/Header";
import Items from "./Component/Meals/Items";
import Cart from "./Component/Cart/Cart";
function App() {
  return (
    <div>
      <Cart/>
      <Header />
      <Items/>
    </div>
  );
}

export default App;
