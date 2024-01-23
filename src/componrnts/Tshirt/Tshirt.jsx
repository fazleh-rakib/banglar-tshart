import React from 'react';
import "../Tshirt/Tshirt.css"

const Tshirt = ({tshirt ,handleAddToCart}) => {
    const {name,picture,price,} = tshirt
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price :{price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;