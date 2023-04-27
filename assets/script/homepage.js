// Declare variables
const movieEl = document.querySelector('#movie-search')
const yearEl = document.querySelector('#year-select')
const searchBtn = document.querySelector('#search-btn')
const statusMsg = document.querySelector('#status-msg')

function onStart() {
    statusMsg.style.display = 'none';
}

function fetchData() {
    let movieTitle = movieEl.value;
    let selectedYear = yearEl.value;

    if (movieTitle && selectedYear > 1940 || movieTitle && !selectedYear) {
        localStorage.setItem('Title', movieTitle);
        localStorage.setItem('Year', selectedYear);
        window.location.assign('results.html');
    } else if (selectedYear < 1940 || selectedYear > 2023) {
        statusMsg.style.display = 'block'
        statusMsg.textContent = 'Please select a valid year'
    } else {
        statusMsg.style.display = 'block'
        statusMsg.textContent = 'Please enter a movie title'
    }
}

onStart()
searchBtn.addEventListener('click', fetchData)