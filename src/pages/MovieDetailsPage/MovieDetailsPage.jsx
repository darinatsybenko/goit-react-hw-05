import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../Api/Api";
import css from "./MovieDetalisPage.module.css";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);
const Loader = lazy(() => import("../../components/Loader/Loader"));
const ErrorMessage = lazy(() =>
  import("../../components/ErrorMessage/ErrorMessage")
);
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetalis, setMovieDetalis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    const getMovieDetalisPage = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetalis(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetalisPage();
  }, [movieId]);

  return (
    <div>
      {movieDetalis !== null && (
        <div>
          <Link className={css.back} to={backLinkRef.current}>
            Go back{" "}
          </Link>
          <section className={css.movieDetalis}>
            <img
              width={200}
              src={
                movieDetalis.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDetalis.poster_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
              alt={movieDetalis.title}
            />
            <ul>
              <li>
                <h2>{movieDetalis.title}</h2>
                <p> User score: {movieDetalis.vote_average}</p>
              </li>
              <li>
                <h3>Overview</h3>
                <p>{movieDetalis.overview}</p>
              </li>
              <li>
                <h3>Genres</h3>
                <p> {movieDetalis.genres.map((genre) => genre.name)}</p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={{ url: "movie/{ movieId }/credits" }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ url: `movie/${movieId}/reviews` }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </section>
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />}></Route>
              <Route path="reviews" element={<MovieReviews />}></Route>
            </Routes>
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
