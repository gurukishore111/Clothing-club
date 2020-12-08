import React from 'react';
import { connect } from 'react-redux';
import "./checkout.styles.scss";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors';
import CheckOutItem from './../../components/checkout-item/checkout-item.components';
import StripeButton from '../../components/stripe-button/strip-button.component';

function CheckOut({cartItem,total}) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
               <div className="header-block">
                  <span>
                      Products
                  </span>
               </div>
               <div className="header-block">
                  <span>
                      Description
                  </span>
               </div>
               <div className="header-block">
                  <span>
                      Quantity
                  </span>
               </div>
               <div className="header-block">
                  <span>
                      Price
                  </span>
               </div>
               <div className="header-block">
                  <span>
                      Remove
                  </span>
               </div>
            </div>
            {
                cartItem.map(cartItem =>
                    <CheckOutItem  key={cartItem.id} cartItem={cartItem} /> )
            }
            <div className="total">
               <span>Total : ${total}</span>
            </div>
            <div className="test-warning">
            😀 Please use the following test credit card for payment
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CVV:123
            </div>
            <StripeButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItem:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOut)
