import { Box, Grid, GridItem, Heading, Img, VStack, Text, Flex, Tag, Button, IconButton } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';
import { useEffect } from "react";
import { DetailData } from "../../types/Navigation";

interface Props {
    DetailData: DetailData
}

const HeaderDetail = (props: Props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { DetailData } = props
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
                            src={`${import.meta.env.VITE_API_MOVIE_IMAGES}${DetailData.poster_path}`}
                            aria-label='Movie Image'
                            maxHeight={{ base: '400px' }}
                            loading={'lazy'}
                        />
                    </Flex>
                </GridItem>
                <GridItem rowSpan={{ base: 1, sm: 6, md: 6 }} colSpan={{ base: 1, sm: 6, md: 6 }}>
                    <Flex flexDirection={{ base: 'initial' }}>
                        <Heading>
                            {DetailData.original_title}
                        </Heading>
                        <IconButton
                            aria-label="Add to favorite"
                            icon={<StarIcon />}
                            colorScheme='blue'
                            mx={4}
                        >
                        </IconButton>
                    </Flex>
                    <Text fontSize={'xl'}>( {DetailData.release_date.split('-')[0]} )</Text>
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
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default HeaderDetail;