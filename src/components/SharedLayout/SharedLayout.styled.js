import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  margin-left: auto;
  margin-right: auto;
  padding: 5px 15px;

  background-color: rgb(227, 102, 6, 0.7);
`;

export const StyledLinkLogo = styled(Link)`
  color: black;
  transition: all 300ms;

  &:hover,
  &:focus {
    color: white;
  }
`;
