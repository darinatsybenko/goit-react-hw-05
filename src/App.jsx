import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetalisPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Loader = lazy(() => import("./components/Loader/Loader"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetalisPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
