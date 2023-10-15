import { MovieCard } from '../MovieCard/MovieCard';
import { List } from './TrendingMovies.styled';
export const TrendingMovies = ({ movies }) => {
  console.log(movies);
  return (
    <List>
      {movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </List>
  );
};
