import { RiMovieFill } from 'react-icons/ri';

import { StyledHeader, StyledLinkLogo } from './SharedLayout.styled';
import { Container } from '../App/App.styled';

export const SharedLayout = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLinkLogo to="/">
          <RiMovieFill size="48px" />
        </StyledLinkLogo>
      </Container>
    </StyledHeader>
  );
};
