import { Container, Section } from 'components/App/App.styled';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesCast } from 'services/movie-api';
import { CastList } from './CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMoviesCast(movieId);

        setCast(movieById.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>
          {error && (
            <Error
              message={`Sorry, but the searched cast was not found. Please try again later!`}
            />
          )}
          {isLoading && <Loader />}
          {cast !== 0 && <CastList cast={cast} />}
        </Container>
      </Section>
    </>
  );
};

export default Cast;
