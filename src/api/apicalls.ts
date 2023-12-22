import Config from 'react-native-config';
console.log(Config, 'test')
const apiKey = Config.API_KEY;

export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export const searchMovies = (keyword: string): string => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
};
export const movieDetails = (id: number): string => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key${apiKey}`;
};
export const moviecastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits}?api_key${apiKey}`;
};
