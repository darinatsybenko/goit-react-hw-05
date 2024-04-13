import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const Api_Key = "7c97d726cf4d6114915ace4b2ac89681";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Yzk3ZDcyNmNmNGQ2MTE0OTE1YWNlNGIyYWM4OTY4MSIsInN1YiI6IjY2MTZkZDQ5N2E0ZWU3MDEzMDBhNDU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QuuHW9kt_SbX5ui8db3VgheOvj7PDjwxTgrv48zVA0I";
axios.defaults.headers.common["Authorization"] = token;

export const requestFilms = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${Api_Key}`);
  return data.results;
};
