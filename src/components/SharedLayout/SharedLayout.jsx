import { RiMovieFill } from 'react-icons/ri';

import {
  StyledHeader,
  HeaderContainer,
  StyledLinkLogo,
  StyledLink,
  NavList,
} from './SharedLayout.styled';
import { Container } from '../App/App.styled';

export const SharedLayout = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderContainer>
          <StyledLinkLogo to="/">
            <RiMovieFill size="48px" />
          </StyledLinkLogo>
          <nav>
            <NavList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </NavList>
          </nav>
        </HeaderContainer>
      </Container>
    </StyledHeader>
  );
};