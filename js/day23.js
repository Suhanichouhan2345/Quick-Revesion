// Movie Management System
// JavaScript Practice - Day 19

let movies = [
    {
        id: 1,
        title: "KGF Chapter 2",
        language: "Hindi",
        genre: "Action",
        rating: 9.3,
        releaseYear: 2022,
        budget: 100,
        boxOffice: 1200
    },
    {
        id: 2,
        title: "3 Idiots",
        language: "Hindi",
        genre: "Comedy",
        rating: 9.0,
        releaseYear: 2009,
        budget: 50,
        boxOffice: 460
    },
    {
        id: 3,
        title: "RRR",
        language: "Telugu",
        genre: "Action",
        rating: 8.8,
        releaseYear: 2022,
        budget: 550,
        boxOffice: 1200
    },
    {
        id: 4,
        title: "Dangal",
        language: "Hindi",
        genre: "Sports",
        rating: 8.9,
        releaseYear: 2016,
        budget: 70,
        boxOffice: 2024
    },
    {
        id: 5,
        title: "Drishyam",
        language: "Hindi",
        genre: "Thriller",
        rating: 8.5,
        releaseYear: 2015,
        budget: 5,
        boxOffice: 110
    },
    {
        id: 6,
        title: "Bahubali 2",
        language: "Telugu",
        genre: "Action",
        rating: 8.2,
        releaseYear: 2017,
        budget: 250,
        boxOffice: 1810
    },
    {
        id: 7,
        title: "Interstellar",
        language: "English",
        genre: "Sci-Fi",
        rating: 8.7,
        releaseYear: 2014,
        budget: 165,
        boxOffice: 731
    },
    {
        id: 8,
        title: "Avengers Endgame",
        language: "English",
        genre: "Action",
        rating: 8.4,
        releaseYear: 2019,
        budget: 356,
        boxOffice: 2799
    }
];

// ------------------------------------------
// 1. Display All Movies
// ------------------------------------------

function displayMovies() {

    console.log("\n========== ALL MOVIES ==========");

    movies.forEach((movie) => {

        console.log(
            `${movie.id}. ${movie.title} | ${movie.genre} | Rating: ${movie.rating}`
        );

    });
}

displayMovies();


// ------------------------------------------
// 2. Find Movie By ID
// ------------------------------------------

function findMovie(id) {

    const movie = movies.find((movie) => {

        return movie.id === id;

    });

    if (!movie) {

        console.log("Movie not found");
        return;

    }

    console.log("\n========== MOVIE FOUND ==========");
    console.log(movie);
}

findMovie(3);


// ------------------------------------------
// 3. Filter Movies By Genre
// ------------------------------------------

function getMoviesByGenre(genre) {

    const result = movies.filter((movie) => {

        return movie.genre.toLowerCase() ===
            genre.toLowerCase();

    });

    console.log(`\nMovies in ${genre}:`);
    console.log(result);
}

getMoviesByGenre("Action");


// ------------------------------------------
// 4. Filter Movies By Language
// ------------------------------------------

function getMoviesByLanguage(language) {

    const result = movies.filter((movie) => {

        return movie.language.toLowerCase() ===
            language.toLowerCase();

    });

    console.log(`\nMovies in ${language}:`);
    console.log(result);
}

getMoviesByLanguage("Hindi");


// ------------------------------------------
// 5. Movies With Rating Above 8.5
// ------------------------------------------

const topRatedMovies = movies.filter((movie) => {

    return movie.rating >= 8.5;

});

console.log("\n========== TOP RATED MOVIES ==========");
console.log(topRatedMovies);


// ------------------------------------------
// 6. Find Highest Rated Movie
// ------------------------------------------

const highestRatedMovie = movies.reduce((highest, movie) => {

    return movie.rating > highest.rating
        ? movie
        : highest;

});

console.log("\n========== HIGHEST RATED MOVIE ==========");
console.log(highestRatedMovie);


// ------------------------------------------
// 7. Find Lowest Rated Movie
// ------------------------------------------

const lowestRatedMovie = movies.reduce((lowest, movie) => {

    return movie.rating < lowest.rating
        ? movie
        : lowest;

});

console.log("\n========== LOWEST RATED MOVIE ==========");
console.log(lowestRatedMovie);


// ------------------------------------------
// 8. Sort Movies By Rating
// ------------------------------------------

const sortedByRating = [...movies].sort((a, b) => {

    return b.rating - a.rating;

});

console.log("\n========== SORTED BY RATING ==========");
console.log(sortedByRating);


// ------------------------------------------
// 9. Sort Movies By Release Year
// ------------------------------------------

const sortedByYear = [...movies].sort((a, b) => {

    return a.releaseYear - b.releaseYear;

});

console.log("\n========== OLDEST TO NEWEST ==========");
console.log(sortedByYear);


// ------------------------------------------
// 10. Get Only Movie Names
// ------------------------------------------

const movieTitles = movies.map((movie) => {

    return movie.title;

});

console.log("\n========== MOVIE TITLES ==========");
console.log(movieTitles);


// ------------------------------------------
// 11. Search Movie
// ------------------------------------------

function searchMovie(keyword) {

    const result = movies.filter((movie) => {

        return movie.title
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    console.log("\n========== SEARCH RESULT ==========");
    console.log(result);

}

searchMovie("kgf");


// ------------------------------------------
// 12. Movies Released After 2020
// ------------------------------------------

const newMovies = movies.filter((movie) => {

    return movie.releaseYear > 2020;

});

console.log("\n========== NEW MOVIES ==========");
console.log(newMovies);


// ------------------------------------------
// 13. Calculate Total Budget
// ------------------------------------------

const totalBudget = movies.reduce((total, movie) => {

    return total + movie.budget;

}, 0);

console.log("\nTotal Budget:", totalBudget, "Crore");


// ------------------------------------------
// 14. Calculate Total Box Office
// ------------------------------------------

const totalBoxOffice = movies.reduce((total, movie) => {

    return total + movie.boxOffice;

}, 0);

console.log(
    "Total Box Office:",
    totalBoxOffice,
    "Crore"
);


// ------------------------------------------
// 15. Most Successful Movie
// ------------------------------------------

const highestBoxOfficeMovie = movies.reduce((highest, movie) => {

    return movie.boxOffice > highest.boxOffice
        ? movie
        : highest;

});

console.log("\n========== HIGHEST BOX OFFICE ==========");
console.log(highestBoxOfficeMovie);


// ------------------------------------------
// 16. Calculate Profit
// ------------------------------------------

const moviesWithProfit = movies.map((movie) => {

    return {
        ...movie,
        profit: movie.boxOffice - movie.budget
    };

});

console.log("\n========== MOVIES WITH PROFIT ==========");
console.log(moviesWithProfit);


// ------------------------------------------
// 17. Most Profitable Movie
// ------------------------------------------

const mostProfitableMovie = moviesWithProfit.reduce(
    (highest, movie) => {

        return movie.profit > highest.profit
            ? movie
            : highest;

    }
);

console.log("\n========== MOST PROFITABLE ==========");
console.log(mostProfitableMovie);


// ------------------------------------------
// 18. Add New Movie
// ------------------------------------------

function addMovie(newMovie) {

    movies.push(newMovie);

    console.log("\nMovie Added Successfully");

}

addMovie({
    id: 9,
    title: "Pushpa 2",
    language: "Telugu",
    genre: "Action",
    rating: 8.0,
    releaseYear: 2024,
    budget: 500,
    boxOffice: 1700
});


// ------------------------------------------
// 19. Update Movie Rating
// ------------------------------------------

function updateRating(id, newRating) {

    const movie = movies.find((movie) => {

        return movie.id === id;

    });

    if (!movie) {

        console.log("Movie not found");
        return;

    }

    movie.rating = newRating;

    console.log("Rating updated successfully");

}

updateRating(5, 8.8);


// ------------------------------------------
// 20. Update Movie Genre
// ------------------------------------------

function updateGenre(id, newGenre) {

    const movie = movies.find((movie) => {

        return movie.id === id;

    });

    if (!movie) {

        console.log("Movie not found");
        return;

    }

    movie.genre = newGenre;

    console.log("Genre updated successfully");

}

updateGenre(2, "Drama");


// ------------------------------------------
// 21. Delete Movie
// ------------------------------------------

function deleteMovie(id) {

    const index = movies.findIndex((movie) => {

        return movie.id === id;

    });

    if (index === -1) {

        console.log("Movie not found");
        return;

    }

    movies.splice(index, 1);

    console.log("Movie deleted successfully");

}

deleteMovie(9);


// ------------------------------------------
// 22. Check Any Movie Rating Above 9
// ------------------------------------------

const ratingCheck = movies.some((movie) => {

    return movie.rating > 9;

});

console.log(
    "\nAny movie rating above 9:",
    ratingCheck
);


// ------------------------------------------
// 23. Check All Movies Have Rating
// ------------------------------------------

const allRated = movies.every((movie) => {

    return movie.rating > 0;

});

console.log(
    "All movies have rating:",
    allRated
);


// ------------------------------------------
// 24. Genre Wise Movie Count
// ------------------------------------------

const genreCount = movies.reduce((result, movie) => {

    if (!result[movie.genre]) {

        result[movie.genre] = 0;

    }

    result[movie.genre]++;

    return result;

}, {});

console.log("\n========== GENRE COUNT ==========");
console.log(genreCount);


// ------------------------------------------
// 25. Language Wise Movie Count
// ------------------------------------------

const languageCount = movies.reduce((result, movie) => {

    if (!result[movie.language]) {

        result[movie.language] = 0;

    }

    result[movie.language]++;

    return result;

}, {});

console.log("\n========== LANGUAGE COUNT ==========");
console.log(languageCount);


// ------------------------------------------
// 26. Average Rating
// ------------------------------------------

const totalRating = movies.reduce((total, movie) => {

    return total + movie.rating;

}, 0);

const averageRating = totalRating / movies.length;

console.log("\nAverage Rating:", averageRating.toFixed(2));


// ------------------------------------------
// 27. Movies Between 2015 and 2022
// ------------------------------------------

const selectedMovies = movies.filter((movie) => {

    return movie.releaseYear >= 2015 &&
           movie.releaseYear <= 2022;

});

console.log("\n========== 2015 - 2022 MOVIES ==========");
console.log(selectedMovies);


// ------------------------------------------
// 28. Final Movie Count
// ------------------------------------------

console.log("\nTotal Movies:", movies.length);


// ------------------------------------------
// 29. Final Movie Data
// ------------------------------------------

console.log("\n========== FINAL MOVIE DATA ==========");
console.log(movies);