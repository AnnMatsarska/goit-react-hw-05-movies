import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import {
  DetailsMovieWrapper,
  DetailsTitle,
  DetailsScore,
  DetailsSubTitle,
  DetailsSubText,
  StyledAdditionalList,
  StyledLink,
} from './MovieDetails.styled';
import { Container, Section } from 'components/App/App.styled';
import noImage from 'images/No-Image.svg.png';

import { fetchMoviesById } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { GoBack } from 'components/GoBackButton/GoBack';

const MoviesDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backlinkhref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMoviesById(movieId);

        setMovie(movieById);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  const { title, genres, poster_path, vote_average, overview } = movie;
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <Section>
        <Container>
          <GoBack backlinkhref={backlinkhref.current} />
          {error && (
            <Error
              message={`Sorry, but the searched movie was not found. Please try again later!`}
            />
          )}
          {isLoading && <Loader />}
          <DetailsMovieWrapper>
            <img
              src={poster_path ? IMAGE_BASE_URL + poster_path : noImage}
              alt={title}
              width="300px"
              loading="lazy"
            />
            <div>
              <DetailsTitle>{title}</DetailsTitle>
              <DetailsScore>
                <b>User score:</b> {Math.round(vote_average * 10)}%
              </DetailsScore>
              <DetailsSubTitle>Overview:</DetailsSubTitle>
              <DetailsSubText>{overview}</DetailsSubText>

              <DetailsSubTitle>Genres:</DetailsSubTitle>
              <DetailsSubText>
                {genres &&
                  genres.map(({ id, name }) => {
                    return <span key={id}>{name} </span>;
                  })}
              </DetailsSubText>
            </div>
          </DetailsMovieWrapper>
          <h2>Additional information</h2>
          <StyledAdditionalList>
            <li>
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews">Reviews</StyledLink>
            </li>
          </StyledAdditionalList>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </>
  );
};

export default MoviesDetails;
