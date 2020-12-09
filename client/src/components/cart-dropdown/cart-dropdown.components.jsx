import React from 'react'
import CustomButton from "../custom-button/custom-button.components";
import "./cart-dropdown.styles.scss";
import CartItem from './../cart-item/cart-itemcomponents';
import { connect } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toogleCartHidden } from './../../redux/cart/cart.action';

const CartDropDown = ({cartItems,history,dispatch})=>(
  <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />):
          <span className="empty-message">Your cart 🛒 is empty</span>
        }
      </div>
      <CustomButton onClick={()=>{ 
         history.push('/checkout'); 
         dispatch(toogleCartHidden())
         }} >GO TO CHECKOUT</CustomButton>
  </div>
)
const mapStatetoProps = createStructuredSelector({
  cartItems:selectCartItems
})
export default withRouter(connect(mapStatetoProps)(CartDropDown));
