import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const x = useParams();
  //   console.log(x);

  const { id } = useParams();
  //   console.log(id);

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getDetail();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <DetailMovie
            bgImgOri={movies.background_image_original}
            title={movies.title}
            coverImg={movies.medium_cover_image}
            rating={movies.rating}
            year={movies.year}
            like_count={movies.like_count}
            descrip_full={movies.description_full}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
