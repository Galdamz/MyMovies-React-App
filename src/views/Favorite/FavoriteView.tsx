import { Box, Flex, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import React, { Key, useEffect, useState } from 'react'
import MovieTime from '../../components/Animations/MovieTime';
import Layout from '../../components/Global/Navigation/Layout';
import MovieCard from '../../components/Home/MovieCard';
import { DetailData, MovieData } from '../../types/Navigation';
import useLocalStorage from 'use-local-storage';

const FavoriteView = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [data, setData] = useLocalStorage("favorited_movies", []);

    useEffect(() => {
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
                {
                    (data.length > 1) ? < >
                        <Box>
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
                        </Box>
                    </> : <Text>You Don't Any Favorite Movie yet</Text>
                }
            </VStack>
        </>
    )
}

export default FavoriteView;