import { useEffect, useState } from "react";
import { requestSearchFilm } from "../../Api/Api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchFilm, setSearchFilm] = useState("");
  const [searcResult, setSearcResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // console.log("searchFilm", searchFilm);

  useEffect(() => {
    async function getSearchFilm() {
      if (!searchFilm) return;
      try {
        setIsLoading(true);
        const data = await requestSearchFilm(searchFilm);
        if (data.results.length === 0) {
          setSearcResult([]);
        } else {
          setSearcResult(data.results);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchFilm();
  }, [searchFilm]);

  const onSetSearchFilm = (searchTerm) => {
    setSearchFilm(searchTerm);
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

      <MovieList searchResult={searcResult} />
    </>
  );
};

export default MoviesPage;
