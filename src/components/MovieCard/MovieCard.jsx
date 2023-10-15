import { Item, Img, Title, StyledLink } from './MovieCard.styled';
import { useLocation } from 'react-router-dom';
import noImage from '../../images/No-Image.svg.png';

export const MovieCard = ({ movie: { id, poster_path, title } }) => {
  const location = useLocation();
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Item>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <Img
          src={poster_path ? IMAGE_BASE_URL + poster_path : noImage}
          alt={title}
          loading="lazy"
        />
        <Title>{title}</Title>
      </StyledLink>
    </Item>
  );
};
