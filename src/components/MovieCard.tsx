import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { imageSizes } from '../services/tmdb';

interface MovieCardProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
        vote_average: number;
        release_date: string;
    };
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const navigate = useNavigate();
    const imageUrl = movie.poster_path
        ? `${imageSizes.poster.medium}${movie.poster_path}`
        : '/placeholder-movie.jpg';

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'scale(1.03)',
                    cursor: 'pointer',
                },
                backgroundColor: 'background.paper',
            }}
            onClick={() => navigate(`/movie/${movie.id}`)}
        >
            <CardMedia
                component="img"
                image={imageUrl}
                alt={movie.title}
                sx={{
                    aspectRatio: '2/3',
                    objectFit: 'cover',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    bgcolor: 'primary.main',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                }}
            >
                {movie.vote_average.toFixed(1)}
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography variant="h6" component="h2" noWrap>
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {new Date(movie.release_date).getFullYear()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard; 