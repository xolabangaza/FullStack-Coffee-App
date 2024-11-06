import React, { createContext, useReducer } from 'react';

// Define initial cart state
const initialState = {
  items: [],
  total: 0,
};

// Define cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedItems = [...state.items, action.payload];
      const updatedTotal = updatedItems.reduce((sum, item) => sum + item.price, 0);
      return { ...state, items: updatedItems, total: updatedTotal };

    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const newTotal = filteredItems.reduce((sum, item) => sum + item.price, 0);
      return { ...state, items: filteredItems, total: newTotal };

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// CartProvider component to wrap around the app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = item => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = id => dispatch({ type: 'REMOVE_ITEM', payload: id });

  return (
    <CartContext.Provider value={{ cart: state, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
