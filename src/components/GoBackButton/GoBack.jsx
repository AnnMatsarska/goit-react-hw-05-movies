import { StyledBackLink, StyledBackLinkText } from './GoBack.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const GoBack = ({ backlinkhref }) => {
  return (
    <StyledBackLink to={backlinkhref}>
      <StyledBackLinkText>
        <AiOutlineArrowLeft /> Go back
      </StyledBackLinkText>
    </StyledBackLink>
  );
};
