import { Container, Section } from 'components/App/App.styled';

import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './ReviewsList';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/movie-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMoviesReviews(movieId);

        setReviews(movieById.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>
          {error && (
            <Error
              message={`Sorry, but the searched information was not found. Please try again later!`}
            />
          )}
          {isLoading && <Loader />}
          {reviews !== 0 && <ReviewsList reviews={reviews} />}
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
