export async function fetchGenres() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en"
  );
  const data = await response.json();
  return data.genres;
}

export async function fetchMoviesByGenre(page, id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=2ce6d34aa14a8bf69481293d0b8f9725&with_genres=${id}&page=${page}&language=en-US`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchMoviesHomePage(page, topic) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${topic}?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchTrending(page, topic) {
  if (topic === "trending") topic = "movie";
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/${topic}/day?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchMovieVideos(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchMovieDetails(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchTVDetails(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchTVVideos(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=2ce6d34aa14a8bf69481293d0b8f9725&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchSearchQuery(searchTerm, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=2ce6d34aa14a8bf69481293d0b8f9725&page=${page}`
  );
  const data = await response.json();
  return data;
}
