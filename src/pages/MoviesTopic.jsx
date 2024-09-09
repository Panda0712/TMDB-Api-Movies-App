import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMoviesByGenre,
  fetchMoviesHomePage,
  fetchTrending,
} from "../utils/api";
import ReactPaginate from "react-paginate";
import CategoryItem from "../components/CategoryItem";
import CarouselReuse from "../components/CarouselReuse";
import Spinner from "../components/Spinner";

function MoviesTopic() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { moviesTopic } = useParams();

  useEffect(() => {
    if (
      !Number(moviesTopic) &&
      moviesTopic !== "trending" &&
      moviesTopic.toLowerCase() !== "tv"
    )
      fetchMoviesHomePage(page, moviesTopic).then((data) => setData(data));
    else if (moviesTopic === "trending" || moviesTopic.toLowerCase() === "tv")
      fetchTrending(page, moviesTopic).then((data) => setData(data));
    else fetchMoviesByGenre(page, moviesTopic).then((data) => setData(data));
  }, [page, moviesTopic]);

  function handlePageClick(event) {
    setPage(+event.selected + 1);
    window.scrollTo({ top: "600", behavior: "smooth" });
  }

  if (data?.length <= 0) return <Spinner />;

  return (
    <div className="movies-topic">
      <CarouselReuse movies={data} />
      <ul className="movies-list">
        {data?.length > 0 &&
          data.map((movie) => (
            <li key={movie.id} className="movies-item">
              <CategoryItem movie={movie} />
            </li>
          ))}
      </ul>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={50}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default MoviesTopic;
