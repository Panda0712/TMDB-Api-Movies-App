import Carousel from "react-multi-carousel";
import Button from "./Button";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

function CarouselReuse({ movies, onClick }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/movie/${id}`);
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  if (movies?.length <= 0) return <Spinner />;

  return (
    <div className="carousel">
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.id} className="carousel-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="carousel-detail">
                <ul>
                  <li>
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>{movie.release_date || movie.first_air_date}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-gauge"></i>
                    <span>{movie.vote_average}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-to-slot"></i>
                    <span>{movie.vote_count}</span>
                  </li>
                </ul>
                <Button
                  onClick={() => handleClick(movie.id)}
                  icon="true"
                  className="carousel-btn"
                >
                  Watch Now
                </Button>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default CarouselReuse;
