import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { logout } from '../auth-provider';
import { LogoutButton } from '../styles/lib';

const Link = (props) => (
  <NavLink
    className={({ isActive }) =>
      isActive
        ? 'uppercase tracking-2px text-primary'
        : 'hover:text-primary focus:text-primary uppercase text-light-100 <sm:text-light-50 tracking-2px'
    }
    {...props}
  />
);

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => setNavbarOpen(!navbarOpen);
  const hide = () => setNavbarOpen(false);
  const show = () => setNavbarOpen(true);

  return (
    <header className='flex gap-4 @sm:text-sm justify-between items-center'>
      <div>
        <img src={logo} alt='logo' className='h-12 logo w-12 @md:pl-1'></img>
      </div>
      <button
        onClick={handleToggle}
        className='<sm:nav-mobile-toggle focus:(ring ring-light-500) md:hidden'>
        <span className='sr-only'>Menu</span>
      </button>
      <nav>
        <ul
          onBlur={hide}
          onFocus={show}
          className={`flex primary-navigation sm:items-center @sm:px-4 @md:px-8 md:py-4 ${
            navbarOpen ? '<sm:nav-mobile' : '<sm:nav-mobile-hidden'
          }`}>
          <li>
            <Link to='/'>User Profile</Link>
          </li>
          <li>
            <Link to='/top-tracks'>Top Tracks</Link>
          </li>
          <li>
            <Link to='/top-artists'>Top Artists</Link>
          </li>
          <li>
            <Link to='/latest-played'>Latest Played</Link>
          </li>
          <li>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
