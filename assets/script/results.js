// Declare variables
// HTML Elements
const posterEl = document.querySelector('#poster');
const titleEl = document.querySelector('#movie-title');
const plotEl = document.querySelector('#plot');
const ratingEl = document.querySelector('#ratings');
const reviewEl = document.querySelector('#reviews');
const posterMsg = document.querySelector('#poster-msg')

// Retrieve query parameters from search URL
let queryParams = new URLSearchParams(location.search)
// Movie Title
let movieTitle = queryParams.get('movieTitle');
// Release Year
let movieYear = queryParams.get('selectedYear');

function onStart() {
    posterMsg.style.display = 'none';
}

function getParam(title, year) {
// OMBD Key
const ombdKey = '3b46eb7c';
let searchURL = 'https://www.omdbapi.com/?t='+ title + '&y='+ year +'&plot=full&apikey=' + ombdKey;

fetch(searchURL)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                if (data.Response === 'True') {
                    titleEl.textContent = data.Title;
                    plotEl.textContent = data.Plot;
                    ratingEl.textContent = data.Ratings[1].Value;
                // Save IMBD ID for poster search
                    let imbdID = data.imdbID;
                    fetchPoster(imbdID)
                } else {
                    window.location.assign('404.html');
                }
            })
        }
    }) 
}

function fetchPoster(ID) {
// MyAPIFilms Key
    // const posterKey = 'df143f9c-c9ae-486f-8b6e-17c5703b665f';
    let searchURL = 'https://www.myapifilms.com/imdb/image/'+ ID +'?token='+ posterKey;

    fetch(searchURL)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                let imageLink = data.data.link;
                let posterLink = 'https://www.myapifilms.com/imdb/image/poster/' + imageLink +'?token='+ posterKey;
                console.log(posterLink);
                let imgSrc = document.querySelector('#poster');
                imgSrc.setAttribute('src', posterLink);
            })
        } else {
            posterEl.style.display = 'none';
            posterMsg.style.display = 'block';
        }
    }) 
}

getParam(movieTitle, movieYear);
onStart();
