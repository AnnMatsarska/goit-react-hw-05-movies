import { Container } from 'components/App/App.styled';
import { FaSearch } from 'react-icons/fa';
import { Form, Button, Input, SectionSearch } from './Movies.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifications } from 'services/notifications/notifications';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMoviesByQuery } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';

const Movies = () => {
  const [searchedParams, setSearchedParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchedParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const getMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMoviesByQuery(query);
        if (data.results.length === 0) {
          toast.info(
            `Oops! We can't find movies matching with title ${query}!`,
            notifications
          );
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQuery();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const searchValue = form.elements.query.value;
    if (searchValue.trim() === '') {
      return toast.info('Please, enter movie name', notifications);
    }
    setSearchedParams({ query: searchValue });

    form.reset();
  };

  return (
    <>
      <SectionSearch>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search"
            />
            <Button type="submit">
              <FaSearch />
            </Button>
          </Form>
          {isLoading && <Loader />}

          {error && <Error message="Opps. something went wrong" />}
          {movies.length !== 0 && <TrendingMovies movies={movies} />}
          <ToastContainer />
        </Container>
      </SectionSearch>
    </>
  );
};

export default Movies;
