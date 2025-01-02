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
    } catch (error) {}
  }
});
