import { Container, Typography, Grid } from '@mui/material';

const Movies = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        Popular Movies
      </Typography>
      <Grid container spacing={3}>
        {/* Movie cards will be added here */}
      </Grid>
    </Container>
  );
};

export default Movies; 