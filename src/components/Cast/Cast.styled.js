import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 44px;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CastInfoWrapper = styled.div`
  border-radius: 0 0 8px 8px;
  background-color: rgb(239, 187, 64);

  width: 192px;
  height: 60px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const CastName = styled.p`
  margin-bottom: 5px;
`;

export const Img = styled.img`
  height: 300px;
`;
