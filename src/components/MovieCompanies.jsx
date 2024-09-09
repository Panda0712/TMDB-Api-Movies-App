function MovieCompanies({ movieDetails }) {
  return (
    <>
      <h3 className="movie-company_title">Production Company</h3>
      <div className="movie-company">
        {!movieDetails.production_companies && (
          <p>There's no company detected</p>
        )}
        {movieDetails.production_companies?.map((company) => (
          <div key={company.id} className="movie-company_item">
            <img
              src={
                company.logo_path
                  ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                  : "https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg"
              }
              alt={company.name}
            />
            <h4>{company.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCompanies;
