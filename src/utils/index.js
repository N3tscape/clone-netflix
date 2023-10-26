const API_KEY = "87bbfdd8b4168f65c22673e37a66e15c";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMedias = async (type) => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTopratedMedias = async (type) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMedias = async (type) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTVorMoviesByGenre = async (type, id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTVorMovieVideosByID = async (type, id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTVorMovieSearchResults = async (type, query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&include_adult=false&language=en-US&query=${query}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTVorMovieDetailsByID = async (type, id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSimilarTVorMovies = async (type, id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getAllfavorites = async (uid, accountID) => {
  try {
    const response = await fetch(
      `/api/favorites/get-all-favorites?id=${uid}&accountID=${accountID}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data && data.data;
  } catch (error) {
    console.log(error);
  }
};
