import React from 'react'
import {Link} from "react-router-dom";
import "./header.styles.scss"; 
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from './../../firebases/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.components';
import CartDropDown from './../cart-dropdown/cart-dropdown.components';

function Header({currentUser,hidden}) {
  //console.log(currentUser)
    return (
        <div className="header">
             <Link to="/" className="logo-container">
                <Logo className="logo" />
             </Link>
             <div className="options">
               <Link className="option" to="/shop">
                 SHOP
               </Link>
               <Link className="option" to="/contact">
                 CONTACT
               </Link>
               {
                 currentUser ? 
                 (<div className="option" style={{color:"gray"}} onClick={() => auth.signOut()} >
                    SIGN OUT
                 </div>)
                  :
               ( <Link className="option" style={{color:"gray"}} to="/signin">
                  SIGN IN
               </Link>)
               }
               <CartIcon />
             </div>
             {
               hidden ? null :
              <CartDropDown />
             }
        </div>
    )
}

const mapStateToProps = state =>({
    currentUser:state.user.currentUser,
    hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);
