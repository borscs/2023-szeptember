import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  console.log(props);
  const cartItem = (
    <ul className={classes['cart--items']}>
      {props.cart.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={() =>console.log('remove')}
        onAdd={() => console.log('add')}
      />
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.89</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
