export const addItemCart = (cartItems,cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItems => cartItems.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity + 1} : cartItem
            )
    }
   return [...cartItems,{...cartItemToAdd,quantity:1}]
}


export const removeItemFormCart = (cartItems,CartItemToRemove) =>{
    const existingCartItem = cartItems.find(cartItems => cartItems.id === CartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== CartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === CartItemToRemove.id ?
        {...cartItem, quantity:cartItem.quantity -1}
        :cartItem
    )
}