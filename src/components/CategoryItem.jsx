import { useNavigate } from "react-router-dom";

function CategoryItem({ movie, carousel }) {
  const navigate = useNavigate();

  return (
    <div
      key={movie.id}
      className={`category-item ${carousel === "true" ? "carousel" : ""}`}
    >
      <div
        className="category-wrapper"
        onClick={() =>
          movie?.media_type
            ? navigate(`/tv/${movie.id}`)
            : navigate(`/movie/${movie.id}`)
        }
      >
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg"
          }
          alt={movie.name}
        />
        <div>
          <i className="fa-solid fa-play category-playIcon"></i>
        </div>
      </div>
      <h3>{movie.title || movie.name}</h3>
    </div>
  );
}

export default CategoryItem;
