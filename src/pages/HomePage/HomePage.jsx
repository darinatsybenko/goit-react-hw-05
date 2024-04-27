import { lazy, useEffect, useState } from "react";
import { trendingFilms } from "../../Api/Api";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));
const Loader = lazy(() => import("../../components/Loader/Loader"));
const ErrorMessage = lazy(() =>
  import("../../components/ErrorMessage/ErrorMessage")
);

const HomePage = () => {
  const [movieItems, setMovieItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getTrending() {
      try {
        setIsLoading(true);
        const data = await trendingFilms();
        console.log("data", data);
        setMovieItems(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTrending();
  }, []);

  return (
    <div>
      <h1>Trending today:</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieList movieItems={movieItems} />
    </div>
  );
};

export default HomePage;
