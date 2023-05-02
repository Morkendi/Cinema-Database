// Declare variables
const movieEl = document.querySelector('#movie-search')
const yearEl = document.querySelector('#year-select')
const searchBtn = document.querySelector('#search-btn')
const statusMsg = document.querySelector('#status-msg')
const searchList = document.querySelector('#search-list')
const eraseBtn = document.querySelector('#erase-btn')

let storedTitles = JSON.parse(localStorage.getItem('Array'));
console.log(storedTitles)

if (!storedTitles) {
    storedTitles = []
}

// Starting conditions
function onStart() {
    statusMsg.style.display = 'none';

    for (let i = 0; i < storedTitles.length; i++) {
        let searchTerm = document.createElement('li');
        searchTerm.innerHTML = storedTitles[i];
        searchList.appendChild(searchTerm);
    }
}

function saveTitle() {
    let addTitle = localStorage.getItem('title');
    storedTitles.push(addTitle);
    localStorage.setItem('Array', JSON.stringify(storedTitles));
    console.log(storedTitles);
}

function fetchData() {
    let movieTitle = movieEl.value;
    let selectedYear = yearEl.value;

    // WHEN the search criteria icnludes a title AND a valid year OR there is only a title
    // THEN stash items in local storage and load the "results.html" document
    if (movieTitle && selectedYear > 1940 || movieTitle && !selectedYear) {
        localStorage.setItem('title', movieTitle);
        saveTitle();
        window.location.assign('results.html' + '?movieTitle='+ movieTitle +'&selectedYear='+ selectedYear);
    // IF the year is lesser than 1940 OR greater than 2023, display error message
    } else if (selectedYear < 1940 || selectedYear > 2023) {
        statusMsg.style.display = 'block'
        statusMsg.textContent = 'Please select a valid year'
    // IF there is NO movie title, display error message
    } else {
        statusMsg.style.display = 'block'
        statusMsg.textContent = 'Please enter a movie title'
    }
}

onStart();
searchBtn.addEventListener('click', fetchData);
eraseBtn.addEventListener('click', function eraseHistory() {
    localStorage.clear();
    document.location.reload();
})