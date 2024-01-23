import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "../Home/Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tshirt) => {
    const newCart = [...cart, tshirt];
    setCart(newCart);
  };

  const handleRemoveCart = id =>{
    console.log(id);
  }
  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart} handleRemoveCart={handleRemoveCart} />
      </div>
    </div>
  );
};

export default Home;
