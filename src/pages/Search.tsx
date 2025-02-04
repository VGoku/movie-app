import { useSearchParams } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        Search Results
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
        {query ? `Showing results for "${query}"` : 'No search query provided'}
      </Typography>
      <Grid container spacing={3}>
        {/* Search results will be added here */}
      </Grid>
    </Container>
  );
};

export default Search; 