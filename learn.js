//1
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?")
//2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}
//3
let lastFilm = prompt('Один из последних просмотренных фильмов?')
let score = prompt('На сколько вы его оцениваете?')
personalMovieDB.movies[lastFilm] = +score
console.log(personalMovieDB)