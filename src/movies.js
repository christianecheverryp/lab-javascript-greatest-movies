const movies = require('../src/data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const allDirectors = arr.map((eachMovie) => {
    return eachMovie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const eachMovieDrama = arr.filter((eachMovieDrama) => {
    if (
      eachMovieDrama.director === 'Steven Spielberg' &&
      eachMovieDrama.genre.includes('Drama')
    ) {
      return true;
    }
  });
  return eachMovieDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let totalScore = arr.reduce((accumulator, elem) => {
    return accumulator + elem.score;
  }, 0);
  if (totalScore === 0) {
    return 0;
  } else {
    let avgScore = totalScore / arr.length;

    return Number(avgScore.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramas = arr.filter((eachDrama) => {
    if (eachDrama.genre.includes('Drama')) {
      return true;
    }
    return false;
  });
  const dramaSum = dramas.reduce((accumulator, elem) => {
    return accumulator + elem.score;
  }, 0);
  if (dramaSum === 0) {
    return 0;
  } else {
    let avgDrama = dramaSum / dramas.length;
    return Number(avgDrama.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const sortedMovies = arr.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });

  const twentyMovies = sortedMovies.map((movie) =>{
    return movie.title
  })
  return twentyMovies.slice(0,20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
