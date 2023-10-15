import { RiMovieFill } from 'react-icons/ri';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  StyledHeader,
  HeaderContainer,
  StyledLinkLogo,
  StyledLink,
  NavList,
} from './SharedLayout.styled';
import { Container } from '../App/App.styled';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
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
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
