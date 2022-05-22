import { Box, Flex, Heading, VStack, SimpleGrid, Text } from '@chakra-ui/react';
import { Key, useEffect } from 'react'
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/fetchMovies';
import MovieTime from '../../components/Animations/MovieTime';
import Layout from '../../components/Global/Navigation/Layout';
import SearchInput from '../../components/Global/SearchInput';
import MovieCard from '../../components/Home/MovieCard';
import { MovieData } from '../../types/Navigation';


interface Params {
    filter: String
}


const SearchView = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter');

    const {
        data: movies,
        isLoading,
        refetch,
        isIdle,
        isFetching
    } = useQuery(['searchedMovies', String(filter)], ({ queryKey }) => searchMovies(queryKey[1]), {
        enabled: false,
    })

    useEffect(() => {
        if (!filter || filter === "") {

        } else {
            refetch()
        }
        return () => {

        }
    }, [searchParams])

    return (
        <>
            <Layout />
            <VStack mx={4} mb={8}>
                <Flex direction={'column'} gap={'3'}>
                    <Box minW={''}>
                        <Heading textAlign={'center'}>Search a Movie</Heading>
                    </Box>
                    <Box>
                        <SearchInput />
                    </Box>
                    <Box>
                        <Heading></Heading>
                    </Box>
                    <Box>
                        {
                            (isIdle)
                                ? <Box>
                                    <Text>Example: Shrek 3</Text>
                                </Box>
                                : <Box>
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
                                                    {movies.results.map((value: MovieData, index: Key | null | undefined) => (
                                                        <MovieCard MovieData={value} key={index} />
                                                    )
                                                    )}
                                                </SimpleGrid>
                                            )
                                    }
                                </Box>
                        }

                    </Box>
                </Flex>
                < >

                </>
            </VStack>
        </>
    )
}

export default SearchView;