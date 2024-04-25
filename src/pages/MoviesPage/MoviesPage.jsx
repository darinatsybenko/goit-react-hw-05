import { useEffect, useState } from "react";
import { requestSearchFilm } from "../../Api/Api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  // const [searchFilm, setSearchFilm] = useState("");
  const [searcResult, setSearcResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilm = searchParams.get("searchFilm") ?? "";

  useEffect(() => {
    async function getSearchFilm() {
      if (!searchFilm) return;
      try {
        setIsLoading(true);
        const movies = await requestSearchFilm(searchFilm);
        setSearcResult(movies);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchFilm();
  }, [searchFilm]);

  const onSetSearchFilm = (searchTerm) => {
    setSearchParams({ searchFilm: searchTerm });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSetSearchFilm(event.target.film.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="film" />
        </label>
        <button type="submit">search film</button>
      </form>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      <MovieList movieItems={searcResult} />
    </>
  );
};

export default MoviesPage;
