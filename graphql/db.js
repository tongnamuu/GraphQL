import fetch from "node-fetch";
import Axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const API_URL = "https://yts-proxy.now.sh/list_movies.json?";
const DETAIL_URL = `${BASE_URL}movie_details.json`;
const SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await Axios.get(API_URL, {
    params: {
      limit: limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await Axios.get(DETAIL_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await Axios.get(SUGGESTION_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
