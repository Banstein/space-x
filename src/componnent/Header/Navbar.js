import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rocket',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/MyProfile',
      text: 'MyProfile',
    },
  ];

  return (
    <nav className="nav-container flex-center">
      <ul className="nav-links flex-center">
        {links.map((link) => (
          <li key={link.id} className="nav-item">
            <NavLink to={link.path} className={(navData) => (navData.isActive ? 'active-link' : 'none')}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
