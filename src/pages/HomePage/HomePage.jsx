import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { trendingFilms } from "../../Api/Api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieList movieItems={movieItems} />
    </div>
  );
};

export default HomePage;
