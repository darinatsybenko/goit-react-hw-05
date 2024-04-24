import { Link, Route, Routes, useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../Api/Api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetalis, setMovieDetalis] = useState(null);

  useEffect(() => {
    const getMovieDetalisPage = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetalis(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetalisPage();
  }, [movieId]);

  return (
    <div>
      {movieDetalis !== null && (
        <div>
          <section>
            <img src="" alt="" />
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
                <p>
                  {" "}
                  {movieDetalis.genres.map((genre) => genre.name.join(", "))}
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={{ url: `movie/${movieId}/credits` }}>
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
          <Routes>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReviews />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
