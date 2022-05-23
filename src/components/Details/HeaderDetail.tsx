import { Box, Grid, GridItem, Heading, Img, VStack, Text, Flex, Tag, Button, IconButton } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';
import { useEffect, useState } from "react";
import { DetailData } from "../../types/Navigation";
import useLocalStorage from 'use-local-storage';
interface Props {
    DetailData: DetailData
}

const HeaderDetail = (props: Props) => {

    const { DetailData } = props
    const [isOnFavorites, setIsOnFavorites] = useState(false);
    const [favoriteMovies, setFavoriteMovies] = useLocalStorage<Array<any>>("favorited_movies", []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setIsOnFavorites(checkIsOnFavorites(DetailData.id));
    }, [])

    useEffect(() => {
        setIsOnFavorites(checkIsOnFavorites(DetailData.id));
    }, [favoriteMovies])

    const checkIsOnFavorites = (movieID: String) => {
        const movies = favoriteMovies.filter((movie: DetailData) => movie.id === movieID)
        if (movies.length > 0) {
            return true
        }
        return false
    }

    const deleteItem = () => {
        const movies = favoriteMovies.filter((movie: DetailData) => movie.id !== DetailData.id)
        setFavoriteMovies(movies);
    }

    const addItem = () => {
        setFavoriteMovies([...favoriteMovies, DetailData]);
    }

    return (
        <VStack m={4}>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(12, 1fr)' }}
                templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
                gap={6}
            >
                <GridItem rowSpan={{ base: 1, sm: 6, md: 4 }} colSpan={{ base: 1, sm: 6, md: 4 }}>
                    <Flex justifyContent={'center'}>
                        <Img
                            src={
                                (DetailData.poster_path)
                                    ? `${import.meta.env.VITE_API_MOVIE_IMAGES}${DetailData.poster_path}`
                                    : 'http://placehold.jp/2b6cb0/ffffff/500x800.png?text=MyMovies%20App'
                            }
                            aria-label='Movie Image'
                            maxHeight={{ base: '400px' }}
                            loading={'lazy'}
                        />
                    </Flex>
                </GridItem>
                <GridItem rowSpan={{ base: 1, sm: 6, md: 6 }} colSpan={{ base: 1, sm: 6, md: 6 }}>
                    <Flex flexDirection={{ base: 'column', lg: 'initial' }} alignItems={'center'}>
                        <Heading>
                            {DetailData.original_title}
                        </Heading>
                        {
                            (isOnFavorites)
                                ? (<Button
                                    onClick={deleteItem}
                                    aria-label="Add to favorite"
                                    colorScheme='red'
                                    px={4}
                                    mx={4}
                                    leftIcon={<StarIcon />}>
                                    Remove From Favorites
                                </Button>)
                                : (<Button
                                    onClick={addItem}
                                    aria-label="Add to favorite"
                                    colorScheme='green'
                                    px={6}
                                    mx={4}
                                    leftIcon={<StarIcon />}>
                                    Add To Favorites
                                </Button>)
                        }
                    </Flex>
                    <Text fontSize={'xl'} mt={'2'}>( {DetailData.release_date.split('-')[0]} )</Text>
                    <Text fontSize={'lg'}>{DetailData.overview}</Text>
                    <Box mt={4}>
                        < >
                            <Text fontSize={'xl'} fontWeight={'bold'}>Genres</Text>
                            {
                                DetailData.genres.map((value, index) => {
                                    return (
                                        <Tag my={1} mr={2} colorScheme={'blue'} key={index}>{value.name}</Tag>
                                    )
                                })
                            }
                        </>
                    </Box>
                    <Box>
                        <Text fontSize={'xl'} fontWeight={'bold'} mt={2}>Status</Text>
                        <Tag my={1} mr={2} colorScheme={'green'}>{DetailData.status}</Tag>
                    </Box>
                    <Box display={'flex'} gap={8} mb={8}>
                        <Box>
                            <Text fontSize={'xl'} fontWeight={'bold'} mt={2}>Vote Average</Text>
                            <Text fontSize={'lg'}>{DetailData.vote_average}</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'xl'} fontWeight={'bold'} mt={2}>Vote Count</Text>
                            <Text fontSize={'lg'}>{DetailData.vote_count}</Text>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default HeaderDetail;