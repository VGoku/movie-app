import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import MovieGrid from '../components/MovieGrid';
import MoviePagination from '../components/MoviePagination';
import { omdbApi } from '../services/omdb';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [page, setPage] = useState(1);

  // Reset page when query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['search', query, page],
    queryFn: () => omdbApi.searchMovies(query, page),
    enabled: !!query,
    keepPreviousData: true,
  });

  const movies = data?.data?.Search || [];
  const totalResults = Number(data?.data?.totalResults || 0);
  const totalPages = Math.ceil(totalResults / 10); // OMDb returns 10 results per page

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage.toString());
    setSearchParams(newSearchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!query) {
    return (
      <Container maxWidth="xl">
        <Box py={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Please enter a search term
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Results for "{query}"
        </Typography>

        {totalResults > 0 && (
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Found {totalResults} results
          </Typography>
        )}

        <MovieGrid
          movies={movies}
          loading={isLoading}
          error={error as Error}
        />

        {totalResults === 0 && !isLoading && (
          <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 4 }}>
            No movies found matching "{query}"
          </Typography>
        )}

        {!isLoading && !error && movies.length > 0 && (
          <MoviePagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Box>
    </Container>
  );
};

export default Search; 