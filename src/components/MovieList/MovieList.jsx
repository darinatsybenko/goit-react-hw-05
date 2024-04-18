import { Link } from "react-router-dom";

const MovieList = (movieItems) => {
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

// {
//     "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
//     "id": 693134,
//     "original_title": "Dune: Part Two",
//     "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
//     "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
//     "media_type": "movie",
//     "adult": false,
//     "title": "Dune: Part Two",
//     "original_language": "en",
//     "genre_ids": [
//       878,
//       12
//     ],
//     "popularity": 3437.313,
//     "release_date": "2024-02-27",
//     "video": false,
//     "vote_average": 8.305,
//     "vote_count": 2920
//   },
