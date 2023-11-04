import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {

  const  cartTotalAMount = props.cart.reduce((sum, item) => sum+=(Number(item.price)* Number(item.amount)), 0).toFixed(2);
  const cartItem = (
    <ul className={classes['cart--items']}>
      {props.cart.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        description={item.description}
        price={item.price}
        onRemove={props.onRemove}
        setCart={props.setCart}
      />
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartTotalAMount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
