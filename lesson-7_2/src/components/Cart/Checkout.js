import classes from './Checkout.module.css';
import {useRef, useState} from "react";

const isEmpty = (value) => value.trim() === '';
const is4Chart = (value) => value.trim().length === 4;
const Checkout = (props) => {
    const [formIsValid, setFormIsValid] = useState({
      name: true,
      street: true,
      city: true,
      postalCode: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();


  const confirmHandler = (event) => {
    event.preventDefault();

    setFormIsValid({
      name: !isEmpty(nameInputRef.current.value),
      street: !isEmpty(streetInputRef.current.value),
      city: !isEmpty(cityInputRef.current.value),
      postalCode: is4Chart(postalCodeInputRef.current.value)
    });

    if(!formIsValid.city && !formIsValid.name && !formIsValid.street && !formIsValid.postalCode){
      return;
    }

    props.onSubmit({
      name: nameInputRef.current.value,
      street:streetInputRef.current.value,
      city: cityInputRef.current.value,
      postalCode: postalCodeInputRef.current.value
    });
  };

  const streetClasses = `${classes.control} ${
    formIsValid.street ? '' : classes.invalid
  }`;

  const nameClasses = `${classes.control} ${
    formIsValid.name ? '' : classes.invalid
  }`;

  const postClasses = `${classes.control} ${
    formIsValid.postalCode ? '' : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formIsValid.city ? '' : classes.invalid
  }`;



  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div className={streetClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
      </div>
      <div className={postClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
      </div>
      <div className={cityClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
