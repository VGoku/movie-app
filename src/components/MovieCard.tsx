import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
    movie: {
        imdbID: string;
        Title: string;
        Poster: string;
        Year: string;
        Type: string;
    };
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const navigate = useNavigate();
    const imageUrl = movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg';

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
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
        >
            <CardMedia
                component="img"
                image={imageUrl}
                alt={movie.Title}
                sx={{
                    aspectRatio: '2/3',
                    objectFit: 'cover',
                }}
            />
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography variant="h6" component="h2" noWrap>
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.Year}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard; 