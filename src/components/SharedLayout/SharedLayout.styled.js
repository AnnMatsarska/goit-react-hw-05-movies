import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  margin-left: auto;
  margin-right: auto;
  padding: 5px;

  background-color: rgb(227, 102, 6, 0.7);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLinkLogo = styled(Link)`
  color: black;
  transition: all 300ms;

  &:hover,
  &:focus {
    color: white;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const StyledLink = styled(NavLink)`
  color: white;

  text-decoration: none;

  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 15px;

  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 8px 12px;
  text-align: center;

  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &.active {
    background-color: white;
    box-shadow: none;
    transform: translateY(0);
    color: black;
    border: 2px solid transparent;
  }
`;
