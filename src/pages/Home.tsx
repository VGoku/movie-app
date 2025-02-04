import { Container, Typography, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import MovieGrid from '../components/MovieGrid';
import { tmdbApi } from '../services/tmdb';

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['trending-movies'],
    queryFn: tmdbApi.getTrending,
  });

  const movies = data?.data?.results || [];

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Trending Movies
        </Typography>

        <MovieGrid
          movies={movies}
          loading={isLoading}
          error={error as Error}
        />
      </Box>
    </Container>
  );
};

export default Home; 