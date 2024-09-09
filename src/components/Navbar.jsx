import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchGenres } from "../utils/api";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genres, setGenres] = useState([]);
  const [expandValue, setExpandValue] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data));
  }, []);

  function handleSearch() {
    if (!searchTerm) return;
    navigate(`/search/${searchTerm}`);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/024/212/245/small/ai-generated-sticker-anime-girl-purple-hair-png.png"
          alt="logo"
        />
      </Link>
      <ul className="navbar-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        {genres.slice(0, 4).map((genre) => (
          <li key={genre.id}>
            <NavLink
              to={`/movies/${genre.id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {genre.name}
            </NavLink>
          </li>
        ))}
        {expandValue && (
          <li>
            <NavLink
              to={`/movies/${expandValue.id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {expandValue.name}
            </NavLink>
          </li>
        )}
        <li className="navbar-more">
          <Link>
            <span>More</span>
            <i className="fa-solid fa-caret-down"></i>
          </Link>
          <ul className="navbar-expand">
            {genres.slice(4, genres.length).map((genre) => (
              <li
                onClick={() =>
                  setExpandValue({ name: genre.name, id: genre.id })
                }
                key={genre.id}
              >
                <NavLink
                  to={`/movies/${genre.id}`}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {genre.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
        />
        <div className="navbar-icon" onClick={() => handleSearch()}>
          <i className="fa-brands fa-searchengin"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
