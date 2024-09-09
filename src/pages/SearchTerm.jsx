import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchQuery } from "../utils/api";
import CategoryItem from "../components/CategoryItem";
import ReactPaginate from "react-paginate";
import Spinner from "../components/Spinner";

function SearchTerm() {
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const { searchTerm } = useParams();
  const [searchQuery, setSearchQuery] = useState(searchTerm || "");

  if (searchQuery !== searchTerm) {
    setPage(1);
    setSearchQuery(searchTerm);
  }

  useEffect(() => {
    fetchSearchQuery(searchTerm, page).then((data) => {
      setSearchData(data.results);
      setTotalPage(data.total_pages);
    });
  }, [searchTerm, page]);

  const memoizedSearchData = useMemo(() => searchData, [searchData]);

  function handlePageClick(event) {
    setPage(+event.selected + 1);
    window.scrollTo({ top: "0", behavior: "smooth" });
  }

  if (memoizedSearchData?.length <= 0) return <Spinner />;

  return (
    <div className="movies-topic">
      <ul className="movies-list">
        {memoizedSearchData.length > 0 &&
          memoizedSearchData.map((movie) => (
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
        pageCount={totalPage}
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

export default SearchTerm;
