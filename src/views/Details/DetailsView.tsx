import { Box, Grid, GridItem, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCasting, getDetails, getSimilarMovies } from '../../api/fetchMovies';
import FilmCamera from '../../components/Animations/FilmCamera';
import ActingDetails from '../../components/Details/ActingDetails';
import HeaderDetail from '../../components/Details/HeaderDetail';
import RelatedMovies from '../../components/Details/RelatedMovies';
import Layout from '../../components/Global/Navigation/Layout'

const DetailsView = () => {

    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const {
        data: casting,
        isLoading: isCastingLoading,
    } = useQuery(['casting', String(id)], ({ queryKey }) => getCasting(queryKey[1]))

    const {
        data: details,
        isLoading: isDetailsLoading,
    } = useQuery(['details', String(id)], ({ queryKey }) => getDetails(queryKey[1]))

    const {
        data: relatedMovies,
        isLoading: isRelatedLoading,
    } = useQuery(['relatedMovies', String(id)], ({ queryKey }) => getSimilarMovies(queryKey[1]))

    return (
        <>
            <Layout />
            <Box>
                <Box m={6} >
                    {
                        (isDetailsLoading || isCastingLoading || isRelatedLoading)
                            ? <FilmCamera />
                            :
                            <Box>
                                <Box>
                                    <HeaderDetail DetailData={details} />
                                </Box>
                                <Box>
                                    <ActingDetails casting={casting.cast} />
                                </Box>
                                <Box>
                                    <RelatedMovies movies={relatedMovies.results} />
                                </Box>
                            </Box>
                    }
                </Box>
            </Box>
        </>
    )
}

export default DetailsView