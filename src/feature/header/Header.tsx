import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, NavElements, NavLink } from './headerStyles';

const Header = () => {
  const getActivePage = (currentLink: string) => {
    const activeLink = window.location.pathname;
    if (currentLink === activeLink) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <HeaderContainer>
        <span
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            margin: '12px 1rem',
          }}
        >
          Daily Office
        </span>
        <NavElements>
          <NavLink activePage={getActivePage('/tasks')}>
            <Link to='/tasks' rel='noreferer'>
              Tasks
            </Link>
          </NavLink>
          <NavLink activePage={getActivePage('/timesheet')}>Timesheet</NavLink>
          <NavLink activePage={getActivePage('/about-us')}>About us</NavLink>
          <NavLink activePage={getActivePage('/contact')}>Contact</NavLink>
        </NavElements>
      </HeaderContainer>
    </>
  );
};

export default Header;
