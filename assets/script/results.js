// Declare variables
// HTML Elements
const posterEl = document.querySelector('#poster');
const titleEl = document.querySelector('#movie-title');
const plotEl = document.querySelector('#plot');
const ratingEl = document.querySelector('#ratings');
const reviewEl = document.querySelector('#reviews');


// User input
let movieTitle = localStorage.getItem('Title')
let movieYear = localStorage.getItem('Year')

// API call endpoint
// ombdKey
const ombdKey = '3b46eb7c';

function getParam() {
var titleParam = movieTitle.replace(/ /g, '+');
let searchURL = 'https://www.omdbapi.com/?t='+ titleParam + '&y='+ movieYear +'&plot=full&apikey=' + ombdKey;

fetch(searchURL)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                titleEl.textContent = data.Title;
                plotEl.textContent = data.Plot
                ratingEl.textContent = data.Metascore + '/100'
            })
        }
    }) 
}

getParam()
// NOTE: Save the string in Local Storage and retrieve in other HTML