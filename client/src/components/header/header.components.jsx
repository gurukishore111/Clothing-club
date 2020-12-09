import React from 'react'
import {Link} from "react-router-dom";
import "./header.styles.scss"; 
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from './../../firebases/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.components';
import CartDropDown from './../cart-dropdown/cart-dropdown.components';
import { createStructuredSelector } from "reselect";
import { selectCardHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from './../../redux/user/user.selectors';

function Header({currentUser,hidden}) {
  //console.log(currentUser)
    return (
        <div className="header">
             <Link to="/" className="logo-container">
                <Logo className="logo" />
             </Link>
             <div className="options">
               <Link className="option" to="/shop">
             <span className="emoji">🛍️</span> SHOP
               </Link>
               <a className="option" target="_blank" href="https://gurukishore.netlify.app/">
             <span className="emoji">📝</span> CONTACT
               </a>
               {
                 currentUser ? 
                 (<><div className="option" style={{color:"gray"}} onClick={() => auth.signOut()} >
                  <span className="emoji">🔑</span> SIGN OUT
                 </div>
                 <CartIcon /></>)
                  :
               ( <><Link className="option" style={{color:"gray"}} to="/signin">
                 <span className="emoji">🔑</span>  SIGN IN <span style={{fontSize:10}}>(😊To continue shopping..)</span>
               </Link>
                </>)
               }
             </div>
             {
               hidden ? null :
              <CartDropDown />
             }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCardHidden,
})

export default connect(mapStateToProps)(Header);
