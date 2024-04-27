import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getMovieReviews } from "../../Api/Api";

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const MovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    MovieReviews();
  }, [movieId]);
  return (
    <div>
      <h2>Reviews</h2>
      {reviews && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map((review) => (
            <li key={review.id}>
              <h3> Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don&aops;t have any reviews for this movie</p>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieReviews;
