import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTVDetails, fetchTVVideos } from "../utils/api";
import TvStatistics from "../components/TvStatistics";
import TvCompanies from "../components/TvCompanies";
import TvVideos from "../components/TvVideos";
import TvOverview from "../components/TvOverview";
import Spinner from "../components/Spinner";

function TVDetails() {
  const [tvDetails, setTvDetails] = useState({});
  const [tvVideos, setTvVideos] = useState([]);

  const { tvId } = useParams();

  useEffect(() => {
    fetchTVDetails(tvId).then((data) => setTvDetails(data));
    fetchTVVideos(tvId).then((data) => setTvVideos(data.results));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tvId]);

  if (!tvDetails || tvVideos?.length <= 0) return <Spinner />;

  return (
    <div className="movie-details">
      <img
        className="movie-background"
        src={`https://image.tmdb.org/t/p/original${tvDetails.backdrop_path}`}
        alt={tvDetails.title}
      />
      <TvStatistics tvDetails={tvDetails} />
      <TvOverview tvDetails={tvDetails} />
      <TvCompanies tvDetails={tvDetails} />
      <TvVideos tvVideos={tvVideos} />
    </div>
  );
}

export default TVDetails;
