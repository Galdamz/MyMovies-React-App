import { Box, Button, Divider, Flex, Img, StatArrow, StatHelpText, Text, useDisclosure, SlideFade, Collapse } from '@chakra-ui/react'
import { useState } from 'react';
import { MovieData } from '../../types/Navigation';

interface Props {
    MovieData: MovieData
}

const MovieCard = (props: Props) => {

    const { isOpen, onToggle } = useDisclosure()

    const { MovieData } = props;

    const [isOnHover, setIsOnHover] = useState<Boolean>(false);

    const handleOver = (value: Boolean) => {
        setIsOnHover(value);
    }

    return (
        <Box borderWidth={'2px'} p={''} maxWidth={{ lg: '30vh' }}>
            <Box>
                <Img
                    src={`${import.meta.env.VITE_API_MOVIE_IMAGES}${MovieData.poster_path}`}
                    aria-label='Movie Image'
                    maxHeight={{}}
                    loading={'lazy'}
                />
            </Box>
            <Divider />
            <Flex gap={4} flexDirection='column' p={3}>
                <Box
                >
                    <Text fontWeight={'bold'} fontSize={'2xl'}
                        maxHeight='10rem'>{MovieData.title}
                    </Text>
                    <Text fontStyle={'revert'} fontWeight={'extrabold'}>{MovieData.release_date}</Text>
                </Box>
                <Box>
                    <Text>{MovieData.overview}</Text>
                </Box>
                <Box>
                    <Text maxHeight={'20px'}>
                        Average Vote: {MovieData.vote_average}
                    </Text>
                </Box>
                <Box minWidth={'full'}>
                    <Button minWidth={'full'}>View More</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default MovieCard;