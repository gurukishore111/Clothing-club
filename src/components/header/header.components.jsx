import React from 'react'
import {Link} from "react-router-dom";
import "./header.styles.scss"; 
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from './../../firebases/firebase.utils';

function Header({currentUser}) {
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
             </div>
        </div>
    )
}

export default Header
