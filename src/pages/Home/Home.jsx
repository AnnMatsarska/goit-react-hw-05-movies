import { Container, Section } from 'components/App/App.styled';
import { Title } from './Home.styled';

import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from 'services/movie-api';

import { Loader } from 'components/Loader/Loader';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { Error } from 'components/Error/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('start rendering');
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
    console.log('end rendering');
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Title>Trending today</Title>
          {isLoading && <Loader />}
          {error && <Error message="Opps. something went wrong" />}
          {movies.length !== 0 && <TrendingMovies movies={movies} />}
        </Container>
      </Section>
    </>
  );
};

export default Home;
