import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../../pages/MoviesDetails/MoviesDetails')
);
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
};
