const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie");
const moviePoster = document.querySelector(".movie-poster");
const movieDetails = document.querySelector(".movie-details");

const inputBox = document.querySelector(".inputBox");

const getMovieInfo = async (movie) => {
    const myAPIKey = "f354af57";
    const url = `https://www.omdbapi.com/?apikey=${myAPIKey}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    ShowMovieData(data)
};

const ShowMovieData = (data) => {
    movieContainer.innerHTML = ""
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;
    const movieElement = document.createElement('div');
    movieElement.classList.add('Element')
    movieElement.innerHTML = `<h1>Title: ${Title}</h1> <p>Rating: ${imdbRating}</p> <p>Actors, Acters: ${Actors}</p> <p>Released: ${Released}</p> <p>Plot: ${Plot}</p> <p>Runtime: ${Runtime}</p>`;
    const movieGenreElement = document.createElement("div")
    movieGenreElement.classList.add('movieGenre')
    Genre.split(",").forEach(element=>{
        const p = document.createElement("p")
        p.innerText = element
        movieGenreElement.appendChild(p)
    })
    // Movie poster
    const moviePosterElement = document.createElement('div');
    moviePosterElement.classList.add('movie-poster')
    moviePosterElement.innerHTML = `<img src="${Poster}"/>`;
    movieContainer.appendChild(moviePosterElement)
    movieElement.appendChild(movieGenreElement)
    movieContainer.appendChild(movieElement);
}



searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if (movieName !== '') {
        getMovieInfo(movieName)
    }
});
