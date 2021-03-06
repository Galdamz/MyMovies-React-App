import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { MovieData } from '../../types/Navigation';

interface Props {
    MovieData: MovieData
}

const MovieCard = (props: Props) => {
    const navigate = useNavigate();

    const { MovieData } = props;

    const sentToDetailView = () => {
        navigate('/movie/' + MovieData.id);
    }

    return (
        <Box borderWidth={'2px'} p={''} maxWidth={{ lg: '30vh' }}>
            <Box>
                <Image
                    src={
                        (MovieData.poster_path)
                            ? `${import.meta.env.VITE_API_MOVIE_IMAGES}${MovieData.poster_path}`
                            : 'http://placehold.jp/2b6cb0/ffffff/500x500.png?text=MyMovies%20App'
                    }
                    aria-label='Movie Image'
                    maxHeight={{}}
                    loading={'lazy'}
                />
            </Box>
            <Divider />
            <Flex gap={4} flexDirection='column' p={3}>
                <Box
                    textAlign='center'
                >
                    <Text fontWeight={'bold'} fontSize={'2xl'} overflow={'auto'}
                        maxHeight='10rem'>{MovieData.title}
                    </Text>
                    <Text fontStyle={'revert'} fontWeight={'extrabold'}>{MovieData.release_date}</Text>
                </Box>
                <Divider />
                <Box>
                    <Text>{MovieData.overview}</Text>
                </Box>
                <Box>
                    <Text maxHeight={'20px'} fontWeight={'bold'} fontSize={'larger'}>
                        Average Vote: {MovieData.vote_average}
                    </Text>
                </Box>
                <Box minWidth={'full'}>
                    <Button minWidth={'full'} colorScheme={'blue'}
                        onClick={() => sentToDetailView()}>View More</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default MovieCard;