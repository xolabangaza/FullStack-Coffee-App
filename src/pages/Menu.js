import React, { useEffect, useState } from 'react';
import MenuService from '../services/menuService';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    MenuService.getMenuItems()
      .then(data => setMenuItems(data))
      .catch(error => console.error("Error fetching menu items:", error));
  }, []);

  return (
    <div>
      <h1>Our Coffee Menu</h1>
      <div className="menu-list">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
