import { Box, Grid, GridItem, Heading, Img, VStack, Text, Flex, Tag, Button, IconButton } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';
import { useEffect } from "react";
interface Props {
    DetailData: DetailData
}

interface Genres {
    id: Number,
    name: String
}

interface DetailData {
    poster_path: String,
    id: String,
    original_title: String,
    release_date: String,
    vote_average: String,
    vote_count: String,
    overview: String,
    genres: Array<Genres>,
    backdrop_path: String,
    status: String
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
                templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(12, 1fr)' }}
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
                                DetailData.genres.map((value, item) => {
                                    return (
                                        <Tag my={1} mr={2} colorScheme={'blue'}>{value.name}</Tag>
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
            {/* <Grid
                templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
            >
                <GridItem rowSpan={1} colSpan={1} justifyContent={'center'} alignItems={'center'}>
                    <Box border={4} borderWidth={'4px'}>
                        <Img
                            src={`${import.meta.env.VITE_API_MOVIE_IMAGES}${DetailData.poster_path}`}
                            aria-label='Movie Image'
                            maxHeight={{ base: '400px' }}
                            loading={'lazy'}
                        />
                    </Box>
                </GridItem >
                <GridItem rowSpan={1} colSpan={1} textAlign={{ base: 'center' }}>
                    <Heading>{DetailData.original_title}</Heading>
                    <Text fontSize={'3xl'}>( {DetailData.release_date.split('-')[0]} )</Text>
                </GridItem>
            </Grid> */}
        </VStack>
    )
}

export default HeaderDetail;