import { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import MovieGrid from '../components/MovieGrid';
import { tmdbApi } from '../services/tmdb';

const Movies = () => {
  const [tab, setTab] = useState<'popular' | 'top_rated'>('popular');

  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', tab],
    queryFn: () => tab === 'popular' ? tmdbApi.getPopular() : tmdbApi.getTopRated(),
  });

  const movies = data?.data?.results || [];

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Movies
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            aria-label="movie categories"
          >
            <Tab label="Popular" value="popular" />
            <Tab label="Top Rated" value="top_rated" />
          </Tabs>
        </Box>

        <MovieGrid
          movies={movies}
          loading={isLoading}
          error={error as Error}
        />
      </Box>
    </Container>
  );
};

export default Movies; 