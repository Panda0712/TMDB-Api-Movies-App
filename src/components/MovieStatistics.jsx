import { formatRevenue } from "../utils/helpers";

function MovieStatistics({ movieDetails }) {
  return (
    <div className="movie-box">
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            : "https://w0.peakpx.com/wallpaper/247/888/HD-wallpaper-oneplus-5t-default-oneplus-5t.jpg"
        }
        alt={movieDetails.title}
      />
      <div className="movie-wrapper">
        <h3>{movieDetails.title}</h3>
        <div className="movie-statistics">
          <ul>
            <li>
              <i className="fa-solid fa-calendar-days"></i>
              <span>{movieDetails.release_date}</span>
            </li>
            <li>
              <i className="fa-solid fa-gauge"></i>
              <span>{movieDetails.vote_average}</span>
            </li>
            <li>
              <i className="fa-solid fa-check-to-slot"></i>
              <span>{movieDetails.vote_count}</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="movie-paragraph">
            <i className="fa-solid fa-clock"></i>
            <span>Runtime: {movieDetails.runtime} mins</span>
          </p>
          <p className="movie-paragraph">
            <i className="fa-solid fa-dollar-sign"></i>
            <span>Revenue: {formatRevenue(movieDetails.revenue)}</span>
          </p>
          <p className="movie-paragraph">
            <i className="fa-solid fa-fire"></i>
            <span>Popularity: {formatRevenue(movieDetails.popularity)}</span>
          </p>
          <p className="movie-paragraph">
            <i className="fa-solid fa-earth-americas"></i>
            <span>Country: {movieDetails.origin_country?.[0]}</span>
          </p>
          <p className="movie-paragraph">
            <i className="fa-solid fa-icons"></i>
            <span>
              Genres:{" "}
              {movieDetails.genres?.map((genre) => genre.name).join(", ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieStatistics;
