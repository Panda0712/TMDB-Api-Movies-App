import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { capitalizeFirstLetter } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import CategoryItem from "./CategoryItem";

function CategoryList({ title }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        setIsLoading(true);
        let response;
        if (title === "trending")
          response = await fetch(
            "https://api.themoviedb.org/3/trending/movie/day?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US"
          );
        else if (title === "TV")
          response = await fetch(
            "https://api.themoviedb.org/3/trending/tv/day?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US"
          );
        else
          response = await fetch(
            `https://api.themoviedb.org/3/movie/${title}?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US&page=1`
          );
        const data = await response.json();
        setData(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategoryData();
  }, [title]);

  if (isLoading) return null;

  return (
    <div className="category-list">
      <div className="category-listBox">
        <h2>{capitalizeFirstLetter(title.split("_").join(" "))}</h2>
        <p onClick={() => navigate(`/movies/${title.toLowerCase()}`)}>
          See all
        </p>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="category-carousel"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          LargeTV: {
            breakpoint: {
              max: 2500,
              min: 2200,
            },
            items: 8,
            partialVisibilityGutter: 40,
          },
          TV: {
            breakpoint: {
              max: 2200,
              min: 1900,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: {
              max: 1900,
              min: 1600,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          PC: {
            breakpoint: {
              max: 1600,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 600,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 600,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.length > 0 &&
          data.map((movie) => <CategoryItem key={movie.id} movie={movie} />)}
      </Carousel>
    </div>
  );
}

export default CategoryList;
