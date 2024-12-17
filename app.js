
let api = 'https://omdbapi.com/?apikey=df1e41c4&t='

let title = document.querySelector('#title')
let genre = document.querySelector('#genre')
let desc = document.querySelector('#desc')
let actor = document.querySelector('#actor')
let director = document.querySelector('#director')
let awards = document.querySelector('#awards')
let boxoffice = document.querySelector('#collection')
let language = document.querySelector('#language')
let ratings = document.querySelector('#rating')
let poster = document.querySelector('#poster')
let container = document.querySelector('#container')
let error = document.querySelector('#error')
let suggestion = document.querySelector('#sugg')
container.classList.add('hidden');
function search(){
let movieInput = document.querySelector('#movie-name')
let query = api + movieInput.value;
fetch(query).then(data =>data.json()).then(data =>{

     error.innerText = "";
    if(data.Error === "Movie not found!"){
    error.innerText = 'Movie Not Found !';
    }

    else{
        container.classList.remove('hidden')
        title.innerText = data.Title;
        genre.innerText = data.Genre;
        desc.innerText = data.Plot;
        actor.innerText = data.Actors;
        director.innerText = data.Director;
        awards.innerText = data.Awards;
        boxoffice.innerText = data.BoxOffice;
        language.innerText = data.Language;
        ratings.innerText = data.imdbRating;
        poster.src = data.Poster;
        if(data.imdbRating > 7){
            suggestion.innerText = 'Must Watch';
        }
        else if(data.imdbRating > 5 && data.imdbRating <= 7){
            suggestion.innerText = 'Can Watch'
        }
        else if(data.imdbRating <= 5){
            suggestion.innerText = 'Unsuggested'
        }
        else if(data.imdbRating == "N/A"){
            suggestion.innerText = 'Too Old'
        }
    }    
})
}
