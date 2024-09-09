import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieVideos,
  fetchTVDetails,
  fetchTVVideos,
} from "../utils/api";
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
    fetchTVDetails(tvId).then((data) => {
      if (data.success === false) {
        fetchMovieDetails(tvId).then((data) => setTvDetails(data));
      } else setTvDetails(data);
    });
    fetchTVVideos(tvId).then((data) => {
      if (data.success === false)
        fetchMovieVideos(tvId).then((data) => setTvVideos(data.results));
      else setTvVideos(data.results);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tvId]);

  if (!tvDetails || tvVideos?.length <= 0) return <Spinner />;

  console.log(tvDetails);

  return (
    <div className="movie-details">
      <img
        className="movie-background"
        src={
          tvDetails.backdrop_path
            ? `https://image.tmdb.org/t/p/original${tvDetails.backdrop_path}`
            : "https://149366088.v2.pressablecdn.com/wp-content/uploads/2020/02/gnome-336-wallpaper.jpg"
        }
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
// import React, { useEffect, useState, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import {
//   fetchMovieDetails,
//   fetchMovieVideos,
//   fetchTVDetails,
//   fetchTVVideos,
// } from "../utils/api";
// import TvStatistics from "../components/TvStatistics";
// import TvCompanies from "../components/TvCompanies";
// import TvVideos from "../components/TvVideos";
// import TvOverview from "../components/TvOverview";
// import Spinner from "../components/Spinner";

// function TVDetails() {
//   const [details, setDetails] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { tvId } = useParams();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       try {
//         let detailsData = await fetchTVDetails(tvId);
//         if (!detailsData.success) {
//           detailsData = await fetchMovieDetails(tvId);
//         }
//         setDetails(detailsData);

//         let videosData = await fetchTVVideos(tvId);
//         if (!videosData.success) {
//           videosData = await fetchMovieVideos(tvId);
//         }
//         setVideos(videosData.results);
//       } catch (err) {
//         setError("Failed to fetch details. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDetails();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [tvId]);

//   const memoizedDetails = useMemo(() => details, [details]);
//   const memoizedVideos = useMemo(() => videos, [videos]);

//   if (isLoading) return <Spinner />;
//   if (error) return <div className="error-message">{error}</div>;
//   if (!memoizedDetails || memoizedVideos.length === 0)
//     return <div>No data available</div>;

//   return (
//     <div className="movie-details">
//       <img
//         className="movie-background"
//         src={
//           memoizedDetails.backdrop_path
//             ? `https://image.tmdb.org/t/p/original${memoizedDetails.backdrop_path}`
//             : "https://149366088.v2.pressablecdn.com/wp-content/uploads/2020/02/gnome-336-wallpaper.jpg"
//         }
//         alt={memoizedDetails.title}
//       />
//       <TvStatistics tvDetails={memoizedDetails} />
//       <TvOverview tvDetails={memoizedDetails} />
//       <TvCompanies tvDetails={memoizedDetails} />
//       <TvVideos tvVideos={memoizedVideos} />
//     </div>
//   );
// }

// export default TVDetails;
