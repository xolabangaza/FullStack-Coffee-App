import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const MenuItem = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
