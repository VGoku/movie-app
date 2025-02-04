import { Container, Typography, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import MovieGrid from '../components/MovieGrid';
import { omdbApi } from '../services/omdb';

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: () => omdbApi.getPopular(),
  });

  const movies = data?.data?.Search || [];

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Popular Movies
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