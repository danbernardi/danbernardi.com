import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Menu = () => {
  const menuSheets = [
    {
      id: 'index',
      items: [
        { label: 'Home', routeTo: '/' },
        { label: 'About Me', target: 'about' },
        { label: 'My work', target: 'work' },
        { label: 'Contact', target: 'contact' }
      ]
    },
    {
      id: 'about',
      items: [
        {
          icon: 'fa-file-pdf-o',
          label: 'See my résumé',
          routeTo: '#'
        },
        {
          icon: 'fa-github',
          label: 'See me on github',
          routeTo: 'https://github.com/danbernardi',
          external: true 
        },
        {
          icon: 'fa-linkedin',
          label: 'See me on Linkedin',
          routeTo: 'https://www.linkedin.com/in/daniel-bernardi-5a600151',
          external: true
        }
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
    },
    {
      id: 'contact',
      items: [
        { label: 'About Me', target: 'about' }
      ]
    }
  ];

  return (
    <div className="menu">
      <Nav sheets={ menuSheets } />
      <Footer />
    </div>
  );
};

export default Menu;
