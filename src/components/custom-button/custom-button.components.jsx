import React from 'react'
import "./custom-button.styles.scss";

function CustomButton({children,isGoogleSignIn,...otherProps}) {
    return (
        <div>
            <button className={`${isGoogleSignIn ? 'google-sign-in' : ""} custom-button` } {...otherProps}>
             {children}
            </button>
        </div>
    )
}

export default CustomButton
