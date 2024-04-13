import { Link, Route, Routes } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  return (
    <div>
      <h1>MovieDetalisPade</h1>
      <nav>
        <Link to="cast"></Link>
        <Link to="reviews"></Link>
      </nav>
      <Routes>
        <Route path="cast" element={<MovieCast />}></Route>
        <Route path="reviews" element={<MovieReviews />}></Route>
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
