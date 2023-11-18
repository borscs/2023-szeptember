import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import {useContext} from "react";
import CartContext from "../../Store/Cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartItem = (
    <ul className={classes['cart--items']}>
      {ctx.items.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        description={item.description}
        price={item.price}
      />
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
