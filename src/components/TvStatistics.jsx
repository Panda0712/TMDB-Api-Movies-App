import { formatRevenue } from "../utils/helpers";

function TvStatistics({ tvDetails }) {
  return (
    <div className="movie-box">
      <img
        src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
        alt={tvDetails.name}
      />
      <div className="movie-wrapper">
        <h3>{tvDetails.name}</h3>
        <div className="movie-statistics">
          <ul>
            <li>
              <i class="fa-solid fa-calendar-days"></i>
              <span>{tvDetails.first_air_date}</span>
            </li>
            <li>
              <i class="fa-solid fa-gauge"></i>
              <span>{tvDetails.vote_average}</span>
            </li>
            <li>
              <i class="fa-solid fa-check-to-slot"></i>
              <span>{tvDetails.vote_count}</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="movie-paragraph">
            <i class="fa-solid fa-film"></i>
            <span>Episodes: {tvDetails.number_of_episodes}</span>
          </p>
          <p className="movie-paragraph">
            <i class="fa-solid fa-clapperboard"></i>
            <span>Creator: {tvDetails.created_by?.[0]?.name}</span>
          </p>
          <p className="movie-paragraph">
            <i class="fa-solid fa-fire"></i>
            <span>Popularity: {formatRevenue(tvDetails.popularity)}</span>
          </p>
          <p className="movie-paragraph">
            <i class="fa-solid fa-earth-americas"></i>
            <span>Country: {tvDetails.origin_country?.[0]}</span>
          </p>
          <p className="movie-paragraph">
            <i class="fa-solid fa-icons"></i>
            <span>
              Genres: {tvDetails.genres?.map((genre) => genre.name).join(", ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TvStatistics;
