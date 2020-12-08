import React from 'react';
import StripeCheckout from "react-stripe-checkout";

function StripeButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HQ59XIc2hNQVeH94sdPIu0hrAGlqhJnLrQ9knKOzPZyU68iuUOIxln4RhT7fA8kFFz5sNb5ItbVWj7FJWTg5OS700xhIoopvw'
   const  onToken = token =>{
        console.log(token)
        alert('Payment Successfull')
    }
    return (
        <div>
            <StripeCheckout 
             label="Buy Now"
             name="CLOTHING-CLUB LTD."
             billingAddress
             shippingAddress
             image="https://sendeyo.com/up/d/f3eb2117da"
             description ={`Your total is $${price}`}
             amount={priceForStripe}
             panelLabel='PayNow'
             token={onToken}
             stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeButton
