let movies = [
  {
    id: 1,
    name: "user1",
    score: 3.2
  },
  {
    id: 2,
    name: "user2",
    score: 3.7
  },
  {
    id: 3,
    name: "user3",
    score: 4.7
  },
  {
    id: 4,
    name: "user4",
    score: 5.0
  }
];
export const getMovies = () => movies;
export const getById = id => {
  const filteredMovies = movies.filter(movie => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => id !== movie.id);
  if (cleanMovies.length < movies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
