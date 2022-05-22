import { Box, Grid, GridItem, VStack } from '@chakra-ui/react';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCasting, getDetails } from '../../api/fetchMovies';
import FilmCamera from '../../components/Animations/FilmCamera';
import HeaderDetail from '../../components/Details/HeaderDetail';
import Layout from '../../components/Global/Navigation/Layout'

const DetailsView = () => {

    const { id } = useParams();

    const {
        data: casting,
        isLoading: isCastingLoading,
    } = useQuery(['casting', String(id)], ({ queryKey }) => getCasting(queryKey[1]))

    const {
        data: details,
        isLoading: isDetailsLoading,
    } = useQuery(['details', String(id)], ({ queryKey }) => getDetails(queryKey[1]))

    return (
        <>
            <Layout />
            <Box>
                <Box m={6} >
                    {
                        (isCastingLoading || isDetailsLoading)
                            ? <FilmCamera />
                            :
                            <Box>
                                <HeaderDetail DetailData={details} />
                            </Box>
                    }
                </Box>
            </Box>
        </>
    )
}



export default DetailsView