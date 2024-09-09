import { useState } from "react";

function TvOverview({ tvDetails }) {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand((expand) => !expand);
  }

  const overview = expand
    ? tvDetails.overview.slice(0, 200) + "..."
    : tvDetails.overview;

  return (
    <>
      <h3 className="movie-company_title">Overview</h3>
      <div style={{ padding: "0 40px" }}>
        <p style={{ width: "80%" }}>{overview}</p>
        <span className="movie-expand" onClick={() => handleExpand()}>
          {expand ? "Show more" : "Show less"}
        </span>
      </div>
    </>
  );
}

export default TvOverview;
