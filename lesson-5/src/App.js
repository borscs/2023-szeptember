import {useContext, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const hideCartHandler = () => {
    setCartIsShow(false);
  }
  const openCartHandler = () => {
    setCartIsShow(true);
  }

  return (
    <CartProvider>
      {cartIsShow &&
        <Cart onClose={hideCartHandler}/>
      }
      <Header onShowCart={openCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
