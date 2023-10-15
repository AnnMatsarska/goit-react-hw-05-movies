import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsMovieWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

export const DetailsTitle = styled.h1`
  margin-bottom: 50px;

  font-weight: 700;
  font-size: 46px;
  line-height: 1.1;
  letter-spacing: 0.02em;
`;

export const DetailsScore = styled.p`
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 1.1;
  letter-spacing: 0.02em;
`;

export const DetailsSubTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: 0.02em;
`;

export const DetailsSubText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 0.02em;
`;

export const StyledAdditionalList = styled.ul`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  text-decoration: none;
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

  transition: all 300ms;

  &:hover,
  &:focus {
    color: white;
    background-color: #000000;

    border-radius: 15px;
  }

  &.active {
    background-color: rgb(239, 187, 64);
    box-shadow: none;
    transform: translateY(0);
    color: black;
    border-radius: 15px;
  }
`;
