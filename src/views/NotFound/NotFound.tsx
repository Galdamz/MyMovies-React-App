import { Box, Button, Heading, Image, Link } from '@chakra-ui/react'
import Layout from '../../components/Global/Navigation/Layout'
import NotFoundImage from './../../assets/svg/undraw_page_not_found_re_e9o6.svg'
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Layout />
            <Box minHeight={{ base: '60vh', md: '80vh' }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Box textAlign={'center'}>
                    <Image src={NotFoundImage} maxHeight={'40vh'}></Image>
                    <Box textAlign={'center'}>
                        <Heading mt={10}>404</Heading>
                        <Heading mt={4}>Page Not Found</Heading>
                        <Link as={RouterLink} to={'/'}>
                            <Button mt={4} colorScheme={'blue'}>Back to Home</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default NotFound