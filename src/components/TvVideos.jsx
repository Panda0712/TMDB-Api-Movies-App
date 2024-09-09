import ReactPlayer from "react-player";

function TvVideos({ tvVideos }) {
  return (
    <>
      <h3 className="movie-company_title">Explore Videos</h3>
      <div className="movie-videos">
        {!tvVideos && <p>There's no video detected</p>}
        {tvVideos?.length > 0 &&
          tvVideos.map((video) => (
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

export default TvVideos;
