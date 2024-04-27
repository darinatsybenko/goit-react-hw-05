import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movieItems }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {Array.isArray(movieItems) &&
          movieItems.map((movieItem) => {
            return (
              <li key={movieItem.id}>
                <Link state={location} to={`/movies/${movieItem.id}`}>
                  {movieItem.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
