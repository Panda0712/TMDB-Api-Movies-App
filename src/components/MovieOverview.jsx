import { useState } from "react";

function MovieOverview({ movieDetails }) {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand((expand) => !expand);
  }

  const overview = expand
    ? movieDetails.overview.slice(0, 200) + "..."
    : movieDetails.overview;

  return (
    <>
      <h3 className="movie-company_title">Overview</h3>
      <div style={{ padding: "0 40px" }}>
        <p>{overview}</p>
        <span className="movie-expand" onClick={() => handleExpand()}>
          {expand ? "Show more" : "Show less"}
        </span>
      </div>
    </>
  );
}

export default MovieOverview;
