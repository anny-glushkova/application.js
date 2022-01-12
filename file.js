const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const perconalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

perconalMovieDB.movies[a] = b;
perconalMovieDB.movies[c] = d;

console.log(perconalMovieDB);
