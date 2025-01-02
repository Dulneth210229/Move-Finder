//http://www.omdbapi.com/?apikey=2ecc7029&s
//http://www.omdbapi.com/?apikey=2ecc7029&s=batman

document.addEventListener("DOMContentLoaded", function () {
  const movieForm = document.getElementById("movieForm");
  const movieResult = document.getElementById("movieResults");

  movieForm.addEventListener("submit", (e) => {
    const movieName = document.getElementById("movieInput").value;
    //prevent the browser default
    e.preventDefault();
    searchMovies(movieName);
  });

  //search for movies
  async function searchMovies(movieName) {
    console.log(movieName);

    try {
      //loading
      movieResult.innerHTML = '<div class="loading">Searching movies...</div>';
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=2ecc7029&s=${movieName}`
      );
      const data = await response.json();
      console.log(data);

      if (data.Response === "False") {
        throw new Error(data.Error || "No movies found");
      }

      displayMovies(data.Search);
    } catch (error) {
      movieResult.innerHTML = `<div class="error-message">"Error Searching movies. Please try again...."</div>`;
    }
  }

  //Display all the movies
  function displayMovies(movies) {
    movieResults.innerHTML = `
              <div class="movies-grid">
                  ${movies
                    .map(
                      (movie) => `
                      <div class="movie-card">
                          <img 
                              src="${
                                movie.Poster !== "N/A"
                                  ? movie.Poster
                                  : "https://via.placeholder.com/300x450?text=No+Poster"
                              }" 
                              alt="${movie.Title}"
                              class="movie-poster"
                             
                          >
                          <div class="movie-info">
                              <h3 class="movie-title">${movie.Title}</h3>
                              <div class="movie-year">${movie.Year}</div>
                          </div>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          `;
  }
});
