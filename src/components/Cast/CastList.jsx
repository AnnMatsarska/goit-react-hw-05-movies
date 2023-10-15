import noImage from 'images/No-Image.svg.png';
import { List, CastInfoWrapper, CastName, Img } from './Cast.styled';

export const CastList = ({ cast }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
  return (
    <List>
      {cast.map(({ profile_path, original_name, character, id }) => (
        <li key={id}>
          <Img
            src={profile_path ? IMAGE_BASE_URL + profile_path : noImage}
            alt={original_name}
            width="200px"
            height="300px"
            loading="lazy"
          />
          <CastInfoWrapper>
            <CastName>{original_name}</CastName>
            <p>
              <b>Character:</b> {character}
            </p>
          </CastInfoWrapper>
        </li>
      ))}
    </List>
  );
};
