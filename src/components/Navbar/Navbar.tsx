import React from 'react';
import styled from 'styled-components';
import { NavbarProps } from './Navbar.types';

const Nav = styled.nav`
  width: 100%;
  background-color: #333;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavLink = styled.a`
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <Nav>
      {links.map((link, index) => (
        <NavLink key={index} href={link.url}>
          {link.name}
        </NavLink>
      ))}
    </Nav>
  );
};

export default Navbar;
