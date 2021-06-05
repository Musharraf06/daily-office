import React from 'react';
import { HeaderContainer, NavLink } from './headerStyles';

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
        <NavLink href='/' rel='noreferer' activePage={getActivePage('/')}>
          Daily Office
        </NavLink>
        <div>
          <NavLink
            href='/tasks'
            rel='noreferer'
            activePage={getActivePage('/tasks')}
          >
            Tasks
          </NavLink>
          <NavLink
            href='/timesheet'
            rel='noreferer'
            activePage={getActivePage('/timesheet')}
          >
            Timesheet
          </NavLink>
          <NavLink
            href='/about'
            rel='noreferer'
            activePage={getActivePage('/about-us')}
          >
            About us
          </NavLink>
          <NavLink
            href='/contact'
            rel='noreferer'
            activePage={getActivePage('/contact')}
          >
            Contact
          </NavLink>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
