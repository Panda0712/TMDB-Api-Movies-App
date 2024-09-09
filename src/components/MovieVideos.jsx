import ReactPlayer from "react-player";

function MovieVideos({ movieVideos }) {
  return (
    <>
      <h3 className="movie-company_title">Explore Videos</h3>
      <div className="movie-videos">
        {!movieVideos && <p>There's no video detected</p>}
        {movieVideos?.length > 0 &&
          movieVideos.map((video) => (
            <div key={video.key}>
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${video.key}`}
                controls
              ></ReactPlayer>
              <p>{video.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieVideos;
