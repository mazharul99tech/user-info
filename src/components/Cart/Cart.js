import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const userTotalIncome = cart.reduce((total, user)=> total + user.income, 0);
    return (
        <div>
            <h1>Users: {cart.length}</h1>
            <h2>Total Income: {userTotalIncome}</h2>
        </div>
    );
};

export default Cart;