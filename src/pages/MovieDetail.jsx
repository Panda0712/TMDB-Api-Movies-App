import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MovieStatistics from "../components/MovieStatistics";
import { fetchMovieDetails, fetchMovieVideos } from "../utils/api";
import MovieCompanies from "../components/MovieCompanies";
import MovieVideos from "../components/MovieVideos";
import MovieOverview from "../components/MovieOverview";
import Spinner from "../components/Spinner";

function MovieDetail() {
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieVideos(movieId).then((data) => setMovieVideos(data.results));
    fetchMovieDetails(movieId).then((data) => setMovieDetails(data));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movieId]);

  const memoizedMovieDetails = useMemo(() => movieDetails, [movieDetails]);
  const memoizedMovieVideos = useMemo(() => movieVideos, [movieVideos]);

  if (!memoizedMovieDetails || memoizedMovieVideos?.length <= 0)
    return <Spinner />;

  return (
    <div className="movie-details">
      <img
        className="movie-background"
        src={
          memoizedMovieDetails.backdrop_path
            ? `https://image.tmdb.org/t/p/original${memoizedMovieDetails.backdrop_path}`
            : "https://149366088.v2.pressablecdn.com/wp-content/uploads/2020/02/gnome-336-wallpaper.jpg"
        }
        alt={memoizedMovieDetails.title}
      />
      <MovieStatistics movieDetails={memoizedMovieDetails} />
      <MovieOverview movieDetails={memoizedMovieDetails} />
      <MovieCompanies movieDetails={memoizedMovieDetails} />
      <MovieVideos movieVideos={memoizedMovieVideos} />
    </div>
  );
}

export default MovieDetail;
