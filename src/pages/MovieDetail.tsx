import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Divider,
  Button,
} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import { omdbApi } from '../services/omdb';
import MovieGrid from '../components/MovieGrid';

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieData, isLoading } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => omdbApi.getMovieDetails(id || ''),
    enabled: !!id,
  });

  const movie = movieData?.data;

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (!movie) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Typography>Movie not found</Typography>
      </Box>
    );
  }

  const rating = parseFloat(movie.imdbRating) / 2; // Convert IMDb rating (0-10) to 0-5 scale

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                image={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'}
                alt={movie.Title}
                sx={{ aspectRatio: '2/3', objectFit: 'cover' }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" gutterBottom>
              {movie.Title} ({movie.Year})
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {movie.Genre.split(', ').map((genre) => (
                <Chip key={genre} label={genre} color="primary" size="small" />
              ))}
            </Box>

            <Typography paragraph>{movie.Plot}</Typography>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Director: {movie.Director}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Writers: {movie.Writer}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Stars: {movie.Actors}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Rating value={rating} precision={0.5} readOnly />
              <Typography>
                {movie.imdbRating}/10 ({movie.imdbVotes} votes)
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Released: {movie.Released}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Runtime: {movie.Runtime}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Rated: {movie.Rated}
              </Typography>
            </Box>

            {movie.Awards !== 'N/A' && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Awards
                </Typography>
                <Typography>{movie.Awards}</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MovieDetail; 