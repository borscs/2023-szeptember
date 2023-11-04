import {Fragment} from "react";

import classes from './Header.module.css';
import mealImage from '../../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartbutton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} amount={props.amount}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt='A table full of'/>
      </div>
    </Fragment>
  );
};

export default Header;