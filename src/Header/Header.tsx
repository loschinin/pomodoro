import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import pomodoro from './pomodoro.png';

import './Header.css';

const Header = () => {
  const location = useLocation();
  const links = ['main', 'statistics'];
  console.log(location.pathname);
  return (
    <div className={'header'}>
      <img src={pomodoro} alt={''} />
      {links.map(link => (
        <Link
          key={link}
          className={
            location.pathname === `/${link}` ||
            (location.pathname === '/' && link === 'main')
              ? 'active'
              : ''
          }
          to={link === 'main' ? '/' : link}
        >
          {link.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default Header;
