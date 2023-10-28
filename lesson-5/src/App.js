import {Fragment, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [cart, setCart] = useState([]);
  const hideCartHandler = () => {
    setCartIsShow(false);
  }

  const openCartHandler = () => {
    setCartIsShow(true);
  }
  const setCartHandler = (data) => {
    const itemId = cart.findIndex((item) => item.id === data.id);

    const itemData = cart[itemId];
    if(itemData){
      cart[itemId] = {
        ...itemData,
        amount: Number(itemData.amount) + Number(data.amount),
      };
    }else {
      setCart([...cart, data]);
    }
  }
  return (
    <Fragment>
      {cartIsShow && <Cart onClose={hideCartHandler} cart={cart}/> }
      <Header onShowCart={openCartHandler}/>
      <main>
        <Meals setCart={setCartHandler}/>
      </main>
    </Fragment>
  );
}

export default App;
