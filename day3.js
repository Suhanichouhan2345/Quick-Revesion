const movies = [
  {
    id: 1,
    title: "KGF",
    rating: 9,
    genre: "Action",
    year: 2018
  },
  {
    id: 2,
    title: "3 Idiots",
    rating: 9.2,
    genre: "Comedy",
    year: 2009
  },
  {
    id: 3,
    title: "Dangal",
    rating: 8.3,
    genre: "Drama",
    year: 2016
  },
  {
    id: 4,
    title: "Bahubali",
    rating: 8.1,
    genre: "Action",
    year: 2015
  },
  {
    id: 5,
    title: "Chhichhore",
    rating: 8.3,
    genre: "Comedy",
    year: 2019
  }
];

// 1. Display all movies
function displayMovies() {
  movies.forEach((movie) => {
    console.log(
      `${movie.title} | Rating: ${movie.rating} | ${movie.year}`
    );
  });
}

// 2. Movies with rating 8+
function getTopRatedMovies() {
  return movies.filter((movie) => {
    return movie.rating >= 8;
  });
}

// 3. Get only movie names
function getMovieNames() {
  return movies.map((movie) => {
    return movie.title;
  });
}

// 4. Find movie by ID
function findMovie(id) {
  return movies.find((movie) => {
    return movie.id === id;
  });
}

// 5. Get Action movies
function getActionMovies() {
  return movies.filter((movie) => {
    return movie.genre === "Action";
  });
}

// 6. Calculate average rating
function getAverageRating() {
  const total = movies.reduce((sum, movie) => {
    return sum + movie.rating;
  }, 0);

  return total / movies.length;
}

// 7. Find highest rated movie
function getHighestRatedMovie() {
  return movies.reduce((highest, movie) => {
    return movie.rating > highest.rating
      ? movie
      : highest;
  });
}

// 8. Sort movies by rating
function sortByRating() {
  return [...movies].sort((a, b) => {
    return b.rating - a.rating;
  });
}

// 9. Check if any movie is from 2020+
function hasRecentMovie() {
  return movies.some((movie) => {
    return movie.year >= 2020;
  });
}

// 10. Check if all movies have rating above 7
function allMoviesGood() {
  return movies.every((movie) => {
    return movie.rating > 7;
  });
}


// ================= OUTPUT =================

console.log("===== ALL MOVIES =====");
displayMovies();

console.log("\n===== TOP RATED MOVIES =====");
console.log(getTopRatedMovies());

console.log("\n===== MOVIE NAMES =====");
console.log(getMovieNames());

console.log("\n===== FIND MOVIE =====");
console.log(findMovie(3));

console.log("\n===== ACTION MOVIES =====");
console.log(getActionMovies());

console.log("\n===== AVERAGE RATING =====");
console.log(getAverageRating());

console.log("\n===== HIGHEST RATED =====");
console.log(getHighestRatedMovie());

console.log("\n===== SORTED BY RATING =====");
console.log(sortByRating());

console.log("\n===== RECENT MOVIE EXISTS =====");
console.log(hasRecentMovie());

console.log("\n===== ALL MOVIES ABOVE 7 =====");
console.log(allMoviesGood());