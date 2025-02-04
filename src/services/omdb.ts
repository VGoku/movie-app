import axios from 'axios';

// OMDb API configuration
const OMDB_BASE_URL = 'https://www.omdbapi.com';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

if (!API_KEY) {
    throw new Error('OMDb API key is not set in environment variables');
}

// Create axios instance with default config
const axiosInstance = axios.create({
    baseURL: OMDB_BASE_URL,
});

// API methods
export const omdbApi = {
    // Search movies
    searchMovies: (query: string, page = 1) =>
        axiosInstance.get('/', {
            params: {
                apikey: API_KEY,
                s: query,
                type: 'movie',
                page,
            },
        }),

    // Get movie details by ID
    getMovieDetails: (id: string) =>
        axiosInstance.get('/', {
            params: {
                apikey: API_KEY,
                i: id,
                plot: 'full',
            },
        }),

    // Get popular movies (since OMDb doesn't have this endpoint, we'll search for common words)
    getPopular: (page = 1) =>
        axiosInstance.get('/', {
            params: {
                apikey: API_KEY,
                s: 'love', // We can change this to get different movies
                type: 'movie',
                page,
                y: new Date().getFullYear(), // Current year for newer movies
            },
        }),

    // Get top rated (we'll search for award-winning movies)
    getTopRated: (page = 1) =>
        axiosInstance.get('/', {
            params: {
                apikey: API_KEY,
                s: 'oscar', // Search for Oscar-related movies
                type: 'movie',
                page,
            },
        }),
};

export default omdbApi; 