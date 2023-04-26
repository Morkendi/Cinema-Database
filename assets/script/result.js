// Declare variables
// API Key = 3b46eb7c, use at the end of every data fetch
const apiKey = '3b46eb7c';
var searchURL = 'http://www.omdbapi.com/?i='+  + '&apikey=' + apiKey;

function getParam() {
var searchQuery = 'The dark knight rises'
var urlParameter = searchQuery.replace(/ /g, '+');
console.log(urlParameter)
}

getParam()
// NOTE: Save the string in Local Storage and retrieve in other HTML