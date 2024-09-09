import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import MoviesTopic from "./pages/MoviesTopic";
import SearchTerm from "./pages/SearchTerm";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import TVDetails from "./pages/TVDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/tv/:tvId" element={<TVDetails />} />
        <Route path="/movies/:moviesTopic" element={<MoviesTopic />} />
        <Route path="/search/:searchTerm" element={<SearchTerm />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
