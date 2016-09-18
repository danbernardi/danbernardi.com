import React from 'react';
import Nav from './Nav';

const Menu = () => {
  const menuSheets = [
    {
      id: 'home',
      items: [
        { label: 'About Me', target: 'about' },
        { label: 'My work', target: 'work' },
        { label: 'Contact', target: 'contact' }
      ]
    },
    {
      id: 'about',
      items: [
        { label: 'My work', target: 'work' }
      ]
    },
    {
      id: 'work',
      items: [
        { label: 'Portfolio item 1', target: 'port1' },
        { label: 'Portfolio item 2', target: 'port2' },
        { label: 'Portfolio item 3', target: 'port3' },
        { label: 'Portfolio item 4', target: 'port4' },
        { label: 'Portfolio item 5', target: 'port5' },
        { label: 'Portfolio item 6', target: 'port6' },
        { label: 'View all', target: 'portall', routeTo: '/work' }
      ]
    }
  ];

  return (
    <div className="menu">
      <Nav sheets={ menuSheets } />
    </div>
  );
};

export default Menu;
