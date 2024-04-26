import React from 'react';
import Cart from './Cart';
import ShoppingCart from './ShoppingCart';

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <ShoppingCart />
    </div>
  );
}

export default CartPage;
