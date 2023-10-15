import { MovieCard } from '../MovieCard/MovieCard';
export const TrendingMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};
