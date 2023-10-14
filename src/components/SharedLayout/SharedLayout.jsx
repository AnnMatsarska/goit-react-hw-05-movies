import { RiMovieFill } from 'react-icons/ri';

import {
  StyledHeader,
  StyledLinkLogo,
  StyledLink,
} from './SharedLayout.styled';
import { Container } from '../App/App.styled';

export const SharedLayout = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLinkLogo to="/">
          <RiMovieFill size="48px" />
        </StyledLinkLogo>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};
