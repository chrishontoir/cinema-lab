const Cinema = function (films = []) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.filmFindByGenre = function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

Cinema.prototype.filmFindByTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title;
  });
};

Cinema.prototype.filmFindByYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};



module.exports = Cinema;
