import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  /////
  // const getMovies = async () => {
  //   const response = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //   );
  //   const json = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };
  ////////
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className={styles.container}>
          <h1>Movie</h1>
          <hr className={styles.hr} />
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
