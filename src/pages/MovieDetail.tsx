import { Container, Typography, Box, Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Movie Details
        </Typography>
        {/* Movie details will be added here */}
        <Skeleton variant="rectangular" width="100%" height={400} />
      </Box>
    </Container>
  );
};

export default MovieDetail; 