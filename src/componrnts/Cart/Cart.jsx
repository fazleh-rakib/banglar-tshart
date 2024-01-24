import { key } from 'localforage';
import React from 'react';

const Cart = ({cart, handleRemoveCart}) => {
    // console.log(cart);
    return (
        <div>

            <h2>Order Summery{cart.length}</h2>
            {
                cart.length === 0 ? <span>fokir</span> : <span>boorolox</span>
            }
            {
                cart.map(tshirt=> <p  >{tshirt.name}
                <button onClick={()=> handleRemoveCart(tshirt._id)}> X</button></p>)
            }
        </div>
    );
};

export default Cart;