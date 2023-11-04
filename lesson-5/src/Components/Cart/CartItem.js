import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const setCartHandler = () => {
  console.log(props.id, props.name);
    props.setCart({
      description: props.description,
      id: props.id,
      price: props.price,
      amount: 1,
      name: props.name});
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => {props.onRemove(props.id)}}>−</button>
        <button onClick={setCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
