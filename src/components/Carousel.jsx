import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import "react-multi-carousel/lib/styles.css";
import CarouselReuse from "./CarouselReuse";

function HomeCarousel() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchCarouselMovies() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCarouselMovies();
  }, []);

  if (isLoading) return <Spinner />;

  return <CarouselReuse movies={movies} />;
}

export default HomeCarousel;
