import { Grid, Box, CircularProgress } from '@mui/material';
import MovieCard from './MovieCard';

interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
    Type: string;
}

interface MovieGridProps {
    movies: Movie[];
    loading?: boolean;
    error?: Error | null;
}

const MovieGrid = ({ movies, loading = false, error = null }: MovieGridProps) => {
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <p>Error loading movies: {error.message}</p>
            </Box>
        );
    }

    return (
        <Grid container spacing={3} padding={3}>
            {movies.map((movie) => (
                <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
                    <MovieCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieGrid; 