import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  DetailsMovieWrapper,
  DetailsTitle,
  DetailsScore,
  DetailsSubTitle,
  DetailsSubText,
} from './MovieDetails.styled';

import { fetchMoviesById } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { Container, Section } from 'components/App/App.styled';
import noImage from 'images/No-Image.svg.png';

const MoviesDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();

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
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </>
  );
};

export default MoviesDetails;
