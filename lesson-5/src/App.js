import {Fragment, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const hideCartHandler = () => {
    setCartIsShow(false);
  }

  const openCartHandler = () => {
    setCartIsShow(true);
  }
  const setCartHandler = (data) => {
    const itemId = cart.findIndex((item) => item.id === data.id);

    const itemData = cart[itemId];
    setAmount(amount + data.amount);
    if (itemData) {
      cart[itemId] = {
        ...itemData,
        amount: itemData.amount + data.amount,
      };
    } else {
      setCart([...cart, data]);
    }
  }

  const RemoveCartHandler = (id) => {
    setAmount(amount - 1);

    const itemIndex = cart.findIndex((item) => item.id === id);
    const itemData = cart[itemIndex];
    console.log('ItemAMount',itemData.amount);
    if (itemData.amount !== 1) {
      cart[itemIndex] = {
        ...itemData,
        amount: itemData.amount - 1,
      }

    }
    if (itemData.amount === 1) {
      const cartHelper = cart.filter((item) => item.id !== id);
      if (cartHelper) {
        setCart(cartHelper);
      } else {
        setCart([]);
      }
    }
  }

  return (
    <CartProvider>
      {cartIsShow &&
        <Cart onClose={hideCartHandler} cart={cart} setCart={setCartHandler} onRemove={RemoveCartHandler}/>}
      <Header onShowCart={openCartHandler} amount={amount}/>
      <main>
        <Meals setCart={setCartHandler}/>
      </main>
    </CartProvider>
  );
}

export default App;
