import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 10) / 100);
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-component'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total.toFixed(2)}</p>
            <p>Total Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;