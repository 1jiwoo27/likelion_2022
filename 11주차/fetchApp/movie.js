const APIKEY = "268cea83be92b4ca1b7f3b889db34c41";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};

const nowPlaying = document.getElementById("nowPlaying");
const nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1";
fetch(nowPlayingURL, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            nowPlaying.appendChild(movie);
        })
    });

const popular = document.getElementById("popular");
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY+"&language=en-US&page=1";
fetch(popularURL, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            popular.appendChild(movie);
        })
    });

const topRated = document.getElementById("topRated");
const topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY+"&language=en-US&page=1";
fetch(topRatedURL, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            topRated.appendChild(movie);
        })
    });

const upcoming = document.getElementById("upcoming");
const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key="+APIKEY+"&language=en-US&page=1";
fetch(upcomingURL, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            let movie = document.createElement("li");
            let movieDiv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★ " + element.vote_average;

            movieDiv.appendChild(backdrop);
            movieDiv.appendChild(title);
            movieDiv.appendChild(rate);
            movie.appendChild(movieDiv);
            upcoming.appendChild(movie);
        })
    });