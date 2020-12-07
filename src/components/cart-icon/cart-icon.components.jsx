import React from 'react'
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { connect } from 'react-redux';
import { toogleCartHidden } from './../../redux/cart/cart.action';

const CartIcon = ({toogleCartHidden}) =>(
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
  toogleCartHidden : () => dispatch(toogleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);