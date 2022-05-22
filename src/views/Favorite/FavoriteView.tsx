import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React, { Key, useEffect, useState } from 'react'
import MovieTime from '../../components/Animations/MovieTime';
import Layout from '../../components/Global/Navigation/Layout';
import MovieCard from '../../components/Home/MovieCard';
import useMovieStorage from '../../hooks/useMovieStorage';
import { DetailData, MovieData } from '../../types/Navigation';

const FavoriteView = () => {


    const { fetchData, data } = useMovieStorage("favorited_movies");
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData()
        setIsLoading(false);
        return () => {

        }
    }, [])

    return (
        <>
            <Layout />
            <VStack mx={4} mb={8}>
                <Flex>
                    <Box>
                        <Heading textAlign={'start'}>Your Favorite Movies</Heading>
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
                                    {data.map((value: DetailData, index: Key | null | undefined) => (
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

export default FavoriteView;