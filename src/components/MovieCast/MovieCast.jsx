import { lazy, useEffect, useState } from "react";
import { getMovieCast } from "../../Api/Api";
import { useParams } from "react-router-dom";

const Loader = lazy(() => import("../Loader/Loader"));
const ErrorMessage = lazy(() => import("../ErrorMessage/ErrorMessage"));

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCastPage = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCastPage();
  }, [movieId]);

  return (
    <div>
      <ul>
        <h2>Cast</h2>
        {cast !== null &&
          cast.cast.map((actor) => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <p> {actor.name}</p>
                <p> Character: {actor.character}</p>
              </li>
            );
          })}
      </ul>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieCast;
