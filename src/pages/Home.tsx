import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 2,
          }}
        >
          Welcome to MovieFlix
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
          }}
        >
          Discover the latest and greatest movies
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 