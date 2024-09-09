import HomeCarousel from "../components/Carousel";
import CategoryList from "../components/CategoryList";

const categoryList = [
  "now_playing",
  "trending",
  "popular",
  "top_rated",
  "upcoming",
  "TV",
];

function Home() {
  return (
    <div>
      <HomeCarousel />
      {categoryList.map((category) => (
        <CategoryList key={category} title={category} />
      ))}
    </div>
  );
}

export default Home;
