import { Box, Center, Container, Divider, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { Key, useState } from 'react';
import { useQuery } from 'react-query';
import { getPopularMovies } from '../../api/fetchMovies';
import MovieTime from '../../components/Animations/MovieTime';
import Layout from '../../components/Global/Navigation/Layout';
import MovieCard from '../../components/Home/MovieCard';
import { MovieData } from '../../types/Navigation';

const HomeView = () => {

    const [collectionMovies, setCollectionMovies] = useState();

    const {
        data: popularMovies,
        isLoading,
    } = useQuery("popularMovies", getPopularMovies);

    return (
        < >
            <Layout />
            <VStack mx={4} mb={8}>
                <Flex>
                    <Box>
                        <Heading textAlign={'start'}>Most Popular Movies</Heading>
                    </Box>
                </Flex>
                < >
                    {
                        (isLoading)
                            ? (<MovieTime />)
                            :
                            (
                                <SimpleGrid
                                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                                    spacing={10}
                                    justifyContent={'center'}
                                >
                                    {popularMovies.results.map((value: MovieData, index: Key | null | undefined) => (
                                        <MovieCard MovieData={value} key={index} />
                                    )
                                    )}
                                </SimpleGrid>
                            )
                    }
                </>
            </VStack>
        </>
    )
}

export default HomeView;