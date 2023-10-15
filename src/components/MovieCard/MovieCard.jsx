export const MovieCard = ({ movie: { poster_path, title } }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <img
        src={poster_path ? IMAGE_BASE_URL + poster_path : ''}
        alt={title}
        loading="lazy"
      />
      <h2>{title}</h2>
    </>
  );
};
