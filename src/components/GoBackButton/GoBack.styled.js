import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;

  text-decoration: none;
  color: black;

  border-radius: 15px;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  min-height: 20px;
  min-width: 0;
  border: 1px solid black;
  outline: none;
  padding: 8px 12px;
  text-align: center;

  transition: all 300ms;

  &:hover,
  &:focus {
    background-color: rgb(239, 187, 64);

    border-radius: 15px;
    border: 1px solid rgb(239, 187, 64);
  }
`;

export const StyledBackLinkText = styled.span`
  display: flex;
  align-items: center;
`;
