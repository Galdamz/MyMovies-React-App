import { useQuery } from 'react-query';
import React from 'react'
import { getCasting } from '../../api/fetchMovies';
import { Box, Divider, Heading, Image, SimpleGrid, VStack, Text, Flex } from '@chakra-ui/react';
import { CastingDetail } from '../../types/Navigation';

interface Props {
    casting: Array<CastingDetail>
}

const ActingDetails = (props: Props) => {

    const { casting } = props;

    return (
        < >

            <VStack m={4}>
                {/* <Box maxW={'900vh'} >
                    <Heading size={'xl'} mb={4} textAlign={'center'}>Casting</Heading>
                    <Box display={'flex'} overflowX={'scroll'} overflow={'hidden'} overflowY={'scroll'}>
                        {
                            casting.map((value, index) => (
                                <Box key={index} maxHeight={'300px'} maxWidth={'200px'}>
                                    <Box>
                                        <Image
                                            fallbackSrc='https://via.placeholder.com/500'
                                            src={`${import.meta.env.VITE_API_MOVIE_IMAGES}${value.profile_path}`}
                                            aria-label='Movie Image'
                                            loading={'lazy'}
                                            maxHeight={'200px'}
                                        />
                                    </Box>
                                    <Box textAlign={'center'} bgColor={'blackAlpha.700'} maxW={'134px'}>
                                        <Text>{value.name}</Text>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box> */}
            </VStack>
        </>
    )
}

export default ActingDetails;