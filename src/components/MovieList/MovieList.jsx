import { Link } from "react-router-dom";

const MovieList = ({ movieItems }) => {
  return (
    <div>
      <ul>
        {Array.isArray(movieItems) &&
          movieItems.map((movieItem) => {
            return (
              <li key={movieItem.id}>
                <Link to={"/movies/${movieItem.id}"}>{movieItem.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
