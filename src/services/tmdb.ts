import axios from 'axios';

// TMDB API configuration
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// You'll need to replace this with your actual TMDB API key
const API_KEY = process.env.VITE_TMDB_API_KEY;

// Create axios instance with default config
const tmdbApi = axios.create({
    baseURL: TMDB_BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

// Image sizes for optimization
export const imageSizes = {
    poster: {
        small: `${IMAGE_BASE_URL}/w185`,
        medium: `${IMAGE_BASE_URL}/w342`,
        large: `${IMAGE_BASE_URL}/w500`,
        original: `${IMAGE_BASE_URL}/original`,
    },
    backdrop: {
        small: `${IMAGE_BASE_URL}/w300`,
        medium: `${IMAGE_BASE_URL}/w780`,
        large: `${IMAGE_BASE_URL}/w1280`,
        original: `${IMAGE_BASE_URL}/original`,
    },
};

// API endpoints
export const tmdbEndpoints = {
    // Movies
    trending: () => '/trending/movie/week',
    popular: () => '/movie/popular',
    topRated: () => '/movie/top_rated',
    movieDetails: (id: number) => `/movie/${id}`,
    movieCredits: (id: number) => `/movie/${id}/credits`,
    similarMovies: (id: number) => `/movie/${id}/similar`,
    movieVideos: (id: number) => `/movie/${id}/videos`,
    search: () => '/search/movie',
};

// API methods
export const tmdbApi = {
    getTrending: () => tmdbApi.get(tmdbEndpoints.trending()),
    getPopular: (page = 1) => tmdbApi.get(tmdbEndpoints.popular(), { params: { page } }),
    getTopRated: (page = 1) => tmdbApi.get(tmdbEndpoints.topRated(), { params: { page } }),
    getMovieDetails: (id: number) => tmdbApi.get(tmdbEndpoints.movieDetails(id)),
    getMovieCredits: (id: number) => tmdbApi.get(tmdbEndpoints.movieCredits(id)),
    getSimilarMovies: (id: number) => tmdbApi.get(tmdbEndpoints.similarMovies(id)),
    getMovieVideos: (id: number) => tmdbApi.get(tmdbEndpoints.movieVideos(id)),
    searchMovies: (query: string, page = 1) =>
        tmdbApi.get(tmdbEndpoints.search(), { params: { query, page } }),
};

export default tmdbApi; 