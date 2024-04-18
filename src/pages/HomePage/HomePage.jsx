import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { trendingFilms } from "../../Api/Api";

const HomePage = () => {
  const [movieItems, setMovieItems] = useState(null);

  useEffect(() => {
    async function getTrending() {
      const { data } = await trendingFilms();
      console.log("data", data);
      setMovieItems(data.results);
    }

    getTrending();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <MovieList movieItems={movieItems} />
    </div>
  );
};

export default HomePage;
