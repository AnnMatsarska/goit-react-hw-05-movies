import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  width: calc((100% - 72px) / 4);
  transition: transform 300ms;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const Img = styled.img`
  height: 385px;
`;

export const StyledLink = styled(Link)`
  color: black;
`;

export const Title = styled.h2`
  display: inline-block;
  border-radius: 0 0 8px 8px;
  background-color: rgb(239, 187, 64);

  width: 249px;
  height: 56px;
  padding-top: 10px;
  padding-left: 8px;

  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
`;
