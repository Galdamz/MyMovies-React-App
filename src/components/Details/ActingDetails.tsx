import { useQuery } from 'react-query';
import React from 'react'
import { getCasting } from '../../api/fetchMovies';
import { Box, Divider, Heading, Image, SimpleGrid, VStack, Text, Flex } from '@chakra-ui/react';
import { CastingDetail } from '../../types/Navigation';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

interface Props {
    casting: Array<CastingDetail>
}

const ActingDetails = (props: Props) => {

    const { casting } = props;


    return (
        < >

            <VStack m={4}>
                <Box >
                    <Accordion defaultIndex={[1]} allowMultiple borderStyle={'none'}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='center'>
                                        <Heading fontSize={'3xl'}>Casting</Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <SimpleGrid columns={{ base: 3, lg: 12 }}>
                                    {
                                        casting.map((value, index) => {
                                            return (
                                                <Box key={index} maxWidth={{ base: '120px' }}>
                                                    <Image
                                                        src={
                                                            (value.profile_path)
                                                                ? `${import.meta.env.VITE_API_MOVIE_IMAGES}${value.profile_path}`
                                                                : 'http://placehold.jp/2b6cb0/ffffff/500x750.png?text=MyMovies%20App'
                                                        }
                                                        aria-label='Movie Image'
                                                        maxHeight={{}}
                                                        loading={'lazy'}
                                                    />
                                                    <Box textAlign={'center'}>
                                                        {value.original_name}
                                                        <Text fontWeight={'bold'}>As</Text>
                                                        {value.character}
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </SimpleGrid>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </VStack>
        </>
    )
}

export default ActingDetails;