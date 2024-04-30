import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart]= useState(false)

  function handleClick(){
    setCart((inCart) => !inCart);
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className='in-cart'>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;